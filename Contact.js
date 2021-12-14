
function NextPage(){
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Subject = document.getElementById("subject");
    var Message = document.getElementById("message");
    var Query = document.getElementById("query");
    var name = Name.value;
    var email= Email.value;
    var subject = Subject.value;
    var message = Message.value;
    var query = Query.value;
    sessionStorage.setItem("Name1" , name);
    sessionStorage.setItem("Email1" ,email);
    sessionStorage.setItem("Subject1" , subject);
    sessionStorage.setItem("Message1" , message);
    sessionStorage.setItem("Query1" , query);
    // return=false;
    window.location="Welcome.html";
}