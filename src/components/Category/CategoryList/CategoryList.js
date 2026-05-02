import FruitsCat from "../../../assets/fruits-and-veggies.png";
import DairyCat from "../../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../../assets/Meat-and-seafood.png";
import FoodCat from "../../../assets/FoodCat.png";
import Beverages from "../../../assets/Beverages.png";
import PacketFood from "../../../assets/PacketFood.png";

const CategoryList = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description:
      "Fresh fruits and vegetables are essential for a healthy lifestyle. They are rich in vitamins, minerals, and fiber, making them a vital part of our daily diet.",
    image: FruitsCat,
    path: "/fruits-veggies",
  },
  {
    id: 2,
    title: "Dairy & Bakery",
    description:
      "Fresh milk, cheese, butter, and ghee along with soft bread, cakes, and cookies for your daily needs. Wholesome dairy and baked goods to keep your meals tasty.",
    image: DairyCat,
    path: "/dairy-bakery",
  },
  {
    id: 3,
    title: "Grains, Oil & Masala",
    description:
      "Essential staples like rice, wheat, pulses, and flours for everyday cooking. Add authentic flavor with pure oils and aromatic spices to make every meal tasty",
    image: FoodCat,
    path: "/grains-oil-masala",
  },
  {
    id: 4,
    title: "Meat & SeaFood",
    description:
      "Fresh, hygienic, and tender cuts of chicken, mutton, fish, and prawns, delivered to your door. Enjoy rich flavor and premium quality for everyday meals.",
    image: SeaFoodCat,
    path: "/meet-seefood",
  },
  {
    id: 5,
    title: "Beverages",
    description:
      "Refresh yourself with tea, coffee, juices, soft drinks, and energy boosters for every mood. From morning brews to chilled drinks, enjoy flavors.",
    image: Beverages,
    path: "/beverages",
  },
  {
    id: 6,
    title: "Packaged Food",
    description:
      "Tasty chips, biscuits, chocolates, noodles, and ready-to-eat meals for quick bites. Perfect munchies to satisfy cravings anytime, anywhere",
    image: PacketFood,
    path: "/packaged-food",
  },
];

export default CategoryList;
