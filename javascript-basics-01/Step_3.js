let text;
let student = prompt("Please enter your name:", "Khalid ");
if (student == null || student == "") {
    text = "Enter Your Name ";
} else {
    text = "Hello " + student;
}
alert(text)