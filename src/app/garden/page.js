import List from "@/components/list/list";
import SlidePage from "@/components/slidePage/page";

const gardenPage = () => {
  const garden = [
    {
      pricre: 689,
      onlinePrice: 654,
      name: "Акумулаторна косачка Karcher LMO 18-33 Battery Set",
      imageUrl: "/garden/lmo18.jpg",
    },
    {
      pricre: 899,
      onlinePrice: 854,
      name: "Акумулаторна косачка Karcher LMO 36-40 Battery",
      imageUrl: "/garden/lmo36.jpg",
    },
    {
      pricre: 1269,
      onlinePrice: 1205,
      name: "Акумулаторна косачка Karcher LMO 36-40 Battery Set",
      imageUrl: "/garden/lmo36-40.jpg",
    },
    {
      pricre: 1179,
      onlinePrice: 1120,
      name: "Акумулаторна косачка Karcher LMO 36-46 Battery",
      imageUrl: "/garden/lmp36-46.jpg",
    },
    {
      pricre: 299,
      onlinePrice: 284,
      name: "Акумулаторен тример с корда Karcher LTR 36-33 Battery",
      imageUrl: "/garden/ltr36-33.jpg",
    },
    {
      pricre: 639,
      onlinePrice: 607,
      name: "Акумулаторен тример с корда Karcher LTR 36-33 Battery Set",
      imageUrl: "/garden/ltr36-33-2.jpg",
    },
    {
      pricre: 569,
      onlinePrice: 540,
      name: "Уред за издухване на листа Karcher LBL 4 Battery Set",
      imageUrl: "/garden/lbl4.jpg",
    },
    {
      pricre: 449,
      onlinePrice: 426,
      name: "Уред за издухване и изсмукване на листа Karcher BLV 18-200 Battery",
      imageUrl: "/garden/blv18.jpg",
    },
    {
      pricre: 369,
      onlinePrice: 350,
      name: "Акумулаторен храсторез Karcher HGE 18-45 Battery Set",
      imageUrl: "/garden/hge18.jpg",
    },
    {
      pricre: 459,
      onlinePrice: 436,
      name: "Акумулаторен храсторез Karcher HGE 18-50 Battery Set",
      imageUrl: "/garden/hge18-2.jpg",
    },
  ];

  return (
    <section>
      <SlidePage />
      <h1>Градинска техника</h1>
      <List listItems={garden} />
    </section>
  );
};

export default gardenPage;
