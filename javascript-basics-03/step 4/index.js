function testPass() {
    let password = document.getElementById("password").value;
    let confirmation = document.getElementById("confirmation").value;
    if (password.length === 0 || confirmation.length === 0) {
        alert("Enter the password !")
    }
    else if (password !== confirmation) {
        document.querySelector("#password").style.border = "5px solid red"
        document.querySelector("#confirmation").style.border = "5px solid red"
    }
    else { alert("TRUE") }
}