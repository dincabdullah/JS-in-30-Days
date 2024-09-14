
let weather = prompt("whats ur fav meal from (pizza,hamburger,kebap))")

switch (weather) {
    case "pizza" :
        console.log("Do not forget the ketchup");
        break;
    case "hamburger" :
        console.log("Do not forget the fries");
        break;
    case "kebap" :
        console.log("Do not forget get ayran");
        break;
    default:
        alert("Undefined error!");
        break;
}