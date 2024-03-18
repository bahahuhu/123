import List from "@/components/list/list";
import SlidePage from "@/components/slidePage/page";

const steamsPage = () => {
  const steams = [
    {
      price: 199,
      onlinePrice: 189,
      name: "Парочистачка Karcher SC 1 EasyFix",
      imageUrl: "/steams/sc1easyfix.jpg",
    },
    {
      price: 230,
      onlinePrice: 219,
      name: "Парочистачка Karcher KST 2",
      imageUrl: "/steams/kst2.jpg",
    },
    {
      price: 279,
      onlinePrice: 265,
      name: "Парочистачка Karcher SC 2 EasyFix",
      imageUrl: "/steams/sc2.jpg",
    },
    {
      price: 359,
      onlinePrice: 323,
      name: "Парочистачка Karcher SC 3 EasyFix",
      imageUrl: "/steams/sc3easyfix.jpg",
    },
    {
      price: 339,
      onlinePrice: 322,
      name: "Парочистачка Karcher SC 3 Upright",
      imageUrl: "/steams/sc3upright.jpg",
    },
    {
      price: 520,
      onlinePrice: 423,
      name: "Парочистачка Karcher SC 4 EasyFix",
      imageUrl: "/steams/sc4easyfix.jpg",
    },

    {
      price: 1399,
      onlinePrice: 1119,
      name: "Парен екстрактор Karcher SV 7 EU",
      imageUrl: "/steams/sv7.jpg",
    },
    {
      price: 949,
      onlinePrice: 901,
      name: "Парочистачка Karcher SC 5 Deluxe Signature Line EU",
      imageUrl: "/steams/sc5deluxe.jpg",
    },
  ];

  return (
    <section>
      <SlidePage />
      <h1>Парочистачки</h1>
      <List listItems={steams} />
    </section>
  );
};

export default steamsPage;
