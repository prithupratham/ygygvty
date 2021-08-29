function adduser(){
    user_name = document.getElementById("User").value;
    localStorage.setItem("User_name",user_name);
    window.location = "kwitter_room.html";
}