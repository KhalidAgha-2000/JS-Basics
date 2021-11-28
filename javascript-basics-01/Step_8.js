function validateForm() {
    age = document.getElementById("age").value;
    if (isNaN(age) || age <0) {
        alert("Enter Number")
    }
    else {
        if (age >= 18) { alert("You are over 18 !") }
        else { alert("You are under 18 !") }
    }
}