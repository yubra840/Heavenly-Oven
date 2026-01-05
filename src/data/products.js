// Cakes
import redVelvet from "../assets/products/Red Velvet Cake.png";
import blackForest from "../assets/products/Black Forest Cake.png";

// Pastries
import croissants from "../assets/products/Butter Croissants.png";
import cupcakes from "../assets/products/Cupcakes (6 pcs).png";
import muffins from "../assets/products/Fruit Muffine.png";
import donuts from "../assets/products/Donuts (4 pcs).png";

// Bread
import whiteBread from "../assets/products/White Bread.png";
import brownBread from "../assets/products/Brown Bread.png";
import garlicBread from "../assets/products/Garlic Bread.png";

// Extras
import cookies from "../assets/products/Cookies (Pack).png";
import cinnamonRolls from "../assets/products/Cinnamon Rolls.png";

// Drinks
import milkshake from "../assets/products/Milkshake.png";

// Snacks
import samosa from "../assets/products/Samosa (4 pcs).png";
import springRolls from "../assets/products/Spring Rolls.png";

export const products = [
  // Cakes
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: 1200,
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    desc: "Rich chocolate layers topped with smooth ganache.",
    ingredients: ["Flour", "Cocoa", "Sugar", "Butter", "Eggs"]

  },
  {
    id: "vanilla-cake",
    name: "Vanilla Cake",
    price: 1000,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Soft vanilla sponge with creamy butter frosting.",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla Extract"]

  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    price: 1400,
    img: redVelvet,
    desc: "Classic red velvet layered with cream cheese icing.",
    ingredients: ["Flour", "Cocoa", "Buttermilk", "Vinegar", "Cream Cheese"]
  },
  {
    id: "black-forest-cake",
    name: "Black Forest Cake",
    price: 1500,
    img: blackForest,
    desc: "Chocolate cake with cherries and whipped cream.",
    ingredients: ["Flour", "Cocoa", "Cherries", "Whipped Cream", "Sugar"]
  },

  // Pastries
  {
    id: "croissants",
    name: "Butter Croissants",
    price: 250,
    img: croissants,
    desc: "Flaky French pastry with buttery aroma.",
    ingredients: ["Flour", "Butter", "Yeast", "Sugar", "Salt"]
  },
  {
    id: "cupcakes",
    name: "Cupcakes (6 pcs)",
    price: 400,
    img: cupcakes,
    desc: "Assorted flavors topped with creamy frosting.",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla Extract"]
  },
  {
    id: "muffins",
    name: "Fruit Muffins",
    price: 300,
    img: muffins,
    desc: "Moist muffins loaded with fresh fruits.",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Mixed Fruits"]
  },
  {
    id: "donuts",
    name: "Donuts (4 pcs)",
    price: 350,
    img: donuts,
    desc: "Soft donuts glazed and sprinkled with sugar.",
    ingredients: ["Flour", "Sugar", "Yeast", "Butter", "Oil"]

  },

  // Bread
  {
    id: "white-bread",
    name: "White Bread",
    price: 150,
    img: whiteBread,
    desc: "Freshly baked soft loaf for everyday meals.",
    ingredients: ["Flour", "Yeast", "Sugar", "Salt", "Water"]
  },
  {
    id: "brown-bread",
    name: "Brown Bread",
    price: 180,
    img: brownBread,
    desc: "Healthy whole-wheat loaf rich in fiber.",
    ingredients: ["Whole Wheat Flour", "Yeast", "Sugar", "Salt", "Water"]
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    price: 220,
    img: garlicBread,
    desc: "Oven-toasted bread infused with garlic butter.",
    ingredients: ["Flour", "Garlic", "Butter", "Parsley", "Salt"]
  },

  // Extras
  {
    id: "cookies",
    name: "Cookies (Pack)",
    price: 280,
    img: cookies,
    desc: "Crunchy cookies with chocolate chips.",
    ingredients: ["Flour", "Sugar", "Butter", "Chocolate Chips", "Eggs"]
  },
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    price: 320,
    img: cinnamonRolls,
    desc: "Warm rolls drizzled with vanilla glaze.",
    ingredients: ["Flour", "Cinnamon", "Sugar", "Butter", "Eggs"]
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: 1300,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    desc: "Creamy cheesecake with buttery biscuit base.",
    ingredients: ["Cream Cheese", "Butter", "Sugar", "Eggs", "Vanilla Extract"]
  },

  // Drinks
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    price: 200,
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    desc: "Freshly brewed premium coffee.",
    ingredients: ["Coffee Beans", "Water", "Sugar", "Milk"]
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 250,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    desc: "Smooth espresso with creamy foam.",
    ingredients: ["Espresso", "Steamed Milk", "Foam", "Sugar"]
  },
  {
    id: "latte",
    name: "Latte",
    price: 260,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    desc: "Classic milk coffee with rich aroma.",
    ingredients: ["Espresso", "Steamed Milk", "Sugar"]

  },
  {
    id: "milkshake",
    name: "Milkshake",
    price: 300,
    img: milkshake,
    desc: "Cold blended shake with chocolate & vanilla.",
    ingredients: ["Milk", "Ice Cream", "Chocolate Syrup", "Sugar"]
  },

  // Breakfast
  {
    id: "breakfast-combo",
    name: "Breakfast Combo",
    price: 550,
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    desc: "Eggs, toast, sausage & hot tea.",
    ingredients: ["Eggs", "Bread", "Sausage", "Tea", "Butter"]
  },
  {
    id: "pancakes",
    name: "Pancakes",
    price: 420,
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    desc: "Soft pancakes served with honey & butter.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"]
  },
  {
    id: "waffles",
    name: "Waffles",
    price: 450,
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    desc: "Golden waffles topped with syrup.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"]
  },

  // Snacks
  {
    id: "meat-pie",
    name: "Meat Pie",
    price: 220,
    img: "https://images.unsplash.com/photo-1604909052743-94e838986d24",
    desc: "Flaky pastry stuffed with seasoned meat.",
    ingredients: ["Flour", "Ground Meat", "Onions", "Spices", "Butter"]
  },
  {
    id: "samosa",
    name: "Samosa (4 pcs)",
    price: 200,
    img: samosa,
    desc: "Crispy samosas with spicy filling.",
    ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"]
  },
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    price: 240,
    img: springRolls,
    desc: "Crunchy rolls filled with vegetables.",
    ingredients: ["Flour", "Vegetables", "Oil", "Soy Sauce"]
  },

  // Desserts
  {
    id: "chocolate-brownies",
    name: "Chocolate Brownies",
    price: 380,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    desc: "Soft fudgy brownies topped with cocoa.",
    ingredients: ["Flour", "Cocoa Powder", "Butter", "Sugar", "Eggs"]
  }
];
