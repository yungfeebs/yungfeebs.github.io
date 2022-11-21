//botDatabas.js
const questions = [
    //specific
    ["moodle"],
    ["athletics"],
    ["residence"],

    //less specific
    ["organizations"],
    ["admissions"],
    ["current"],

    //not specific
    ["student"],
    ["help"]
]


const answers = [
    //
    ["Students can find class information, grades, and more at this link: <a href='https://moodle.augsburg.edu/moodle2021/login/index.php'> Moodle </a>"],
    ["You can find more information about Augsburg athletics at this link: <a href='https://athletics.augsburg.edu/'> Athletics </a>"],
    ["You can find more information about residence life at this link: <a href='https://www.augsburg.edu/residencelife/'> Residence Life </a>"],

    //
    ["You can find more information about student organizations at this link: <a href='https://www.augsburg.edu/campuslife/campus-involvement/groups/'> Student Orgs </a>"], 
    ["You can find more inforation about admissions at this link: <a href='https://www.augsburg.edu/admissions/'> Admissions </a>"],
    ["You are a current student? Can I help you access Residence Life, Student Organizations, Moodle, or Other?"],

    //
    ["Are you a current student at Augsburg, or an aspiring student looking for admissions?"],
    ["Can I direct you to one of the following? Just type Athletics, Admissions, Moodle, Residence Life, Careers, Alumni or others."]
]
const tryAgain = [
    ["I do not understand, try again or type help for some options"],
]