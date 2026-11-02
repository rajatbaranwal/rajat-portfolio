// Vector version of the concentric mark in public/logo.png
const Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" aria-hidden="true">
    <circle cx="22" cy="22" r="21" fill="#34306a" />
    <circle cx="22" cy="22" r="15" fill="#5856c4" />
    <circle cx="22" cy="22" r="8.5" fill="#b3b1ec" />
    <circle cx="22" cy="22" r="4" fill="#e4e3fa" />
    <path d="M22 1a21 21 0 0 0 0 42z" fill="#09090b" opacity=".38" />
  </svg>
);

export default Logo;
