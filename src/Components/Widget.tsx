import { useLottie } from "lottie-react";
import dev from "../assets/widgets/dev.json";

const Widget = () => {
  const options = {
    animationData: dev,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Widget;
