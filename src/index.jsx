import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div className="container">
      <h1>Hello React !!!!!!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinachi"
        ingredient="Tomoato, mozarel, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, Mushrooms"
        photoName="pizzas/funghi.jpg"
        price="12"
      />
    </main>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}We're currently open
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
