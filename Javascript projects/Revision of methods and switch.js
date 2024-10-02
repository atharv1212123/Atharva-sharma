var str = "Chak de india";//using this code we can change the work in both lower and upper case.str means string.
console.log(str.toUpperCase());//using this inline code we came convert word or sentence in uppercase.
console.log(str.toLowerCase());//using this inline code we can onvert word or sentence in lowercase.
var day;
switch (new Date().getDate()){
case  0:
day = "sunday"  
break;
case  1:
day = "monday"
break;
case  2:
day = "tuesday"
break;
case  3:
day = "wednesday"
break;
case  4:
day = "Thursday"
break;
case  5:
day = "friday"
break;
case  6:
day = "saturday"
break;
}
console.log("today is", day )