import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Работно време</h3>
        <p className={styles.bold}>Понеделник - Петък</p>
        <p>9:00 - 18:00 часа</p>
        <p className={styles.bold}>Събота - Неделя</p>
        <p>10:00 - 14:00 часа</p>
      </div>
      <div>
        <h3>КОНТАКТИ</h3>
        <p className={styles.bold}>Адрес:</p>
        <p>Област: Варна, Община: Аксаково</p>
        <p>Гр. Игнатиево, ул. Георги Пертлешев № 30</p>
        <p className={styles.bold}>Телефонен номер:</p>
        <p>0877212222</p>
        <p className={styles.bold}>e-mail</p>
        <p>clean_star@abv.bg</p>
      </div>
    </footer>
  );
};

export default Footer;
