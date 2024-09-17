const Button = ({ children, onClick, variant = "primary", ...props }) => {
  const baseStyles = `px-[1em] py-[0.5em] rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
    text-sm md:text-base lg:text-lg text-center`;


  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
