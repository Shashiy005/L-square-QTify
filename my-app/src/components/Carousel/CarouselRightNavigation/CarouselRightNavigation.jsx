import { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation({ swiperRef }) {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const updateState = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateState);
    updateState();

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiperRef]);

  if (isEnd) return null;

  return (
    <div className={styles.rightNavigation}>
      <RightArrow onClick={() => swiperRef.current.slideNext()} />
    </div>
  );
}
