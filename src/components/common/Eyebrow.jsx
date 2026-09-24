function Eyebrow({ children, className = "" }) {
  return (
    <span className={`eyebrow-light ${className}`}>
      <span className="eyebrow-light-content">
        {children}
      </span>
    </span>
  );
}

export default Eyebrow;