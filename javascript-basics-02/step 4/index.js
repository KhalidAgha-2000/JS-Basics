
// CLEAR inputs without dialog

// function clearInputs() {
//     p = document.getElementById("person")
//     s = document.getElementById("surname")
//     c = document.getElementById("city")
//     if (p.value.length > 0) {
//         p.value = " ";
//         s.value = " ";
//         c.value = " ";
//     }
// }

// CLEAR inputs with dialog

function clearInputs() {
    reset = confirm("Clear Inputs ?");
    if (reset) {
        p = document.getElementById("person")
        s = document.getElementById("surname")
        c = document.getElementById("city")
        if (p.value.length > 0) {
            p.value = " ";
            s.value = " ";
            c.value = " ";
        }

    } else {
        p = document.getElementById("person").value
        s = document.getElementById("surname").value
        c = document.getElementById("city").value
    }
}