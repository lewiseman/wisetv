import styles from "./watchmovie.module.css";

export default function MovieWatchPage() {
  return (
    <div className={styles.box}>
      <iframe
        src="https://www.2embed.to/embed/tmdb/movie?id=695721"
        allowFullScreen
      ></iframe>
    </div>
  );
}
