type CardProps = {
  heading?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
};

function Card({ heading, background = "primary", className = "", children}: CardProps) {
  return (
    <div className={`${className} w-9/10`}>
      {/* Heading with top/left border */}
      {heading && (
        <div className={`mb-1 px-5 w-fit relative border-l-4 border-t-2 border-foreground bg-${background}`}>
          <h1 className="text-3xl font-bold tracking-wide inline-block">
            {heading}
          </h1>
        </div>
      )}

      {/* Content area with right/bottom border */}
      {children && (
        <div className={`w-full bg-${background} p-8 shadow-xl border-r-4 border-b-2 border-foreground animate-fade-in`}>
          <div className="space-y-6 text-left text-lg leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;