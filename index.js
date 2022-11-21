//index.js

know = {
    "hello" : "hi",
    "Student" : "Are you currently enrolled at Augsburg? Type 'Enrolled' or 'Not enrolled' ",
    "Enrolled" : "Are you currently enrolled at Augsburg?",
    "Not Enrolled" : "Here's the link to admissions: https://www.augsburg.edu/admissions/",
    "how are you?" : "good",
    "ok" : ":)"
};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("message").innerHTML += user+"<br>";
    if (user in know) {
        document.getElementById("message").innerHTML += know[user]+"<br>";
    } else {
        document.getElementById("message").innerHTML += "I don't understand...<br>";
    }
} 