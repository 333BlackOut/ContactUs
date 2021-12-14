function Display() {
    var name = sessionStorage.getItem("Name1");
    var email = sessionStorage.getItem("Email1");
    var subject = sessionStorage.getItem("Subject1");
    var message = sessionStorage.getItem("Message1");
    var query = sessionStorage.getItem("Query1");
    var Info = document.getElementById("info");
    var N = document.getElementById("n");
    var E = document.getElementById("e");
    var S = document.getElementById("s");
    var M = document.getElementById("m");
    var Q = document.getElementById("q");
    N.innerHTML = name;
    E.innerHTML = email;
    S.innerHTML = subject;
    M.innerHTML = message;
    Q.innerHTML = query;
    Info.style.opacity=1;
}
// function FadeIn() {
//     alert("hello");
//     for (var x = 0; x < 1; x = x + 0.1) {
//         Info.style.opacity = +Info.style.opacity + 0.1;
//         setTimeout(FadeIn,500);
//     }
// }