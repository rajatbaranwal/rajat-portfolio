import './Badge.css';

export const Badge = ({ children }) => <span className="badge mono">{children}</span>;

// Ownership label: Built / Integrated / Evaluated / Tested
export const KindTag = ({ kind }) => {
  const key = kind.split(' ')[0].toLowerCase();
  return <span className={`kind-tag mono kind-${key}`}>{kind}</span>;
};
