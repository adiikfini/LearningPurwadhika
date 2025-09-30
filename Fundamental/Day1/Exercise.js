//variable rectangle
let length = 5;
let width = 3; 

//variable circle
let radius = 5;
let pi = 3.14159;

//variable triangle
let cornerLeft = 80;
let cornerRigth = 65;

//variable count day
let countDays = 400;
let _countDays = 366;
let daysInYear = 365
let daysInMonth = 30;

//variable gap day
let date1 = "20-01-2022";
let date2 = "22-01-2022";

//variable gap day another mothod
let days1 = '2022-01-20';
let days2 = '2022-01-22';

/* 
● Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15

pseudocode:
Declare
variables: area, length, width interger

Assign
length = 5 
width = 3

process
area = length * width

output
print (area)
*/
console.log("Soal1");
let area = length * width;
console.log(`areaOfRectangle: ${area}`);

//+----------------------------------------------------
/* 
● Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16

psudocode:
Declare
variables: perimeter, length, width interger

Assign
length = 5
width = 3

process
perimeter = 2 * (length + width)

output
print (perimeter)
*/
console.log("\nSoal2");
let perimeter = 2 *(length + width);
console.log(`perimeterOfRectangle: ${perimeter}`);

//+----------------------------------------------------
/*
● Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539

psudocode:
Declare
variables: diameter, circumference, area, radius, pi float

Assign
radius = 5
pi = 3.14159

process
diameter = 2 * radius
circumference = 2 * pi * radius
area = pi * radius * radius

output
print (diameter)
print (circumference)
print (area)
*/
console.log("\nSoal3");
let diameter = 2 * radius;
let circumference = 2 * pi * radius;
let areaOfCircle = pi * radius * radius;

console.log(`diameter: ${diameter}`);
console.log(`circumference: ${circumference}`);
console.log(`areaOfCircle: ${areaOfCircle}`);

//+----------------------------------------------------
/*
● Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35

psudocode:
Declare
variables: cornerLeft, cornerRight, anggleOfTriangle integer

Assign
cornerLeft = 80
cornerRight = 65

Prosses
anggleOfTriangle = 180 - (cornerLeft + cornerRight)

output
Print (anggleOfTriangle)
*/
console.log("\nSoal4");
let anggleOfTriangle = 180 - (cornerLeft + cornerRigth);
console.log(`anggleOfTriangle: ${anggleOfTriangle}`);


//+----------------------------------------------------
/*
● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day

psudocode
Declare
Variable: countDays, year, remainingMonths , month, remainingDays, Days Interger

Assign
countDays = 400
_countDays = 366
daysInYear = 365
daysInMonth = 30;

Prosses
year = countDays // daysInYear
remainingMonths = countDays % daysInYear
month = remainingMonths // daysInMonth
Days = remainingMonths % daysInMonth

Output
Print(year)
Print(month)
Print(Days)
*/

console.log("\nSoal5");
let year = Math.floor(countDays / daysInYear);
let remainingMonths = countDays % daysInYear;
let month = Math.floor(remainingMonths / daysInMonth);
let days = remainingMonths % daysInMonth;

console.log(`Convert days to year, mounths and days: ${year} year, ${month} month, ${days} days`);
//+----------------------------------------------------
/*
● Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2

Psudocode
Declare
variable: 
date1, date2, gap string
getDays1, getDays2 integer

Assain
date1 = 20-01-2022 
date2 = 22-01-2022 

Prosses
getDays1 = date1.slice(0,2);
getDays2 = date2.slice(0,2);
gap = getDays2 - getDays1;

Output
Print(gap)
*/
console.log("\nSoal6");
let getDays1 = date1.slice(0,2);
let getDays2 = date2.slice(0,2);
let gap = getDays2 - getDays1;

console.log(`difference between dates in days: ${gap}`);


//by browsing google
console.log("\nanother Method");
const time1 = new Date(days1);
const time2 = new Date(days2);

const getTime1 = time1.getTime();
const getTime2 = time2.getTime();

const gapTimeMilisecond = Math.abs(getTime1 - getTime2);
// There are 1000ms in a second, 60s in a minute, 60min in an hour, and 24hr in a day.
// So, 1000 * 60 * 60 * 24 = 86,400,000 milliseconds per day.
let makeTime = 1000 * 60 * 60 * 24;
let gapInDays = Math.round(gapTimeMilisecond / makeTime);//

console.log(`difference between dates in days with another method: ${gapInDays}`);