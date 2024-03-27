var arr = [];

function getData() {
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

    function getUserId() {
        var url = new URL(window.location.href);
        var urlParams = new URLSearchParams(url.search);
        var userId = urlParams.get('userId');
        return userId; 
    }
    
    var formData = {
        userId: getUserId(),
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

   // let current_bouquet_data = JSON.parse(localStorage.getItem("current_bouquet_data")) || []; 
   // bouquet_data.push(formData);
    localStorage.setItem("current_bouquet_data", JSON.stringify(formData));
    arr.push(formData);
}
//let bouquet_data = JSON.parse (localstorage.getItem)











//let bouquet_data = JSON.parse(localStorage.getItem("bouquet_data")) || []; 
//bouquet_data.push(formData);
//localStorage.setItem("bouquet_data", JSON.stringify(bouquet_data));
//arr.push(formData);
