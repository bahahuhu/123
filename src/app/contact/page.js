import styles from "./contact.module.scss";

const { default: Image } = require("next/image");

const contactPage = () => {
  return (
    <section className={styles.about}>
      <h1>За Нас</h1>
      <article className={styles.article}>
        <Image src={"/about/first.jpg"} alt="img" width={320} height={400} />

        <div>
          <h2>Доставка и поръчка</h2>
          <p>
            Доставката при online поръчка през www.karcher-cleanteh.com е
            безплатна! Доставката се извършва с куриерска фирма Интерлогистика.
            Сроковете на доставка зависят от населеното място. Стандартния срок
            за доставка е един ден. При желание за доставка с друга куриерска
            фирма, клиентът заплаща стойността на услугата.
          </p>
        </div>
      </article>
      <article className={styles.article}>
        <Image src={"/about/second.jpg"} alt="img" width={320} height={400} />

        <div>
          <h2>Гаранция</h2>
          <p>
            Условията за гаранционно обслужване Стар ЕООД са съобразени с общите
            условия и изисквания на производителя ALFRED KARCHER GMBH.
            Гаранционния срок на всички уреди Karcher закупени на Физическо лице
            е 24 месеца и започва от датата на приемане на машината от клиента.
          </p>
        </div>
      </article>

      <article className={styles.text}>
        <h2>Търговски условия</h2>
        <p>
          {" "}
          Клийн Стар ЕООД се придържа към официално обявените цени на Alfred
          Karcher GMBH за продажба и сервиз на територията на България. Цените
          се актуализират ежегодно, като промени се извършват при промяна в
          ценовата листа на производителя Alfred Kärcher GmbH.
        </p>
      </article>
      <article className={styles.text}>
        <h2>Приложения</h2>
        <p>
          Серията K7 превръща и по-голямото чистене в най-лесно упражнение. С
          тези мощни уреди без усилия могат да се отстранят дори и най-упоритите
          замърсявания, почиствайки основно и спестявайки време. Полезните
          характеристике на продукта, като например QuickConnect, Plug´n´Clean и
          системата за навиване на маркуча са предимство и превръщат работата в
          чисто забавление.
        </p>
      </article>
      <article className={styles.text}>
        <h2>Връщане на стоки</h2>
        <p>
          На основание чл. 50 от ЗЗП Потребителят има право да се откаже от
          договора от разстояние без да посочва причина, без да дължи
          обезщетение или неустойка и без да заплаща каквито и да е разходи (с
          изключение на разходите, предвидени в чл. 54, ал. 3 и чл. 55 от ЗЗП) в
          14-дневен срок, считано от датата на приемане на стоките от
          Потребителя или от трето лице, различно от превозвача и посочено от
          Потребителя, или когато потребителят е поръчал много стоки в една
          поръчка, които се доставят отделно – считано от датата, на която
          Потребителят или трето лице, различно от превозвача и посочено от
          Потребителя, приеме последната стока.
        </p>
      </article>
      <article className={styles.article}>
        <div>
          <h2>За нас</h2>
          <p>
            Oфициален дилър, сервизен център и търговски партньор на Alfred
            Karcher GMBH. Основна дейност на фирмата е продажба, сервиз,
            гаранционно и следгаранционно обслужване на продуктите с марката
            Karcher.
          </p>
        </div>
        <Image src={"/about/third.jpeg"} alt="img" width={320} height={400} />
      </article>
    </section>
  );
};

export default contactPage;
