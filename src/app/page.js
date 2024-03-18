import List from "@/components/list/list";
import styles from "./page.module.scss";
import SlidePage from "@/components/slidePage/page";

const HomePage = () => {
  const vacumers = [
    {
      price: 169,
      onlinePrice: 160,
      name: "Водоструйна машина Karcher K 2 Universal Edition",
      imageUrl: "/vodostruiki/k2universal.jpg",
    },
    {
      price: 189,
      onlinePrice: 180,
      name: "Водоструйна машина Karcher K 2 Compact",
      imageUrl: "/vodostruiki/k2compact.jpg",
    },
    {
      price: 169,
      onlinePrice: 160,
      name: "Водоструйна машина Karcher K 2 Compact Car",
      imageUrl: "/vodostruiki/k2classiccar.jpg",
    },
    {
      price: 199,
      onlinePrice: 189,
      name: "Водоструйна машина Karcher K 2 Classic Car",
      imageUrl: "/vodostruiki/k2classic.jpg",
    },
    {
      price: 639,
      onlinePrice: 600,
      name: "Водоструйна машина Karcher K 4 Classic Car",
      imageUrl: "/vodostruiki/k4classiccar.jpg",
    },
    {
      price: 499,
      onlinePrice: 449,
      name: "Водоструйна машина Karcher K 4 Modular WCM",
      imageUrl: "/vodostruiki/k4modular.jpg",
    },
    {
      price: 579,
      onlinePrice: 550,
      name: "Водоструйна машина Karcher K 4 Power Control Flex",
      imageUrl: "/vodostruiki/k4power.jpg",
    },
    {
      price: 639,
      onlinePrice: 605,
      name: "Водоструйна машина Karcher K 4 Power Control Car & Stairs",
      imageUrl: "/vodostruiki/k4powercar.jpg",
    },
    {
      price: 649,
      onlinePrice: 616,
      name: "Водоструйна машина Karcher K 5 Modular",
      imageUrl: "/vodostruiki/k5modular.jpg",
    },
    {
      price: 699,
      onlinePrice: 664,
      name: "Водоструйна машина Karcher K 5 Power Control",
      imageUrl: "/vodostruiki/k5power.jpg",
    },
    {
      price: 919,
      onlinePrice: 873,
      name: "Водоструйна машина Karcher K 5 Premium Smart Control",
      imageUrl: "/vodostruiki/k5premium.jpg",
    },
    {
      price: 929,
      onlinePrice: 830,
      name: "Водоструйна машина Karcher K 7 WCM",
      imageUrl: "/vodostruiki/k7.jpg",
    },
    {
      price: 1279,
      onlinePrice: 1215,
      name: "Водоструйна машина Karcher K 7 Premium Smart Control Flex",
      imageUrl: "/vodostruiki/k7premium.jpg",
    },
  ];

  return (
    <section className={styles.vacumers}>
      <SlidePage />
      <h1>Водоструйни машини</h1>
      <List listItems={vacumers} />
    </section>
  );
};

export default HomePage;
