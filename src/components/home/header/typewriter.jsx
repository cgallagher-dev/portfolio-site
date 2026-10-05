import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-3 h-8 font-mono text-lg text-primary md:text-xl">
      <span className="sr-only">
        Innovation Engineer, AI and Cloud. Chair of the RUN-EU Student Council.
      </span>
      <div aria-hidden="true">
        <Typewriter
          options={{
            strings: [
              "Innovation Engineer, AI & Cloud",
              "Building multi-agent systems",
              "Final-year software student",
              "Chair, RUN-EU Student Council",
            ],
            autoStart: true,
            loop: true,
            delay: 45,
            deleteSpeed: 25,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterComponent;
