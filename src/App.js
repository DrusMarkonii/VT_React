import React, {useState} from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Content from "./components/content/content"
import "./accets/styles/App-style.css"
import Title from "./components/title/Title";
// import ListItem from "./components/ListItem/ListItem";
import CitiesList from "./components/CitiesList";
import City from "./components/City";



function App() {
  
  const [cities, setCities] = useState([
    {name: 'Moscow', description: 'Big city with a lot of:'},
    {name: 'Minsk', description: 'Middle city such as:'},
    ]
  )

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerChangeCity = (n, description) => {
    setCities( 
      cities.map((city, index) => {
        if(index === n) {
          return {
            ...city, 
            description,
          };
        }

        return city;
      }
    ))
  }

  const handlerSelectCity = (n) => {setCurrentIndex(n)}

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
      {/* <ListItem /> */}
      <City 
        cities={cities} 
        onChangeCity={handlerChangeCity}
        currentIndex={currentIndex}  
      />
      <CitiesList cities={cities} onSelectCity={handlerSelectCity}/>
      <Footer />
      
    </div>
  );
}

export default App;