
const userData = JSON.parse(localStorage.getItem('current_bouquet_data'));
console.log(userData);
console.log(userData);
var mydata="helloo";
document.getElementById('data1').innerHTML= "Name :    " + userData.name;
document.getElementById('data2').innerHTML="Phone Number :    " + userData.number;
document.getElementById('data3').innerHTML="Email Address :    " + userData.email;
document.getElementById('data4').innerHTML="Flower :    " +  userData.flower;
document.getElementById('data5').innerHTML="Color :    "+  userData.color;
document.getElementById('data6').innerHTML="Size Of Flowers :    " + userData.size;
document.getElementById('data7').innerHTML="Occasion :    "+ userData.occasion;
document.getElementById('data8').innerHTML="Money Range :    "+ userData.range;
document.getElementById('data9').innerHTML="Delivery Address :    "+ userData.delivery;
document.getElementById('data10').innerHTML="Message :     "+ userData.message; 

localStorage.setItem("userData" , JSON.stringify(userData));



function storedata(){
    let bouquet_data = JSON.parse(localStorage.getItem("bouquet_data")) || []; 
bouquet_data.push(userData);
localStorage.setItem("bouquet_data", JSON.stringify(bouquet_data));
arr.push(formData);
}