import { FaBuilding, FaCar, FaIndustry, FaUtensils, FaShoppingCart, FaUsers } from "react-icons/fa";

// Exporting the categories array
export const categories = [
  {
    title: "Real Estate",
    imageUrl:
      "https://www.vz.ae/wp-content/uploads/2022/11/real-estate-licence-in-Dubai.jpg",
    adsCount: "1,968",
    icon: <FaBuilding size={40} />, 
  },
  {
    title: "Cars & Boats",
    imageUrl:
      "https://blog.ipleaders.in/wp-content/uploads/2020/09/house-and-key-on-wooden-table-on-sunlight-background-building-concept-concept-of-selling-real-estate-1138190269-563869f4765c46a3a194e83d80ca61eb.jpg",
    adsCount: "2,568",
    icon: <FaCar size={40} />, 
  },
  {
    title: "Industrial Jobs",
    imageUrl:
      "https://wallpapers.com/images/hd/real-estate-background-vyigs4zta02jftx6.jpg",
    adsCount: "1,569",
    icon: <FaIndustry size={40} />, 
  },
  {
    title: "Restaurants & Events",
    imageUrl:
      "https://th.bing.com/th/id/OIP.OH7KbfjqrFLWJsSNRRudxAHaHa?w=626&h=626&rs=1&pid=ImgDetMain",
    adsCount: "1,968",
    icon: <FaUtensils size={40} />,
  },
  {
    title: "Buy & Sell",
    imageUrl:
      "https://conteudos.quintoandar.com.br/wp-content/uploads/2023/03/GettyImages-1409298953.jpg",
    adsCount: "2,568",
    icon: <FaShoppingCart size={40} />, 
  },
  {
    title: "Community & Events",
    imageUrl:
      "https://www.financialexpress.com/wp-content/uploads/2023/02/real-estate-Mumbai-2.jpg",
    adsCount: "1,569",
    icon: <FaUsers size={40} />, 
  },
];
