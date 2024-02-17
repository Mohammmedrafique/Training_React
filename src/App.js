import "./App.css";
import Product from "./components/Product"; // Corrected import path for Product component
const productdata = [
  {
    title: "Oriental Bronze Chair",
    desc: "Salad",
    price: "9.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "1",
  },
  {
    title: "Generic Bronze Shoes",
    desc: "Table",
    price: "575.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "2",
  },
  {
    title: "Handmade Plastic Chicken",
    desc: "Ball",
    price: "158.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "3",
  },
  {
    title: "Oriental Soft Mouse",
    desc: "Hat",
    price: "467.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "4",
  },
  {
    title: "Elegant Metal Table",
    desc: "Sausages",
    price: "533.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "5",
  },
  {
    title: "Gorgeous Fresh Gloves",
    desc: "Shoes",
    price: "728.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "6",
  },
  {
    title: "Modern Metal Bike",
    desc: "Ball",
    price: "980.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "7",
  },
  {
    title: "Small Soft Hat",
    desc: "Computer",
    price: "582.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "8",
  },
  {
    title: "Awesome Metal Car",
    desc: "Chips",
    price: "805.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "9",
  },
  {
    title: "Refined Frozen Computer",
    desc: "Fish",
    price: "279.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "10",
  },
  {
    title: "Electronic Granite Chips",
    desc: "Pants",
    price: "180.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "11",
  },
  {
    title: "Generic Rubber Chair",
    desc: "Towels",
    price: "90.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "12",
  },
  {
    title: "Electronic Plastic Pizza",
    desc: "Soap",
    price: "475.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "13",
  },
  {
    title: "Refined Granite Car",
    desc: "Pizza",
    price: "84.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "14",
  },
  {
    title: "Handcrafted Rubber Gloves",
    desc: "Chips",
    price: "970.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "15",
  },
  {
    title: "Ergonomic Soft Table",
    desc: "Sausages",
    price: "533.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "16",
  },
  {
    title: "Gorgeous Concrete Bacon",
    desc: "Mouse",
    price: "65.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "17",
  },
  {
    title: "Sleek Cotton Sausages",
    desc: "Chicken",
    price: "758.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "18",
  },
  {
    title: "Tasty Metal Cheese",
    desc: "Fish",
    price: "179.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "19",
  },
  {
    title: "Sleek Cotton Computer",
    desc: "Salad",
    price: "179.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "20",
  },
  {
    title: "Electronic Plastic Soap",
    desc: "Pizza",
    price: "604.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "21",
  },
  {
    title: "Recycled Steel Soap",
    desc: "Chair",
    price: "523.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "22",
  },
  {
    title: "Small Soft Ball",
    desc: "Chair",
    price: "592.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "23",
  },
  {
    title: "Modern Fresh Ball",
    desc: "Fish",
    price: "839.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "24",
  },
  {
    title: "Intelligent Plastic Car",
    desc: "Pizza",
    price: "78.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "25",
  },
  {
    title: "Handmade Cotton Soap",
    desc: "Soap",
    price: "323.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "26",
  },
  {
    title: "Sleek Metal Towels",
    desc: "Gloves",
    price: "183.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "27",
  },
  {
    title: "Bespoke Bronze Bacon",
    desc: "Pants",
    price: "453.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "28",
  },
  {
    title: "Gorgeous Rubber Pants",
    desc: "Soap",
    price: "630.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "29",
  },
  {
    title: "Handmade Metal Shoes",
    desc: "Pants",
    price: "151.00",
    image: "https://loremflickr.com/640/480/fashion",
    id: "30",
  },
];
function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
      {productdata.map((prod) => (
        <Product
          key={prod.id}
          image={prod.image}
          title={prod.title}
          desc={prod.desc}
          price={prod.price}
        />
      ))}
    </div>
  );
}

export default App;
