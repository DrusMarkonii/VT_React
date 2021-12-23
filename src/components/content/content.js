import React from 'react'
import './style.css'
import Card from './card/card'
import Button from './button/button'



function Content() {
    
       
    return (
        <div className='content'>
            <div className='cards'>
                <Card
                    title="Color jacket"
                    price="500"
                    color="red"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
                <Card
                    title="Black pants"
                    price="400"
                    color="black"  
                    img="https://icdn.lenta.ru/images/2019/09/17/20/20190917204247528/square_320_e691d2e5b00249a23c77157d95c2a783.jpg"
                />
                <Card
                    title="White shurt"
                    price="300"
                    color="yellow"  
                    img="https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C51WOyO6pERL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png"
                />
                <Card
                    title="Color jacket"
                    price="500"
                    color="red"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
                <Card
                    title="Color jacket"
                    price="500"
                    color="green"  
                    img="https://kosmo-shop.com/25192-large_default/kurtka-raduzhnaya-get-rainbow-mood-raduga-mnogocvetnaya-yarkaya-prikolnaya-veselaya.jpg"
                />
            </div>
            <div>
                <Button className="button"/>
            </div>
            
            

            
        </div>
    )
}

export default Content