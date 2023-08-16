import { useLottie } from "lottie-react";
import dev from "../../../public/assets/widgets/dev.json";
import { motion } from "framer-motion";

const LDev = () => {
  const options = {
    animationData: dev,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.455, 0.03, 0.515, 0.955],
          delay: 0.8,
        },
      }}
      viewport={{ once: true }}
      className="absolute right-0 top-[40%] w-[450px] h-[450px] max-xl:left-[45%] max-xl:top-[75%] max-md:top-[100%] max-md:left-[-5%]"
    >
      {View}
    </motion.div>
  );
};

export default LDev;
