'use client';

import { motion, useScroll } from "framer-motion";

export default function ProgressIndicator() {
    const { scrollYProgress } = useScroll();

    return (
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100" className="-rotate-90 fill-none stroke-[15%] stroke-accent-rgb">
          <circle cx="50" cy="50" r="20" pathLength="1" className="opacity-30" />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            pathLength="1"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
    )
}