// src/components/ConnectedRoles.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  { label: "Project Manager", desc: "Oversees the entire site’s progress, cost, and compliance." },
  { label: "Engineer",         desc: "Manages timeline, inventory flow, and technical approvals." },
  { label: "Supervisor",       desc: "Assigns workforce tasks, logs issues, and ensures task delivery." },
  { label: "Workforce",        desc: "Executes assigned tasks efficiently." },
];

export default function ConnectedRoles() {
  return (
    <section className="bg-black text-white py-20">
      <h2 className="text-center text-4xl lg:text-5xl font-bold text-yellow-400 mb-16">
        Connected Roles. Complete Control.
      </h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 space-y-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="
              flex flex-col md:flex-row
              items-center        /* center on mobile & desktop */
              justify-between
            "
          >
            {/* Left cell: label + arrow */}
            <div className="w-full md:w-1/2 flex justify-center text-yellow-400 mb-4 md:mb-0">
              <div className="flex flex-col items-center">
                <span className="text-xl lg:text-2xl font-medium">
                  {step.label}
                </span>
                <ChevronDown
                  className={`
                    w-5 h-5 mt-2
                    ${i < steps.length - 1 ? "animate-bounce" : "invisible"}
                  `}
                />
              </div>
            </div>

            {/* Right cell: description */}
            <div className="w-full md:w-1/2">
              <p className="text-lg lg:text-xl max-w-md md:max-w-lg mx-auto
                            text-center md:text-left">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
