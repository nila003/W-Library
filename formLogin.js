var username= document.getElementById('username');
var password= document.getElementById('pwd');

function validate(){
    if(username.value.trim()==""|| password.value.trim()==""){
        alert("Field cannot be empty");
            return false;
    }
    else{
        return true;
    }
}