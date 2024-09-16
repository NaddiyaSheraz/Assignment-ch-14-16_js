// 1. Declare an empty array using JS literal notation to store student names in future. 
var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentName = [];

// 3. Declare and initialize a strings array.
var colors = ["Red", "Blue", "Yellow", "Orange"];

// 4.  Declare and initialize a numbers array.
var wholeNumber = [0, 1, 2, 3, 4, 5];

// 5.  Declare and initialize a boolean array.
var genderFemale = [true, false];

// 6. Declare and initialize a mixed array.
var array = ["Diya", "Mishi", 1, 2];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var arrayLength = educationQualifications.length;
console.log(`${educationQualifications}`);
console.log("The length of the array is: " + arrayLength);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 

var studentName = ["Umer", "Mishal", "Naddiya"];
var score = [400, 452, 479];
var totalMarks = [500, 500, 500];
var percentages = [studentName]

// 9. Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.
var colorName = ["Red" ,  "Blue" , "Green"];
document.write(colorName + "<br>")

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
// updated array in your browser. 
var userFavColor = prompt("Which color do you want you add at the end?");
colorName.push(userFavColor);
document.write("After adding color to the end: " +  colorName+ "<br>");

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
var userNextFavColor = prompt("Which two color do you want to add next ?");
colorName.push(userNextFavColor);
document.write("After adding two more color at the end: " + colorName + "<br>");

// d. Delete the first color in the array. Display the updated
// array in your browser.
colorName.shift();
document.write("After deleting the first color: " + colorName+ "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.
colorName.pop();
document.write("After deleting the last color: " + colorName+ "<br>");

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired position/index. . Display the updated array in your 
// browser.
var addColor = prompt("At which Index you want add Blue color?");
colorName.splice(addColor,0,Blue);
document.write("After adding 'Blue' at the index: " + colorName + "<br>");

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
// position/index. Display the updated array in your browser.
var days = ["red", "Blue", "Green", "Yellow", "Black"];
var deleteColor = +prompt("Enter the index number you want to delete from this array?");
var deleteWhichColor = +prompt("Enter how many colors you wants to delete?");
days.splice(deleteColor, deleteWhichColor);
document.write("The updated index is" + " " + days + "<br/>");


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
var stuRecord = [113, 345, 156, 78, 88, 999];
stuRecord.sort(function (a, b) {
    return a - b;  // Sorts in ascending order
});
document.write("Sorted Scores: " + stuRecord + "<br/>");
// sort(function (a, b) { return a - b; }) kaam is tarah karta hai ke yeh array ke har do numbers ko ek dusre
//  ke sath compare karta hai.Agar pehla number(a) chhota hota hai doosre number(b) se, to yeh negative value 
// return karta hai, jo batata hai ke pehla number pehle aana chahiye.Agar pehla number bada hota hai, to positive value return karta hai, jo batata hai ke doosra number pehle aana chahiye.
// Agar dono barabar hote hain, to yeh 0 return karta hai, aur unka order nahi badalta.


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var city =["Karachi", "mumbai" , "Lahore", "Istambol", "kolkata", "Chennai"];
selectedCities =city.slice(1,4);
document.write("Selected Cities are"+ " " + selectedCities + "<br/>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This ", "is" , "my ", "cat"];
var singleString = arr.join(" ");
document.write(singleString + "<br/>");
// join("") yeh karta hai ke array ke tamam elements ko bina kisi space ya extra character ke ek single string banata hai.
// Agar aap space chahte hain to join(" ") likh sakte hain, jo har element ke beech ek space daal dega.

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var array = [];
array.push("Naddiya" );
document.write(array + "<br/>");
array.push("Mishal" );
document.write(array + "<br/>");
array.push("Umer" );
document.write(array + "<br/>");
array.push("Sarim" );
document.write(array + "<br/>");
array.shift();
document.write("By using FIFO-First In First Out" + " "+ array + "<br/>");
array.shift();
document.write("By using FIFO-First In First Out" + " "+ array + "<br/>");
array.shift();
document.write("By using FIFO-First In First Out" + " "+ array + "<br/>");
array.shift();
document.write("know the array is Empty" + " "+ array + "<br/>");
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)
var array = [];
array.push("Ayesha" );
document.write(array + "<br/>");
array.push("Izma" );
document.write(array + "<br/>");
array.push("Ramla" );
document.write(array + "<br/>");
array.push("Sadaf" );
document.write(array + "<br/>");
array.pop();
document.write("By using Last in first out" + " "+ array + "<br/>");
array.pop();
document.write("By using Last in first out" + " "+ array + "<br/>");
array.pop();
document.write("By using Last in first out" + " "+ array + "<br/>");
array.pop();
document.write("know the array is Empty" + " "+ array + "<br/>");


