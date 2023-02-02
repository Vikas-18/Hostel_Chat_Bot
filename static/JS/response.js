function getBotResponse(input) {
   
   s=`What problem you are facing in hostel. Choose the corresponding options: &#128071 <br><br>`
   + `1. Electrcity  <br> 2. Water <br> 3. Food <br> 4. Furniture <br> 5. Ragging &#128721 <br> 6. Cleanliness<br>
   7. Missing <br> 8. Complain about some students <br> 9. Main Menu <br> 10. Exit <br><br>`

      if(input=="Main Menu"){
         return s;
      }

      switch(input){
         case "1": 
         s=`
         For raising the complain regarding electricity problem click to the belwo button<br><br>
         <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>`;
         return s;
         
         case "2":
         s=`For raising the complain regarding water problem click to the belwo button<br><br>
         <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
         return s;

         case "3":
         s=`For raising the complain regarding food problem click to the belwo button<br><br>
         <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
         return s;

         case "4":
            s=`For raising the complain regarding furniture problem click to the belwo button<br><br>
            <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
            return s;

         case "5":
         s=`For raising the complain regarding ragging problem click to the belwo button<br><br>
         <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
         return s;

         case "6": 
            s=`For raising the complain regarding cleanliness problem click to the belwo button<br><br>
            <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
            return s;

         case "7":
         s=`For raising the complain regarding missing problem click to the belwo button<br><br> 
         <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>`
         return s;

         case "8":
            s=`For raising the complain regarding complain about some studnts click to the belwo button<br><br>
            <a href="/complain"><button class="submitbtn">Click To Submit Complain</button></a>` ;
            return s;
         case "9": 
            return s;
         case "10":
         return `Sure. <br>Let me know how else, I can help you.`;
         default:
            return s;
      }
     
    
        
    
} 

// function format(){
   
//       let userText="Name: <br> Branch: <br> Year: <br> Room No.: <br> Roll No.: <br> Complain: <br> ";
//       let userHtml=`<p class="userText"><span>` + userText + `</span></p>`;
//       $("#chatbox").append(userHtml);
//       setTimeout(()=>{
//           getHardResponse(userText);
//       },1000);
  
// }