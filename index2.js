know = {
    "Student" : "Are you currently enrolled at Augsburg? Type 'Enrolled' or 'Not enrolled' ",
    "Not Student" : "Are you an alumni or just want to learn about Augsburg. Type 'Alumni' or 'More info' ",
    "Alumni" : "Here's the link to the alumni page: https://www.augsburg.edu/alumni/",
    "Learn more" : "WHat would you like to learn about? Type 'Athletics' or 'Community' or 'Events' or 'Academics' or 'Jobs'",
    "Academics" : "Here's the link to the majors and programs: https://www.augsburg.edu/academics/majors/",
    "Not Enrolled" : "Here's the link to admissions: https://www.augsburg.edu/admissions/",
    "Enrolled" : "What can I help you find? Type 'My account' or 'My records' or 'Community' or 'Housing'",
    "My account" : "What account would you like to access? Type 'Zoom' or 'Email' or 'Moodle' ",
    "Moodle" : "Here's the link to moodle: https://moodle.augsburg.edu/moodle2021/my/",
    "Zoom" : "Here's the link to schedule zoom meetings: https://augsburg.zoom.us/",
    "Email" : "Here's the link to your emails: https://inside.augsburg.edu/",
    "My records" : "Here's the link to grades / transcript: https://terra.augsburg.edu/recreg/Pages/frmWelcome.aspx?vialogin=1 ",
    "Housing" : "Here's the link to residence life: https://www.augsburg.edu/residencelife/",
    "Community" : "What part of the community would you like to learn more about? Type 'Dorms' or 'Clubs' or 'Jobs' or 'Events' or 'Atheletics' ",
    "Clubs" : "Here's the link to students organizations: https://www.augsburg.edu/campuslife/campus-involvement/groups/",
    "Jobs" : "Here's the link to career services: https://www.augsburg.edu/hr/",
    "Events" : "Here's the link to univeristy events: https://sites.augsburg.edu/events/",
    "Athletics" : "Here's the link to athletics: https://athletics.augsburg.edu/",
};

function talk() {
    var user = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    document.getElementById("message").innerHTML += user+"<br>";
    if (user in know) {
        document.getElementById("message").innerHTML += know[user]+"<br>";
    } else {
        document.getElementById("message").innerHTML += "I don't understand...<br>";
    }
} 