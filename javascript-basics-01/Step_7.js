function validateForm() {
    shoe = document.getElementById("shoe_size").value;
    birth = document.getElementById("year").value;
    if (isNaN(shoe) || isNaN(birth) || shoe === "" || birth === "") { alert("Should Add number !!") }
    else {
        MultipliesSohe = shoe * 2
        result = (MultipliesSohe + 5) * 50 - birth + 1766
        alert("Result : " + result)
    }
}
