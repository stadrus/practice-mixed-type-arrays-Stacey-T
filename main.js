
let mixedArray = ["Tony",25,true,"New York",["Reading","Painting"]];
console.log(mixedArray);

let userName = `User Name: ${mixedArray[0]}`;
// let userAge = mixedArray [1];
let subscriptionStatus = `Subscription Status: ${mixedArray[2]}`;
let userLocation = `User Location: ${mixedArray[3]}`;
let hobbyOne = `User's Hobbies: ${mixedArray[4][0]}`;""
let hobbyTwo= `User's Hobbies: ${mixedArray[4][1]}`;

console.log(`User Name: ${mixedArray[0]},\n${hobbyTwo}`);

let userAge = mixedArray [1] + 5;
console.log (`Age within the next five years: ${userAge}`);

let newHobby = mixedArray [4] + ",Coding";
console.log(newHobby);

let newMixedArray = [userName, userAge, subscriptionStatus,userLocation,newHobby];
console.log(`New Profile: 
    ${newMixedArray}`);

