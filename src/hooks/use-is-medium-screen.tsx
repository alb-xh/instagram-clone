import { LARGE_SCREEN_MIN_WIDTH } from "../constants";
import useOnResize from "./use-on-resize.hook";

export default function useIsMediumScreen (): boolean {
  const screenWidth = useOnResize();
  return screenWidth < LARGE_SCREEN_MIN_WIDTH
};
