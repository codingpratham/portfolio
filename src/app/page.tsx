import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

const page = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#0A0F0D] text-gray-300 p-8 md:p-16 max-w-6xl mx-auto" >
        <Hero/>
        {/* <WorkExperience/> */}
        <Projects/>
      </main>
    </div>
  );
}

export default page;