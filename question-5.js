// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

let keepTotalPrice = 0;
function calculateTotalPrice(keepTotal, code) {
  for (let i = 0; i < keepTotal.length; i++) {
    keepTotalPrice += keepTotal[i].price * keepTotal[i].quantity;
  }
  if (code === "") {
    return keepTotalPrice;
  } else if (code === "SALE20") {
    return keepTotalPrice * 0.8;
  } else if (code === "SALE50") {
    return keepTotalPrice * 0.5;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
