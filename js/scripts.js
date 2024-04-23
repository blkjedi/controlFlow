const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area);

let plants = 20;
let requiredArea = area * 0.8;
console.log(requiredArea, "max plants 62");

let growth = plants * 2;
let week1 = growth;
console.log(week1);
let week2 = week1 * 2;
let week3 = week2 * 2;

let week = 1;

if (week < 10) {
  if (growth * 0.8 <= requiredArea) { 
    console.log("planted", week);
    week++;
   
  } else if (growth * 0.8 > requiredArea) {
    console.log("need cut", week);
    week++;
    
  } else {
    console.log("monitored", week);
    week++;
    
  }
}
