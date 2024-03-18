"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./slide.module.scss";
import { SlBasket } from "react-icons/sl";
import Image from "next/image";
import { useEffect, useState } from "react";

const SlidePage = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Change slidesPerView based on screen width
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.swiperContainer}>
      <h2>Най продавани</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/af50.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>939,00лв</p>
            <p className={styles.onlinePrice}>550,00лв</p>
            <p className={styles.name}>Пречиствател на въздух Karcher AF 50</p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/af100.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>1344,00лв</p>
            <p className={styles.onlinePrice}>1329,00лв</p>
            <p className={styles.name}>
              Пречиствател на въздух Karcher AF 100 H13
            </p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/lmo18.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>689,00лв</p>
            <p className={styles.onlinePrice}>654,00лв</p>
            <p className={styles.name}>
              Акумулаторна косачка Karcher LMO 18-33 Battery Set
            </p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/lmp36-46.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>1179,00лв</p>
            <p className={styles.onlinePrice}>1120,00лв</p>
            <p className={styles.name}>
              Акумулаторна косачка Karcher LMO 36-46 Battery
            </p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/sc2.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>279,00лв</p>
            <p className={styles.onlinePrice}>265,00лв</p>
            <p className={styles.name}>Парочистачка Karcher SC 2 EasyFix</p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/sc5deluxe.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>949,00лв</p>
            <p className={styles.onlinePrice}>901,00лв</p>
            <p className={styles.name}>
              Парочистачка Karcher SC 5 Deluxe Signature Line EU
            </p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <Image
              src={"/sellers/sv7.jpg"}
              alt="image"
              height={100}
              width={100}
            />
            <p className={styles.price}>1399,00лв</p>
            <p className={styles.onlinePrice}>1119,00лв</p>
            <p className={styles.name}>Парен екстрактор Karcher SV 7 EU</p>
            <div className={styles.buy}>
              <SlBasket />
              <a href="/buy">КУПИ ОНЛАЙН</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlidePage;
