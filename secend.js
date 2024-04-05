const firstname = " abeli ";
const lastname = " gulbani ";
let nickname = " abo ";
const yearofbirth = 1997;
let currentyear = 2024;
const from = "georgia";
let age = currentyear - yearofbirth;
const firstlis = [2, 4, 31, 8, 10];
let Firstlist = [
  (firstlis[0] + firstlis[1] + firstlis[2] + firstlis[3] + firstlis[4]) / 5,
];
console.log(Firstlist);

const about = [
  firstname,
  lastname,
  [currentyear - yearofbirth],
  " year old ",
  " from ",
  from,
];

document.write(about.join("|"));
console.log(about);

const info = {
  firstName: " abeli ",
  lastName: " gulbani ",
  Adress: " martktplatz1 ",
  age: 26,
  phonenumber: ["+995579532442", "+4917635876847"],
};

console.log(
  "my name is ",
  info.firstName + info.lastName,
  "my age is",
  info.age,
  "my adress",
  info.Adress,
  "contact",
  info.phonenumber
);
const newArr = [...about];
about.push(153);
about.unshift("muxbe");
console.log(about);
about.slice(1, 3);
document.write(about);
console.log(about);
