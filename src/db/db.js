import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";


export function getData() {
    return [
        {id: 1, title: "Pizza", price: 17.99, Image: pizzaImg},
        {id: 2, title: "Burger", price: 15, Image: burgerImg},
        {id: 3, title: "Coca", price: 3.5, Image: cocaImg},
        {id: 4, title: "Salat", price: 13.99, Image: saladImg},
        {id: 5, title: "Water", price: 2.5, Image: waterImg},
        {id: 6, title: "Ice creamImg", price: 0.99, Image: iceCreamImg},
        {id: 7, title: "Kebab", price: 2.99, Image: kebabImg},
    ];
}
