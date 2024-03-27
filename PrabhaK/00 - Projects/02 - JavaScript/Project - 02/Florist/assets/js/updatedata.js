
const userData = JSON.parse(localStorage.getItem('bouquet_data'));
console.log(userData);
console.log(userData[userData.length-1]);
var mydata="helloo";
document.getElementById('data1').innerHTML= "Name :    " + userData[userData.length-1].name;
document.getElementById('data2').innerHTML="Phone Number :    " + userData[userData.length-1].number;
document.getElementById('data3').innerHTML="Email Address :    " + userData[userData.length-1].email;
document.getElementById('data4').innerHTML="Flower :    " +  userData[userData.length-1].flower;
document.getElementById('data5').innerHTML="Color :    "+  userData[userData.length-1].color;
document.getElementById('data6').innerHTML="Size Of Flowers :    " + userData[userData.length-1].size;
document.getElementById('data7').innerHTML="Occasion :    "+ userData[userData.length-1].occasion;
document.getElementById('data8').innerHTML="Money Range :    "+ userData[userData.length-1].range;
document.getElementById('data9').innerHTML="Delivery Address :    "+ userData[userData.length-1].delivery;
document.getElementById('data10').innerHTML="Message :     "+ userData[userData.length-1].message; 
