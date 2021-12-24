import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Content from "./components/content/content"
import "./accets/styles/App-style.css"
import Title from "./components/title/Title";



function App() {
  
  const logoImg = "https://yt3.ggpht.com/BfugJfgLpCxpVSocdwCWkPBuicPNbA-f6xh3IM8e3tdZwDCo7sP7PJh6VhrUbJrDnY8d9fhLHA=s900-c-k-c0x00ffffff-no-rj"
  return (
    <div className="wrapper">
      <Header logoImg = {logoImg} title="Welcome to Shop"/>
      <Nav sections={
        [
          {
            title: 'Promotions sale',
            link: 'https://www.ozon.ru/info/actions/'
          },
          {
            title: 'Electronics',
            link: 'https://www.ozon.ru/category/elektronika-15500/'
          },
          {
            title: 'Clothes',
            link: 'https://www.ozon.ru/info/main-apparel/'
          }
        ]
      }/>
      <Title title="Goods"/>
      <Content />
      <Footer />
      
    </div>
  );
}

export default App;