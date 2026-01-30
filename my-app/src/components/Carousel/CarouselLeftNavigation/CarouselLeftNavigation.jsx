import { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation({ swiperRef }) {
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", updateState);
    updateState();

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiperRef]);

  if (isBeginning) return null;

  return (
    <div className={styles.leftNavigation}>
      <LeftArrow onClick={() => swiperRef.current.slidePrev()} />
    </div>
  );
}
