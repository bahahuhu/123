import Image from "next/image";
import styles from "./buy.module.scss";

const buyPage = () => {
  return (
    <section className={styles.buy}>
      <Image
        src={"/under-constrution.jpg"}
        alt="image"
        height={640}
        width={640}
      />
    </section>
  );
};

export default buyPage;
