// Exercises one to ten :D

// Exercise 1
var hero = "Tabby";
var gender = "female";
var age = 17;
var weapon = "laser pointer";
var pronoun;
var xp;

//conditional to set pronoun
if (gender == "female"){
  pronoun = "her";
} else if (gender == "male"){
    pronoun = "his";
} else{
  pronoun = "their";
}

//conditional that outputs story based on age
// if age is less than or equal to 18, set xp to "just beginning"
// if age is greater than or equal to 19 && less than or equal to 40, 
//    set xp to "has seen a few battles"
// if age is greater than 40, set xp to "has lived thorugh many epic battles"
if (age <= 18){
  xp = "is just beginning";
} else if (age >= 19 && age <=40){
  xp = "has seen a few battles";
} else if (age > 40){
  xp = "has lived through many epic battles";
}

// "(jake) is our lovable hero, who (has seen a few battles) with his trusty (sword)." 
// "(hero) is our lovable hero, who (something) with (pronoun) trusty (weapon)."
console.log(hero + " is our lovable hero, who " + xp + " with " + pronoun + " trusty " + weapon + ".");



// Exercise 2
var count;
var animal = "cat";

// function called animalHouse w/ 2 parameters, where count is sum of param
//  invoke function
function animalHouse(a,b){
 count = a+b;
 console.log("Animal Count: " + count);
}

animalHouse(2,3);

// if animal count is greater than 2, console log blah blah
if (count > 2){
  console.log("We have too many " + animal + "s.");
} else {
  console.log("Welcome to the club.");
} 



// Exercise 3
var hero = "Thor";

// ironman, cap america, black widow,"sorry, you are not needed"
function avengersAssemble(avenger){
  if (avenger == "Iron Man"){
    console.log(avenger + " soars through the sky.");
  } else if (avenger == "Captain America"){
    console.log(avenger + " throws his shield gracefully.");
  } else if (avenger == "Black Widow"){
    console.log(avenger + " kicks the villains' butts in style.");
  } else{
    console.log("Sorry " + hero + ", you are not needed for this mission.");
  }
}

avengersAssemble(hero);



//Exercise 4
var lights = true;

if (lights == true){
  console.log("And then there was light.");
} else{
  console.log("Lights out!");
}



//Exercise 5
var carType = ["Toyota","Lamborghini","Tesla"];
var color = ["red", "blue", "black"];
var num = 3;

// check for blue toyata, red lamb, black tesla, console log "We have [variables]" for each. 
// if none are true console log "We don't have any blue Toyotas in stock"
if (carType == "Toyota" && color == "blue"){
  console.log("We have " + color[1] + carType[0] + "s.");
} else if (carType == "Lamborghini" && color == "red"){
  console.log("We have " + color[0] + carType[1] + "s.");
} else if (carType == "Tesla" && color == "black"){
  console.log("We have " + color[2] + carType[2] + "s.");
} else {
  console.log("We don't have any blue Toyotas in stock.");
}