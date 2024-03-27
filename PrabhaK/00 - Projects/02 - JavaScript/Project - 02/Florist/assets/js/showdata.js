const show_data = JSON.parse(localStorage.getItem("showdata"));
console.log(show_data);

var mydata="helloo";
document.getElementById('data1').innerHTML= "Name :    " + show_data.name;
document.getElementById('data2').innerHTML="Phone Number :    " + show_data.number;
document.getElementById('data3').innerHTML="Email Address :    " + show_data.email;
document.getElementById('data4').innerHTML="Flower :    " +  show_data.flower;
document.getElementById('data5').innerHTML="Color :    "+  show_data.color;
document.getElementById('data6').innerHTML="Size Of Flowers :    " + show_data.size;
document.getElementById('data7').innerHTML="Occasion :    "+ show_data.occasion;
document.getElementById('data8').innerHTML="Money Range :    "+ show_data.range;
document.getElementById('data9').innerHTML="Delivery Address :    "+ show_data.delivery;
document.getElementById('data10').innerHTML="Message :     "+ show_data.message; 



