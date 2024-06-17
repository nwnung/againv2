const Button = ({ label, href, className, type }) => {
  return (
    <>
      <div
        className={`bg-gray-50/90 px-5 py-2 rounded-md text-center font-semibold hover:bg-zinc-900 hover:text-gray-50 transition duration-200 cursor-pointer ${className}`}
      >
        {label}
      </div>
    </>
  );
};

export default Button;
