function PrimaryButton({ children, className = "", ...rest }) {
  return (
    <button
      className={
        "premium-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-95 " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;