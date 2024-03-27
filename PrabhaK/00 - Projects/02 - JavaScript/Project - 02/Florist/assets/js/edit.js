
    let current_userData = JSON.parse(localStorage.getItem("userData"));
    console.log(current_userData);
    console.log(current_userData.name)
    document.getElementById('name').value = current_userData.name;
    document.getElementById('number').value = current_userData.number;
    document.getElementById('email').value = current_userData.email;
    document.getElementById('delivery_address').value = current_userData.delivery;
    document.getElementById('message').value = current_userData.message;
    document.getElementById('color').value = current_userData.color;
var userid=current_userData.userId;
    var checkboxs = document.getElementsByName('flower');
    for (var i = 0; i < checkboxs.length; i++) {
        for (var j = 0; j < current_userData.flower.length; j++) {
            if (checkboxs[i].value == current_userData.flower[j]) {
                checkboxs[i].checked = true;
            }
        }
    }

    var radios = document.getElementsByName('bouquet_size');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === current_userData.size) {
            radios[i].checked = true;
        }
    }

    var occasionRadios = document.getElementsByName('Occasion');
    for (var i = 0; i < occasionRadios.length; i++) {
        if (occasionRadios[i].value === current_userData.occasion) {
            occasionRadios[i].checked = true;
        }
    }

    var rangeRadios = document.getElementsByName('Bouquet_Range');
    for (var i = 0; i < rangeRadios.length; i++) {
        if (rangeRadios[i].value === current_userData.range) {
            rangeRadios[i].checked = true;
        }
    }
  



    var arr = [];
function updateData(){
 


 var name = document.getElementById('name').value;
 var number = document.getElementById('number').value;
 var email = document.getElementById('email').value;
 var color = document.getElementById('color').value;
 var delivery = document.getElementById('delivery_address').value;
 var message = document.getElementById('message').value;

 var selectedFlowers = [];
 var checkboxs = document.getElementsByName('flower');
 for (var i = 0; i < checkboxs.length; i++) {
     if (checkboxs[i].checked) {
         selectedFlowers.push(checkboxs[i].value);
     }
 }

 function getSize() {
     let radio = document.getElementsByName('bouquet_size');
     let result = "";
     for (var i = 0; i < radio.length; i++) {
         if (radio[i].checked) {
             result = radio[i].value;
             break; 
         }
     }
     return result;
 }

 function getOccasion() {
     let radio = document.getElementsByName('Occasion');
     let result = "";
     for (var i = 0; i < radio.length; i++) {
         if (radio[i].checked) {
             result = radio[i].value;
             break;
         }
     }
     return result;
 }
 

 function getRange() {
     let radio = document.getElementsByName('Bouquet_Range');
     let result = "";
     for (var i = 0; i < radio.length; i++) {
         if (radio[i].checked) {
             result = radio[i].value;
             break;
         }
     }
     return result;
 }


 
 var formData = {
     userId:userid ,
     name: name,
     number: number,
     email: email,
     flower: selectedFlowers,
     color: color,
     size: getSize(),
     occasion: getOccasion(),
     range: getRange(),
     delivery: delivery,
     message: message
 };
let bouquet_data = JSON.parse(localStorage.getItem("bouquet_data")) || []; 
bouquet_data.push(formData);
localStorage.setItem("bouquet_data", JSON.stringify(bouquet_data));
arr.push(formData);
}
