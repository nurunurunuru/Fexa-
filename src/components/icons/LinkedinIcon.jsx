function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.2" cy="8" r="1.15" fill="currentColor" />
      <path d="M6.2 11h2v7h-2v-7Zm4.2 0h1.9v1c.5-.75 1.3-1.2 2.3-1.2 1.9 0 2.9 1.25 2.9 3.4V18h-2v-3.4c0-1-.4-1.7-1.35-1.7-.75 0-1.2.5-1.4 1-.07.18-.09.42-.09.66V18h-2v-7Z" fill="currentColor" />
    </svg>
  );
}

/* ----------------------------------------------------------------------- */
/*  Shared: scroll reveal + count-up                                       */
/* ----------------------------------------------------------------------- */

export default LinkedinIcon;
