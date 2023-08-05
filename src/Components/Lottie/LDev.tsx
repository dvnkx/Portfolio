import { useLottie } from "lottie-react";
import dev from "../../assets/widgets/dev.json";

const LDev = () => {
  const options = {
    animationData: dev,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LDev;
