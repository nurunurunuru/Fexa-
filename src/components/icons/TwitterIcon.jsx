function TwitterIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 5.8c-.66.3-1.36.5-2.1.6a3.7 3.7 0 0 0 1.6-2 7.3 7.3 0 0 1-2.33.9 3.66 3.66 0 0 0-6.24 3.34A10.4 10.4 0 0 1 3.4 4.9a3.66 3.66 0 0 0 1.13 4.89c-.6-.02-1.16-.19-1.65-.46v.05a3.67 3.67 0 0 0 2.94 3.6c-.55.15-1.13.17-1.68.06a3.67 3.67 0 0 0 3.42 2.55A7.36 7.36 0 0 1 2.9 16.9a10.4 10.4 0 0 0 5.63 1.65c6.75 0 10.45-5.6 10.45-10.45l-.01-.48A7.5 7.5 0 0 0 20 5.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TwitterIcon;
