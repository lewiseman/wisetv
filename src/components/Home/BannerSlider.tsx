import styles from "./BannerSlider.module.css";

export default function BannerSlider() {
  return (
    <div className={`${styles.carousel_container}`}>
      <div className={`${styles.carousel}`}>
        <div className={`${styles.carousel_slider}`}>
          <div id="carousel_1" className={`${styles.carousel_item}`}>
            <img
              className={`${styles.carousel_image}`}
              src="https://images.unsplash.com/photo-1683009427598-9c21a169f98f?q=80&w=2370&auto=format&fit=crop"
            />
          </div>
          <div id="carousel_2" className={`${styles.carousel_item}`}>
            <img
              className={`${styles.carousel_image}`}
              src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2371&auto=format&fit=crop"
            />
          </div>
          <div id="carousel_3" className={`${styles.carousel_item}`}>
            <img
              className={`${styles.carousel_image}`}
              src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=2370&auto=format&fit=crop"
            />
          </div>
        </div>
        <div className={`${styles.carousel_nav}`}>
          <a href="#carousel_1"></a>
          <a href="#carousel_2"></a>
          <a href="#carousel_3"></a>
        </div>
      </div>
    </div>
  );
}
