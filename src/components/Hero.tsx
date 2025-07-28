function Home() {
    return (
        <section
            id="Home"
            className="relative min-h-[calc(100vh-4rem)] flex justify-center items-center p-4 text-left bg-primary overflow-hidden"
        >
            <div className="animate-fade-in-slow absolute inset-0 bg-[url(/old-wall.png)] bg-repeat bg-[length:300px] pointer-events-none z-0" />
            <div className="absolute inset-0  bg-primary opacity-10 pointer-events-none z-0" />
            <div className="relative z-10 fade flex flex-col items-start w-max mx-auto animate-slide">
              <div className="text-5xl font-bold leading-relaxed w-1/2 place-self-center">
                  Hi, I'm Mo.
              </div>
              <div className="text-4xl font-light w-1/2 place-self-center">
                  I'm a full-stack developer
              </div>
            </div>
        </section>
    );
}
export default Home;
