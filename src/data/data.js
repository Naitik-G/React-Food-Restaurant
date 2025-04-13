// data.js
import dish1 from "../assets/RotateDish2.png";
import dish2 from "../assets/RotateDish4.png";
import dish3 from "../assets/RotateDish6.png";
import dish4 from "../assets/RotateDish7.png";
import dish5 from "../assets/RotateDish8.png";
import dish6 from "../assets/RotateDish6.png";
import dish8 from "../assets/RotateDish11.png";
import dish9 from "../assets/RotateDish12.png";

import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import Blog4 from "../assets/Blog4.jpg";

import pasta from "../assets/pasta.jpg";
import pastry from "../assets/pastry.jpg";
import Biryani from "../assets/Biryani.jpg";
import Dosa from "../assets/Dosa.jpg";
import ButterTikka from "../assets/ButterTikka.jpg";
import BlackTea from "../assets/BlackTea.jpg";
import orangeTea from "../assets/GreenTea.jpg";
import WhiteTea1 from "../assets/WhiteTea1.jpg";
import Latte1 from "../assets/Latte1.jpg";
import Cappuccino1 from "../assets/Cappuccino1.jpg";
import Espresso from "../assets/Espresso.jpg";

const dishes = [
  { image: dish1, name: "Lobster Risotto" },
  { image: dish2, name: "Sushi Platter" },
  { image: dish3, name: "Vegan Delight" },
  { image: dish4, name: "Truffle Pasta" },
  { image: dish5, name: "Seafood Paella" },
  { image: dish6, name: "Beef Wellington" },
  { image: dish8, name: "Lamb Chops" },
  { image: dish9, name: "Ratatouille" },
];

const blogPosts = [
  {
    title: '5 Quick and Healthy Recipes You Can Make in 30 Minutes',
    description: 'Discover easy and delicious recipes that are perfect for a busy weeknight.',
    image: Blog1,
    category: 'Recipes',
    date: 'October 16, 2024',
  },
  {
    title: 'Cooking Tips for Beginners: How to Master the Basics',
    description: 'Learn essential cooking skills that will make you more confident in the kitchen.',
    image: Blog2,
    category: 'Cooking Tips',
    date: 'October 14, 2024',
  },
  {
    title: 'Health Benefits of Eating Organic Food',
    description: 'Explore the health advantages of incorporating organic food into your diet.',
    image: Blog3,
    category: 'Health',
    date: 'October 12, 2024',
  },
  {
    title: 'Sustainability in Our Kitchen: How We Reduce Waste',
    description: 'Learn about our sustainable practices and how we reduce food waste in our restaurant.',
    image: Blog4,
    category: 'Sustainability',
    date: 'October 10, 2024',
  },
  {
    title: '5 Quick and Healthy Recipes You Can Make in 30 Minutes',
    description: 'Discover easy and delicious recipes that are perfect for a busy weeknight.',
    image: Blog1,
    category: 'Recipes',
    date: 'October 16, 2024',
  },
  {
    title: 'Cooking Tips for Beginners: How to Master the Basics',
    description: 'Learn essential cooking skills that will make you more confident in the kitchen.',
    image: Blog2,
    category: 'Cooking Tips',
    date: 'October 14, 2024',
  },
  {
    title: 'Health Benefits of Eating Organic Food',
    description: 'Explore the health advantages of incorporating organic food into your diet.',
    image: Blog3,
    category: 'Health',
    date: 'October 12, 2024',
  },
  {
    title: 'Sustainability in Our Kitchen: How We Reduce Waste',
    description: 'Learn about our sustainable practices and how we reduce food waste in our restaurant.',
    image: Blog4,
    category: 'Sustainability',
    date: 'October 10, 2024',
  },clearImmediate
];

const menuItems = {
  smallBites: [
    {
      name: "Orange Papaya Salad",
      price: "$12",
      description: "Shrimp, chili & lime",
      image: pastry,
    },
    {
      name: "Black Pepper Calamari",
      price: "$14",
      description: "Galangal dressing and roasted red thai basil",
      image: pasta,
    },
    {
      name: "Biryani",
      price: "$15",
      description: "Aromatic basmati rice with tender chicken, spices, and herbs",
      image: Biryani,
    },
    {
      name: "Butter Chicken",
      price: "$18",
      description: "Creamy tomato-based curry with succulent chicken pieces",
      image: ButterTikka,
    },
    {
      name: "Masala Dosa",
      price: "$10",
      description: "Crispy rice crepe filled with spiced potato mixture",
      image: Dosa,
    },
  ],
  tea: [
    {
      name: "Orange Tea",
      price: "$5",
      description: "Refreshing and healthy orange tea leaves",
      image: orangeTea,
    },
    {
      name: "Black Tea",
      price: "$5",
      description: "Refreshing and healthy tea leaves",
      image: BlackTea,
    },
    {
      name: "White Tea",
      price: "$7",
      description: "Delicate and subtle white tea leaves",
      image: WhiteTea1,
    },
    {
      name: "Espresso",
      price: "$3",
      description: "Strong and rich espresso shot",
      image: Espresso,
    },
    {
      name: "Latte",
      price: "$4",
      description: "Smooth and creamy milk coffee",
      image: Latte1,
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      description: "Frothy and balanced coffee with milk",
      image: Cappuccino1,
    },
  ],
};

export { dishes, blogPosts, menuItems };
