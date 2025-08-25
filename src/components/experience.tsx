import type { JSX } from "react";

const Experience = ({
  svg,
  title,
  description,
  hues,
}: {
  svg: JSX.Element;
  title: string;
  description: string;
  hues: {
    starting: string;
    ending: string;
  };
}) => {
  return (
    <div className="experience">
      <div className="experience-content">
        {svg}
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <button
        style={{
          background: `linear-gradient(90deg, ${hues.starting} 0%, ${hues.ending} 100%)`,
        }}
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="white"
        >
          <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
        </svg>
      </button>
    </div>
  );
};

export default Experience;
