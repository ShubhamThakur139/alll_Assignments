function person(n, a) {
  this.name = n;
  this.age = a;
}

function Teacher(s, n, a) {
  person.call(this, n, a);
  this.subject = s;
}
function Student(s, n, a) {
  person.apply(this, [n, a]);
  this.subject = s;
}
function Player(s, n, a) {
  var x = person.bind(this, n, a);
  x();
  this.sport = s;
}

var teacher1 = new Teacher("Js", "Shubam", 23);
console.log("teacher1:", teacher1);
var student1 = new Student("JavaScript", "Ankush", 22);
console.log("student1:", student1);
var player1 = new Player("Javellien", "Neeraj", 23);
console.log("player1:", player1);
// function productInfo(b, n) {
//   this.brand = b;
//   this.name = n;
// }

// var product1 = new productInfo("Nike", "Shoes");
// var product2 = new productInfo("Apple", "Watch");

// console.log("Product1: ", product1);
// console.log("Product2: ", product2);

// function newspaper(id, d, dn, p) {
//   (this.id = id), (this.date = d), (this.dayOfNews = dn), (this.publisher = p);
// }

// var news1 = new newspaper(1, "13-08-21", "Friday", "Shubham Thakur");
// var news2 = new newspaper(2, "13-08-21", "Friday", "Ankush Rana");
// console.log("News1: ", news1);
// console.log("News2: ", news2);

// function Newspaper() {
//   (this.publisher = "TOI"),
//     (this.date = new Date()),
//     (this.id = Math.round(Math.random() * 1000));
//   this.headLine = "Masai School has Raised $1Bn funding";
// }

// var n1 = new Newspaper();
// console.log("Newspaper1 :", n1);

// function student(n, a) {
//   this.name = n;
//   this.age = a;
// }

// var student1 = new student("shubham", 21);
// console.log("Student1 :", student1);

// var productInfo = {
//   productBrand: "Nike",
//   productName: "Shoes",
//   productPrice: 4500,
//   productDiscount: "10%",
//   productBio: function () {
//     console.log(`Brand is ${productBrand}. Name of Product is ${productPrice}`);
//   },
// };
// productInfo.productBio();

// console.log("Shubham Thakur");
// var student1 = {
//   name: "Shubham",
//   age: 21,
// };
// student1.age = 25;
// console.log(student1.age);
// JS constructor objects
// var person = {
//   name: "Shubham",
//   age: 21,
//   HigherEducation: "Bachelor's of Computer Applications",
//   bio: function () {
//     console.log(
//       `Name is ${this.name} and Age is ${this.age}years old. And higher Education is ${this.HigherEducation}`
//     );
//   },
// };

// person.bio();

// function myName() {
//   console.log(this);
// }

// myName();
