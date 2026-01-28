import { motion } from "framer-motion";
import { pageTransition, pageTransitionTiming } from "../../lib/motion.js";

export default function Page({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransitionTiming}
    >
      {children}
    </motion.div>
  );
}
