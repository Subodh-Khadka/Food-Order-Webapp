export default function Button({ children, textOnly, cssClassName, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + cssClassName;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
