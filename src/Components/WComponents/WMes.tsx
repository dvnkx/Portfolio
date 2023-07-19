import { useLottie } from "lottie-react";
import mes from "../../assets/widgets/mes.json";

const WMes = () => {
  const options = {
    animationData: mes,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default WMes;
