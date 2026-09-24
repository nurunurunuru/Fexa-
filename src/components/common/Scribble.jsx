function Scribble({ text, className = "" }) {
  return (
    <span
      className={"pointer-events-none select-none text-emerald-300 " + className}
      style={{ fontFamily: "'Segoe Script','Brush Script MT',cursive", fontSize: 20, lineHeight: 1.1 }}
    >
      {text}
    </span>
  );
}

/* ----------------------------------------------------------------------- */
/*  Navbar                                                                  */
/* ----------------------------------------------------------------------- */

export default Scribble;
