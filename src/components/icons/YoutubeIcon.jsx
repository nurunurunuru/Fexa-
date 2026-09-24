function YoutubeIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.3v5.4l4.7-2.7-4.7-2.7Z" fill="currentColor" />
    </svg>
  );
}

export default YoutubeIcon;
