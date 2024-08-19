const showhide = document.getElementById("eye");
function inputfield(){

    const pass = document.getElementById("pssword");
    if(pass.type === "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}