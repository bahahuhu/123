import List from "@/components/list/list";
import SlidePage from "@/components/slidePage/page";

const vacumersPage = () => {
  const vacumers = [
    {
      price: 179,
      onlinePrice: 170,
      name: "Акумулаторна прахосмукачка Karcher CVH 3 Plus",
      imageUrl: "/vacumers/cvh3.jpg",
    },
    {
      price: 99,
      onlinePrice: 94,
      name: "Акумулаторна прахосмукачка Karcher CVH 2-4",
      imageUrl: "/vacumers/cvh2.jpg",
    },
    {
      price: 699,
      onlinePrice: 594,
      name: "Прахосмукачка робот Karcher RCV 3",
      imageUrl: "/vacumers/rcv3.jpg",
    },
    {
      price: 1099,
      onlinePrice: 880,
      name: "Прахосмукачка робот Karcher RCV 5",
      imageUrl: "/vacumers/rcv5.jpg",
    },
    {
      price: 255,
      onlinePrice: 242,
      name: "Прахосмукачка за сухо изсмукване Karcher VC 2",
      imageUrl: "/vacumers/vc2.jpg",
    },
    {
      price: 259,
      onlinePrice: 246,
      name: "Прахосмукачка мултициклон Karcher VC 3",
      imageUrl: "/vacumers/vc3.jpg",
    },
    {
      price: 449,
      onlinePrice: 426,
      name: "Прахосмукачка с циклон Karcher VC 4 Cordless myHome Car",
      imageUrl: "/vacumers/vc4.jpg",
    },
    {
      price: 699,
      onlinePrice: 664,
      name: "Прахосмукачка с циклон Karcher VC 6 Cordless ourFamily Pet",
      imageUrl: "/vacumers/vc6.jpg",
    },
    {
      price: 369,
      onlinePrice: 350,
      name: "Мултифункционална смукачка Karcher WD 5 V-25/5/22",
      imageUrl: "/vacumers/wd5.jpg",
    },
    {
      price: 449,
      onlinePrice: 426,
      name: "Мултифункционална смукачка Karcher WD 5 P V-25/5/22",
      imageUrl: "/vacumers/wd5-2.jpg",
    },
    {
      price: 409,
      onlinePrice: 388,
      name: "Мултифункционална смукачка Karcher WD 5 S V-25/5/22",
      imageUrl: "/vacumers/wd5-3.jpg",
    },
    {
      price: 519,
      onlinePrice: 493,
      name: "Мултифункционална смукачка Karcher WD 6 P S V-30/6/22/T",
      imageUrl: "/vacumers/wd6.jpg",
    },
    {
      price: 475,
      onlinePrice: 470,
      name: "Акумулаторна перяща прахосмукачка Karcher SE 3-18 Compact Battery Kit",
      imageUrl: "/vacumers/ser3.jpg",
    },
  ];

  return (
    <section>
      <SlidePage />
      <h1>Прахосмукачки</h1>
      <List listItems={vacumers} />
    </section>
  );
};

export default vacumersPage;
