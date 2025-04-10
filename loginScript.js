alert("!! YOU ARE NOT ALLOWED TO ENTER THIS PAGE !!");
function run() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    
    if(user == "usel" && pass == "usel0607") {
        location.href = "folder/txt.html";
    }
    
    else {
        alert("X");
        location.href = "index.html";
    }
}