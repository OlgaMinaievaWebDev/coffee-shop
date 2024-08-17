function Button({ children, type }) {
  const base =
    "inline-block text-sm rounded-full bg-orange font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-orange focus:bg-orange focus:outline-none focus:ring focus:ring-orange focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-darkBrown font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-darkBrown hover:text-white focus:bg-darkBrown focus:text-white focus:outline-none focus:ring focus:ring-darkBrown focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 border-solid border-white",
  };
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
