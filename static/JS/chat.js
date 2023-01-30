function getTime(){
    let today= new Date();
    hours=today.getHours();
    minutes=today.getMinutes();
    
    if(hours<10){
        hours = "0"+hours;
    }

    if(minutes<10){
        minutes = "0"+minutes;
    }
    
    let time= hours+":"+ minutes;
    return time;


}  

let s=prompt("Enter your name");
      
function firstBotMessage(){
    let firstMessage=`Hello ${s} <br> Welcome to Hostel Mate App <br> Click on <button onclick="menu()"> Main Menu </button> to access our sevices <br>`;
    document.getElementById("botStartMessage").innerHTML=`<p class="botText"><span>` + firstMessage +`</span></p>`;
   
    let time = getTime();

    $("#chat-timestamp").append(time);
    // document.getElementById("userInput").scrollIntoView(false);
    

      
}

firstBotMessage();

function menu(){
    userText="Main Menu";
    let userHtml=`<p class="userText"><span>` + userText + `</span></p>`;
    $("#chatbox").append(userHtml);
    setTimeout(()=>{
        getHardResponse(userText);
    },1000);
}




function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml=`<p class="botText"> <span>`+ botResponse+`</span></p>`;
    $("#chatbox").append(botHtml);

    document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

function getResponse(){
    let userText =$("#textInput").val();

    if(userText==""){
        userText="I love Code Palace!";
    }

    let userHtml=`<p class="userText"><span>` + userText + `</span></p>`;

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    setTimeout(()=>{
        getHardResponse(userText);
    },1000);

}

// function buttonSendText(sampleText){
//     let userHtml=`<p class="userText"><span>` + sampleText+`</span></p>`;
//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document.getElementById("chat-bar-bottom").scrollIntoView(false);
// }

// function sendButton(){
//     getResponse();
// }


// Press Enter to send button
$("#textInput").keypress(function(e){
     if(e.which==13){
        getResponse();
     }
})