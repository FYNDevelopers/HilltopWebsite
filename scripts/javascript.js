 


//application request
function hilltopRecruitmentApply(){

var Fname = document.getElementById("Fname").value
var Lname = document.getElementById("Lname").value
var ID_No = document.getElementById("ID_No").value
var Gender = document.getElementById("Gender").value
var MaritalStatus = document.getElementById("MaritalStatus").value
var DOB = document.getElementById("DOB").value
var Contact = document.getElementById("Contact").value
var email = document.getElementById("email").value
var location = document.getElementById("location").value
var job = document.getElementById("job").value
var Availability = document.getElementById("Availability").value
var Category = document.getElementById("Category").value
var employed_before = document.getElementById("employed_before").value
var hear_about_us = document.getElementById("hear_about_us").value  
var question_for_us = document.getElementById("question_for_us").value

    if (
      Fname.length<3 || 
      Lname.length<3 ||
      ID_No.length<7 ||
      Gender=='Gender'  ||
      MaritalStatus=='Marital Status'  ||
      DOB=='' ||
      Contact.length<10 ||
      email.length<3 ||
      location.length<3 ||      
      job=='Applying for'  ||
      Availability=='Availability' ||
      Category=='How would you categorize yourself in your field' ||
      employed_before=='' ||
      hear_about_us.length<3 ||
      question_for_us.length<2
      ) {

      alert('Please fill in all details')
    }




  else {
    const scriptVolunteer = 'https://script.google.com/macros/s/AKfycby8DuRwtL2oTjQEDWJAOMlhfpbrIdDoArF8o9NNMMb3uTN-TdY/exec?action=apply'
    var applicantRequest = scriptVolunteer+
                              '&Fname='+Fname+
                              '&Lname='+Lname+
                              '&ID_No='+ID_No+
                              '&Gender='+Gender+
                              '&MaritalStatus='+MaritalStatus+
                              '&DOB='+DOB+
                              '&Contact='+Contact+
                              '&email='+email+
                              '&location='+location+
                              '&job='+job+
                              '&Availability='+Availability+
                              '&Category='+Category+
                              '&employed_before='+employed_before+
                              '&hear_about_us='+hear_about_us+
                              '&question_for_us='+question_for_us

    var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              var res = JSON.parse(this.responseText)

            if (res == 'Application Received') {
              sessionStorage.setItem("ApplicantName", Fname)
              window.location.replace("application_received.html") 
          }
          
      }
      xmlHttp.open("GET", applicantRequest, true); // true for asynchronous 
      xmlHttp.send();
    
  }



}















function exitThankYouPage(){
  window.location.replace("index.html")
}

/*function to display name of applicant on thank you page*/
function confirmApplicant(){
  document.getElementById("volunteer_name").innerHTML = 'Dear ' + sessionStorage.getItem('ApplicantName') + ','
}











/*function send message from contact page*/

function hilltopRecruitmentSendMessage(){

  var Fname = document.getElementById("Fname").value
  var Lname = document.getElementById("Lname").value
  var Category = document.getElementById("Category").value
  var email = document.getElementById("email").value
  var Subject = document.getElementById("Subject").value
  var Message = document.getElementById("Message").value



    if (
      Fname.length<3 || 
      Lname.length<3 ||
      Category=='You are a'  ||
      email.length<3 ||
      Subject.length<3 ||
      Message.length<10 
      ) {

      alert('Please fill in all details')
    }


      else {
    const scriptContactMessage = 'https://script.google.com/macros/s/AKfycbzLOOEzYT1cGviM6UACkZCUFaSls5Bn9812fQVQDImkdo5Hjug/exec?action=message'
    var MessageRequest = scriptContactMessage+
                              '&Fname='+Fname+
                              '&Lname='+Lname+
                              '&Category='+Category+
                              '&email='+email+
                              '&Subject='+Subject+
                              '&Message='+Message

    var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              var res = JSON.parse(this.responseText)

            if (res == 'Message Received') {
              sessionStorage.setItem("ContactPersonName", Fname)
              window.location.replace("message_sent.html") 
          }
          
      }
      xmlHttp.open("GET", MessageRequest, true); // true for asynchronous 
      xmlHttp.send();
    
  }


}





/*function to display contact person name*/
function thankPerson(){
  document.getElementById("volunteer_name").innerHTML = 'Dear ' + sessionStorage.getItem('ContactPersonName') + ','
}
