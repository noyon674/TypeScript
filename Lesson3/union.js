// In case first user input the userID as number 1001
// second user input the same userID as string '674'
// In this case union data type can help use
var userID;
userID = '1001';
// userID = 674 // here we can get the error
var userAge; // here the union data type works
userAge = 20;
userAge = '34';
//use can also write like
var userInput;
userInput = 'Hi I am user';
userInput = 19379;
userInput = true;
//how can use into the function 
function display(userInfo) {
    console.log(userInfo);
}
display('Noyon');
display(1002);
