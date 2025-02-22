"use client";

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen px-8 md:px-72">
      <div className="max-w-2xl text-[#b4cc9a]">
        <p className="text-lg">Hi, my name is</p>
        
        {/* Name with Gradient */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#29351C] to-[#87BA4B] bg-clip-text text-transparent">
          Pratham Koranne.
        </h1>

        <h2 className="text-3xl font-semibold mt-4 text-[#b4cc9a]">
          I build things for the web.
        </h2>

        <p className="mt-4 leading-relaxed text-[#b4cc9a]">
          I'm a full-stack developer from India. I specialize in turning ideas into fully
          functional web applications. Whether you’re building a product from the ground up or
          improving an existing one, I can help bring your vision to life with clean, efficient code.
        </p>

        {/* Resume Button */}
        <button className="mt-6 px-6 py-3 font-medium rounded-md transition bg-[#87BA4B] text-black hover:bg-[#6a9e3b]">
          Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
