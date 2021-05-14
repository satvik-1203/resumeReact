import React from "react";
import { motion } from "framer-motion";

export default function Wave() {
  return (
    <svg
      className="wave"
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={waveAni}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#D96ED4"
        strokeOpacity="0.6"
        strokeWidth="6"
      />
    </svg>
  );
}

const waveAni = {
  initial: { pathLength: 0, pathOffset: 1 },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 2 },
  },
  exit: {
    pathLength: 0,
    pathOffset: 1,
    transition: {
      duration: 1,
    },
  },
};
