know = {
    "Student" : "Are you currently enrolled at Augsburg? Type 'Enrolled' or 'Not enrolled' ",
    "Not Student" : "What would you like to learn about? Type 'Atheltics' or 'Employment' ",
    "Enrolled" : "What can I help you find? ",
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