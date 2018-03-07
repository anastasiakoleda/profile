//task 2

function myFunction(){
    var copyText = document.getElementById("comment");
    var copyName = document.getElementById("name");
    var copyEmail = document.getElementById("mail");
    var copySubject = document.getElementById("subject");
    copyName.select();
    document.execCommand("Copy")
    copyText.select();
    document.execCommand("Copy")
    copyEmail.select();
    document.execCommand("Copy")
    copySubject.select();
    document.execCommand("Copy")
if (!copyName.value) {
    alert("You must enter your name");
} else if(!copyEmail.value) {
    alert("You must enter your E-mail");
} else if(!copySubject.value) {
    alert("You must enter subject");
} else if(!copyText.value) {
    alert("You must enter text");
} else {
    alert("Name: " + copyName.value + "\nE-Mail: " + copyEmail.value +
    "\nSubject: " + copySubject.value + "\nMessage: " + copyText.value);
}
}
