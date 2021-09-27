import { motion } from "framer-motion";

const pathVariants = {
  hidden: { rotate: 270, x: 4000, y: 2000, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.25, damping: 15 },
  },
};

const pathVariants2 = {
  hidden: { rotate: -270, x: -4000, y: -2000, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.25, damping: 15 },
  },
};

export default function NjLogo() {
  return (
    <div className="bg-gray-800 w-screen h-screen grid justify-center items-center overflow-hidden">
      <div className="w-64">
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 1500 1500"
            initial="hidden"
            animate="visible"
            style={{ overflow: "visible", maxWidth: "100%" }}
          >
            <motion.path
              fill="#f84aa7"
              d="M1263.09 150v1200h-750V750h150v450h450V300h-375V150h525z"
              variants={pathVariants}
            />
            <motion.path
              fill="#00bff3"
              d="M213.09 450h750v600h-150V600h-450v600h-150V450z"
              variants={pathVariants2}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
