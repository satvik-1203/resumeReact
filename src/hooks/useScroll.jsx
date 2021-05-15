import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.2 });
  const control = useAnimation();
  if (view) {
    control.start("animate");
  } else {
    control.start("initial");
  }
  return [element, control];
};
