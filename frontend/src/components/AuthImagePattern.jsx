const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center bg-base-100 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl
                ${i % 2 === 0 ? "animate-pulse bg-primary/20" : "bg-base-300"}
              `}
            />
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-base-content">{title}</h2>
        <p className="text-base-content/60 mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
