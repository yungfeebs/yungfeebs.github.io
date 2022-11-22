//botDatabas.js
const questions = [
    //specific
    ["moodle"],
    ["athletic"],
    ["residence"],
    ["strommen"],
    ["alumni"],

    //less specific
    ["organization"],
    ["admission"],
    ["current"],
    ["record"],
    ["registration"],
    ["job"],
    ["email"],
    ["e-mail"],
    

    //not specific
    ["life"],
    ["careers"],
    ["student"],
    ["help"]
]


const answers = [
    //
    ["Students can find class information, grades, and more at this link: <a href='https://moodle.augsburg.edu/moodle2021/login/index.php'> Moodle </a>"],
    ["You can find more information about Augsburg athletics at this link: <a href='https://athletics.augsburg.edu/'> Athletics </a>"],
    ["You can find more information about residence life at this link: <a href='https://www.augsburg.edu/residencelife/'> Residence Life </a>"],
    ["You can find more information about student career resources at the Strommen Center: <a href='https://www.augsburg.edu/strommen/'> Strommen Center </a>"],
    ["You can find more information about Augsburg alumni at this link: <a href='https://www.augsburg.edu/alumni/'> Alumni </a>"],


    //
    ["You can find more information about student organizations at this link: <a href='https://www.augsburg.edu/campuslife/campus-involvement/groups/'> Student Orgs </a>"], 
    ["You can find more inforation about admissions at this link: <a href='https://www.augsburg.edu/admissions/'> Admissions </a>"],
    ["You are a current student? Can I help you access Residence Life, Student Organizations, Moodle, or Other?"],
    ["You can find more information about records and registration at this link: <a href='https://terra.augsburg.edu/recreg/Pages/frmCourseSearch.aspx'> Records and Registration </a>"],
    ["You can find more information about records and registration at this link: <a href='https://terra.augsburg.edu/recreg/Pages/frmCourseSearch.aspx'> Records and Registration </a>"],
    ["You can find more information about Augsburg job openings at this link: <a href='https://careers.smartrecruiters.com/AugsburgUniversity-MinneapolisMN/faculty'> Jobs </a>"],
    ["You can access your Augsburg email at: <a href='https://mail.google.com/a/augsburg.edu/'> Augsburg Email </a>"],
    ["You can access your Augsburg email at: <a href='https://mail.google.com/a/augsburg.edu/'> Augsburg Email </a>"],

    //
    ["YOu can learn about Auggie Life here: <a href='https://augsburg.campuslabs.com/engage/'> Auggie Life </a>"],
    ["Are you interested in learning more about student careers? Or jobs at Augsburg?"],
    ["Are you a current student at Augsburg, or an aspiring student looking for admissions?"],
    ["Can I direct you to one of the following? Just type Athletics, Admissions, Moodle, Residence Life, Careers, Alumni or others."]
]
const tryAgain = [
    ["I do not understand, try again or type help for some options"],
]