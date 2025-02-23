"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    name: "Referral-app",
    description: "A personal Second Brain with AI feature to communicate with your second brain.",
    tech: ["Next.js", "Tailwind", "TurboRepo", "PostgreSQL", "PrismaORM", "ShadCN"],
    github: "https://github.com/yourrepo",
  },
];

const Projects = () => {
  return (
    <section>
      <h2 className="text-2xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-[#121817] border-gray-800">
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-black/30 rounded-lg"></div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-[#4A9F5A]/10 text-[#4A9F5A] border-[#4A9F5A]/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Placeholder Cards for Additional Projects */}
        {[...Array(3)].map((_, i) => (
          <Card key={`placeholder-${i}`} className="bg-[#121817] border-gray-800">
            <CardContent className="p-6">
              <div className="aspect-video bg-black/30 rounded-lg"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
