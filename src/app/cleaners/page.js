import SlidePage from "@/components/slidePage/page";

const { default: List } = require("@/components/list/list");

const cleanersPage = () => {
  const cleaners = [
    {
      price: 309,
      onlinePrice: 293,
      name: "Пречиствател на въздух Karcher AF 20",
      imageUrl: "/cleaners/af20.jpg",
    },
    {
      price: 579,
      onlinePrice: 550,
      name: "Пречиствател на въздух Karcher AF 30",
      imageUrl: "/cleaners/af30.jpg",
    },
    {
      price: 939,
      onlinePrice: 550,
      name: "Пречиствател на въздух Karcher AF 50",
      imageUrl: "/cleaners/af50.jpg",
    },
    {
      price: 1399,
      onlinePrice: 1329,
      name: "Пречиствател на въздух Karcher AF 100 H13",
      imageUrl: "/cleaners/af100.jpg",
    },
    {
      price: 549,
      onlinePrice: 521,
      name: "Пречиствател на вода Karcher WPC 120 UF",
      imageUrl: "/cleaners/af120.jpg",
    },
  ];

  return (
    <section>
      <SlidePage />
      <h1>Пречистватели</h1>
      <List listItems={cleaners} />
    </section>
  );
};

export default cleanersPage;
