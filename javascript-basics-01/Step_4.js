function validateForm() {
    let p = document.getElementById("person").value;
    let s = document.getElementById("surname").value;
    let c = document.getElementById("city").value;
    if (p == "" || s == "" || c == "") {
        alert("Fill the required inputs ");
    }
    else {
        alert(text = "Hello ," + p + " " + s + " From :  " + c + " Ctiy ");
        
    }
}

