               //DOM Id()
document.getElementById('demo').innerHTML = "Welcome to my js page.If you want to access any element in an HTML page, you always start with accessing the document object.Below are some examples of how you can use the document object to access and manipulate HTML";

document.getElementById('demo').style.color = "blue";

document.getElementById('demo').style.fontSize = "29px";

document.getElementById('welcome').style.textAlign = "center";

document.getElementById('demo').style.textIndent = "190px";



                 //DOM ClassName()
document.getElementById('heading').innerHTML = "welcome to my java script";



const x = document.querySelectorAll("h3.heading");
               //DOM CSS
document.getElementById('heading').style.fontWeight = "500";
document.getElementById('heading').style.color = "green";
document.getElementById('heading').style.textAlign = "center";
document.getElementById('heading').innerHTML = "elements by class id tag names and also for their given codes";//chamges their html codes
              //DOM TagName()
const elementss = document.getElementsByTagName('h3');
document.getElementById('heading').innerHTML = " html stands for hyper text markup lanuages";



function OnButtonClicked() {
    const elStyle = document.getElementById('demoo').style;

    elStyle.color = 'green';
    elStyle.fontSize = '50px';

    const lstVitro = document.getElementsByClassName('vitro');
}

function onButton() {
    let vat = document.getElementById('flog').innerHTML = "hello world..!!!";
}

function myFunction() {
    const vatri = document.getElementsByTagName('p');
    document.getElementById('intro').innerHTML = "welcomeee";
}




function myFun() {
    let zxc = document.forms["myform"]["fname"].value;
    if (zxc == "fname") {
        alert("Enter your fname");
        return false;
    }
}


function myFuun(ioo) {
    ioo.innerHTML = "welcome to my world"; 
}


function myVar() {
    document.getElementById("demoo").innerHTML = Date();
}


function uppercase() {
    const x = document.getElementById("txt");
    x.value = x.value.toUpperCase();
}



function mOver(obj) {
    obj.innerHTML ="Thank you";
}

function mOut(obj) {
    obj.innerHTML = "Mouse over me";
}


function myFun(obj) {
    obj.innerHTML = "welcome";
    obj.style.backgroundColor = "green";
}

function myUp(obj) {
    obj.innerHTML = "Hello";
    obj.style.backgroundColor = "pink";
}


function displayDatee() {
    document.getElementById('parrr').innerHTML = Date();
}

document.getElementById('myBtn').addEventListener('click', displayDatee);



//document.getElementById('btn').addEventListener('click', function () {
//    alert("Hello world..!!");
//});

document.getElementById('btn').addEventListener('click', function () {
    alert('hello world');
});

document.getElementById('btnn').addEventListener("click", functions);

function functions() {
    alert('welcome');
}




var vas = document.getElementById('bbt');
vas.addEventListener('click', myFunctions);
vas.addEventListener('click', myFunctionss);

function myFunctions() {
    alert("heloo worlddddddd");
}

function myFunctionss() {
    alert("welcomeeeeeeeeee");
}







var x = document.getElementById('mnb');
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById('yu').innerHTML += "mouseover";
}

function mySecondFunction() {
    document.getElementById('yu').innerText += "click";
}

function myThirdFunction() {
    document.getElementById('yu').innerHTML += "mouseout";
}