const TabButtons = ({ isLogin, setIsLogin }) => {
  return (
    <div className="grid grid-cols-2 items-center justify-center relative border-b-[2px]">
      <button
        className={`pb-2 text-center font-semibold transition-colors duration-200 ${
          isLogin ? "text-primary" : ""
        }`}
        onClick={() => setIsLogin(true)}
      >
        Login
      </button>
      <button
        className={`pb-2 text-center font-semibold transition-colors duration-200 ${
          !isLogin ? "text-primary" : ""
        }`}
        onClick={() => setIsLogin(false)}
      >
        Sign Up
      </button>

      {/* Animated underline */}
      <div
        className={`absolute w-1/2 h-[2px] bg-primary-dark top-full inset-0 transition-transform duration-300 ${
          isLogin ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </div>
  );
};

export default TabButtons;