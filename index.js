// Write your solution in this file!
//Declaring a variable using var
var customerName = 'bob';

//Function accesses the global variable and uppercases it
function upperCaseCustomerName (){
    customerName = customerName.toUpperCase();
    //return customerName;
}
//upperCaseCustomerName();
//console.log(upperCaseCustomerName());

//Set beat customer
function setBestCustomer(){
    bestCustomer = 'not bob';
    //return bestCustomer;
}
//setBestCustomer();
//console.log(setBestCustomer());

//Overwriting customer
function overwriteBestCustomer (){
    bestCustomer = 'maybe bob';
}

//overwrite constant varaiable
const leastFavoriteCustomer = "me and you";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Changed Name"
}
console.log(leastFavoriteCustomer);
console.log(changeLeastFavoriteCustomer());