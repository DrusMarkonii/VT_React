import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Content from "./components/content/content"
import logoImg from "./accets/img/logo.png";
import "./accets/styles/App-style.css"


function App() {
  
  return (
    <div className="wrapper">
      <Header logoImg = {logoImg} title="Welcome to React"/>
      <Nav sections={
        [
          {
            title: 'Docs',
            link: 'https://ru.reactjs.org/docs/getting-started.html'
          },
          {
            title: 'Tutorial',
            link: 'https://reactjs.org/tutorial/tutorial.html'
          },
          {
            title: 'Community',
            link: 'https://reactjs.org/community/support.html'
          }
        ]
      }/>
      <Content />
      <Footer />
      
    </div>
  );
}

export default App;