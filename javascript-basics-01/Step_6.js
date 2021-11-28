function validateForm() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    if (isNaN(num1) || isNaN(num2) || num1==="" || num2==="") { alert("Should Add number !!") }
    else {
        result = num1 / num2;
        remainder = num1 % num2;
        alert(num1 + " / " + num2 + " = " + result + " And the remainder is : " + remainder)

    }
}
