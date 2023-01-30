function getBotResponse(input) {
   
   s=`What problem you are facing in hostel. Choose the corresponding options: &#128071 <br><br>`
   + `1. Electrcity  <br> 2. Water <br> 3. Food <br> 4. Furniture <br> 5. Ragging &#128721 <br> 6. Cleanliness<br>
   7. Missing <br> 8. Complain about some students <br> 9. Main Menu <br> 10. Exit <br><br>`

      if(input=="Main Menu"){
         return s;
      }

      switch(input){
         case "1": 
         s=`You can contact or Email the main electrician of hostel<br><br>Electrician: Amit Kumar <br> Room No.: G05 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
         Email: amitkumar@gmail.com. <br><br>
         For getting the complain format. Click on format button <br><br>
         <a href="/complain"><button>Submit your complain here</button></a>`;
         return s;
         
         case "2":
         s=`You can contact or Email the Plumber of hostel<br><br>Plumber: Shankar Sinha <br> Room No.: G10 <br> Contact No.: 9890110981 <br> Whatsapp No.:9890110981<br>
         Email: sskumar@gmail.com. <br><br>
         For getting the complain format. Click on format button <br><br>
         <a href="/complain"><button>Submit your complain here</button></a>` ;
         return s;

         case "3":
         s=`You can contact or Email the head chef of the mess<br><br>Head Chef: Vijayshankar Chandrakar <br> Room No.: G011 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
         Email: vjiakumar@gmail.com. <br><br>
         For getting the complain format. Click on format button <br><br>
         <a href="/complain"><button>Submit your complain here</button></a>` ;
         return s;

         case "4":
            s=`You can contact or Email Furniture maker<br><br>Name: Sharad Kumar <br> Room No.: G010 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
            Email: sdkumar@gmail.com. <br><br>
            For getting the complain format. Click on format button <br><br>
            <a href="/complain"><button>Submit your complain here</button></a>` ;
            return s;

         case "5":
         s=`&#128721 &#128721This is the highly serious issue complain to the below mentioned people<br><br>Chief Warden: Saurabh Kumar <br> Room No.: G12 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
         Email: skumar@gmail.com. <br><br>
         Ragging Punishment Committee Head: Sandip Sarker (Department of Humanities and Social Sciences)<br>
         Office room No.: S12 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
         Email: skumar@gmail.com. <br><br>

         For getting the complain format. Click on format button <br><br>
         <a href="/complain"><button>Submit your complain here</button></a>` ;
         return s;

         case "6": 
            s=`You can contact sweeping team head<br><br>Head Sweeper: Sudip <br> Room No.: G45 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
            Email: sudip@gmail.com. <br><br>
            For getting the complain format. Click on format button <br><br>
            <a href="/complain"><button>Submit your complain here</button></a>` ;
            return s;

         case "7":
         s=`You can contact the below mentioned students who are the group admin of the common hostel group just join in that group and mention your missing issue<br><br>Abhishek Mishra<br> Room No.: 513 <br> Contact No.: 9890110989 <br><br>
         Pramil Kesharwani<br>Room No.: 336 <br> Contact No.: 9890110989 <br><br>`
         return s;

         case "8":
            s=`You can contact or Email the Chief Warden of hostel<br><br>Chief Warden: Saurabh Kumar <br> Room No.: G12 <br> Contact No.: 9890110989 <br> Whatsapp No.:9890110989<br>
            Email: skumar@gmail.com. <br><br>
            For getting the complain format. Click on format button <br><br>
            <a href="/complain"><button>Submit your complain here</button></a>` ;
            return s;
         case "9": 
            return s;
         case "10":
         return `Sure. Let me how else can I help you.`;
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