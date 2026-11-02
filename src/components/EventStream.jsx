import './EventStream.css';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Illustrative trace of the real-time transcription + translation flow (no real data).
const events = [
  { dir: '→', name: 'ws.connect', meta: '/transcribe', status: 'open' },
  { dir: '→', name: 'audio.stream', meta: 'async chunks', status: 'ok' },
  { dir: '←', name: 'scribe.partial', meta: '"Welcome, everyone, to…"', status: 'partial' },
  { dir: '←', name: 'scribe.final', meta: '"Welcome, everyone, to the keynote."', status: 'final' },
  { dir: '→', name: 'translation.lookup', meta: 'postgres cache', status: 'hit' },
  { dir: '·', name: 'n8n.gemini', meta: 'translate', status: 'skipped' },
  { dir: '←', name: 'ui.render', meta: 'transcript + translation', status: 'done' },
];

const STEP_MS = 900;
const HOLD_STEPS = 4;

const EventStream = () => {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % (events.length + HOLD_STEPS));
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const visible = reduceMotion ? events.length : Math.min(step + 1, events.length);

  return (
    <figure className="stream" aria-label="Illustration of a real-time transcription and translation event stream">
      <div className="stream-head mono">
        <span className="stream-live">
          <span className="stream-live-dot" aria-hidden="true" /> live session
        </span>
        <span className="stream-title">realtime-pipeline</span>
      </div>

      <ol className="stream-body mono" aria-hidden="true">
        {events.map((event, i) => (
          <li key={event.name} className={`stream-line ${i < visible ? 'is-visible' : ''}`}>
            <span className="stream-dir">{event.dir}</span>
            <span className="stream-name">{event.name}</span>
            <span className="stream-meta">{event.meta}</span>
            <span className={`stream-status status-${event.status}`}>{event.status}</span>
          </li>
        ))}
        <li className="stream-cursor" aria-hidden="true" />
      </ol>

      <figcaption className="stream-caption">
        Illustrative — the shape of the real-time transcription &amp; translation flow I worked on at XiPHI AI.
      </figcaption>
    </figure>
  );
};

export default EventStream;
