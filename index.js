//index.js

document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("userInput")
    //when the user presses Enter, trigger the output function.
    userInput.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            let input = userInput.value;
            userInput.value = "";
            output(input);
        };
    });
});

function output(input){
    //initialize returnStatement
    let returnStatement;
  
    //convert input to lower case and remove special characters and white space
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  
    //check input against the database
    if (evaluate(questions, answers, text)) { 
      returnStatement = evaluate(questions, answers, text);
    } else {
        //this is being called even when the if value is true, so I still need to debug this
        returnStatement = tryAgain[0]
    }
    //add the user input and returnStatement to the chat box displaying the log
    displayChat(input, returnStatement);
}

function evaluate(questions, answers, parsedText){
    //initialize answer
    let answer;
    //since we haven't checked yet, answerFound starts as false
    let answerFound = false;
    //loop through questions
    for(let i = 0; i < questions.length; i++){
        for(let j = 0; j < questions[i].length; j++){
            //when the answer is in the database
            if(parsedText.includes(questions[i][j])) {
                //set answer to the corresponding answer and answerFound to true
                answer = answers[i];
                answerFound = true;
                break;
            }
        }
        if (answerFound){
            break;
        }
    }
    //return answer
    return answer;
}

function displayChat(input, returnStatement) {
    //Create chat for our user
    const chatboxContainer = document.getElementById("message");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "userResponse";
    userDiv.innerHTML = `<span>${input}</span>`;
    chatboxContainer.appendChild(userDiv);

    //Create chat from our bot
    const chatboxContainer2 = document.getElementById("message");
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "botResponse";
    botText.innerHTML = `${returnStatement}`;
    botDiv.appendChild(botText);
    chatboxContainer.appendChild(botDiv);
    // keep it so we auto scroll with each input
    chatboxContainer.scrollTop = chatboxContainer.scrollHeight - chatboxContainer.clientHeight;

}