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
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  return <footer>{new Date().toLocaleTimeString()}We're currently open</footer>;
  // return React.createElement("footer", null, "We're currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/funghi.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
    </div>
  );
}
