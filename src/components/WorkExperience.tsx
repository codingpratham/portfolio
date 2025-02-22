import { Building2 } from "lucide-react"; // Import Lucide Icons

const WorkExperience = () => {
  return (
    <section className="flex flex-col items-start min-h-screen px-8 md:px-20 pt-20">
      <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
        Work Experience
      </h2>
      <p className="text-gray-400 mt-2">
        All my professional experiences as a software engineer
      </p>

      {/* Work Experience Card */}
      <div className="mt-10 flex items-center gap-4">
        <Building2 size={32} className="text-gray-400" />
        <div>
          <h3 className="text-xl font-semibold">GoSoft Pvt. Ltd</h3>
          <p className="text-gray-400">Trainee</p>
          <p className="text-gray-400">Sep 2023 - Oct 2023</p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
