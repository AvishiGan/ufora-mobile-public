import React from "react";

type SchoolIconProps = {
  width: number;
  height: number;
};

const SchoolIcon: React.FC<SchoolIconProps> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 14L20.5 10L28.5 14M26.5 18L30.5 20V28C30.5 28.5304 30.2893 29.0391 29.9142 29.4142C29.5391 29.7893 29.0304 30 28.5 30H12.5C11.9696 30 11.4609 29.7893 11.0858 29.4142C10.7107 29.0391 10.5 28.5304 10.5 28V20L14.5 18"
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 30V26C22.5 25.4696 22.2893 24.9609 21.9142 24.5858C21.5391 24.2107 21.0304 24 20.5 24C19.9696 24 19.4609 24.2107 19.0858 24.5858C18.7107 24.9609 18.5 25.4696 18.5 26V30M26.5 13V30M14.5 13V30"
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 19C21.6046 19 22.5 18.1046 22.5 17C22.5 15.8954 21.6046 15 20.5 15C19.3954 15 18.5 15.8954 18.5 17C18.5 18.1046 19.3954 19 20.5 19Z"
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="1" y="0.5" width="39" height="39" rx="19.5" stroke="#B8B8B8" />
  </svg>
);

export default SchoolIcon;
