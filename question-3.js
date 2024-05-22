// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
const checkPassword = (password) => {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
};

console.log(checkPassword(userPassword));
