function publishToTable(){
    const r_name = document.getElementById("fullName").value;
    const r_email = document.getElementById("email").value;
    const r_gender = document.getElementById("gender").value;
    const sporttype = document.getElementById("sport").value;
    const r_age = document.getElementById("age").value;
    const Phone_no = document.getElementById("phone").value;
    const r_address = document.getElementById("address").value;
    const error = document.getElementById("error");
    error.innerHTML = (!r_name || !r__email || !r_gender || !sporttype || r_age || Phone_no || r_address) ? 'All fields are Required.' : '';
    if (!r_name && !r_email && !r_gender && !sporttype && !r_age && !Phone_no && !r_address) {
        const tableElement = document.getElementById('table');
        const trElemenet = document.getElementById('tr');
        const TbodyElement = document.getElementById('tbody');
        const nameElement = document.getElementById('td');
        const emailElement = document.getElementById('td');
        const genderElement = document.getElementById('td');
        const sportElement = document.getElementById('td');
        const ageElement = document.getElementById('td');
        const phoneElement = document.getElementById('td');
        const addressElement = document.getElementById('td');
        nameElement.innerHTML = r_name;
        emailElement.innerHTML = r_email;
        genderElement.innerHTML = r_gender;
        sportElement.innerHTML = sporttype;
        ageElement.innerHTML = r_age;
        Phone_no.innerHTML = phoneElement;
        addressElement.innerHTML = r_address;

    }
}