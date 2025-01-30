import { ReactElement } from "react";

type CategoryType = { 
  title: ReactElement | string,
  imageUrl: string,
  adsCount: string,
  icon: ReactElement
};

export const categories: CategoryType[] = [
  {
    title: "Real Estate",
    imageUrl:
      "https://www.vz.ae/wp-content/uploads/2022/11/real-estate-licence-in-Dubai.jpg",
    adsCount: "1,968",
    icon: <img src="/icons/agreement.png" alt="Real Estate" width={30} height={30} />, 
  },
  {
    title: "Cars & Boats",
    imageUrl:
      "https://blog.ipleaders.in/wp-content/uploads/2020/09/house-and-key-on-wooden-table-on-sunlight-background-building-concept-concept-of-selling-real-estate-1138190269-563869f4765c46a3a194e83d80ca61eb.jpg",
    adsCount: "2,568",
    icon: <img src="/icons/car.png" alt="Cars & Boats" width={30} height={30} />, 
  },
  {
    title: "Industrial Jobs",
    imageUrl:
      "https://wallpapers.com/images/hd/real-estate-background-vyigs4zta02jftx6.jpg",
    adsCount: "1,569",
    icon: <img src="/icons/worker.png" alt="Industrial Jobs" width={30} height={30} />, 
  },
  {
    title: (
      <span className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
        <span>Services &</span>
        <span>Specials</span>
      </span>
    ),
    imageUrl:
      "https://th.bing.com/th/id/OIP.OH7KbfjqrFLWJsSNRRudxAHaHa?w=626&h=626&rs=1&pid=ImgDetMain",
    adsCount: "1,968",
    icon: <img src="/icons/restaurant.png" alt="Services & Specials" width={30} height={30} />, 
  },
  {
    title: "Buy & Sell",
    imageUrl:
      "https://conteudos.quintoandar.com.br/wp-content/uploads/2023/03/GettyImages-1409298953.jpg",
    adsCount: "2,568",
    icon: <img src="/icons/trade.png" alt="Buy & Sell" width={30} height={30} />, 
  },
  {
    title: (
      <span className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
        <span>Community &</span>
        <span>Events</span>
      </span>
    ),
    imageUrl:
      "https://www.financialexpress.com/wp-content/uploads/2023/02/real-estate-Mumbai-2.jpg",
    adsCount: "1,569",
    icon: <img src="/icons/social-justice.png" alt="Community & Events" width={30} height={30} />, 
  },
];
