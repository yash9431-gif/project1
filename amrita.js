let loginCred = ["balli@0507","balram1996"];
    

    localStorage.setItem('loginCredential',JSON.stringify(loginCred))

    function signin(){
     let input = document.getElementById('pass_info').value
     let data = JSON.parse(localStorage.getItem('loginCredential'));
     let arr = []
    for(var i = 0;i<data.length;i++){
    if(input==data[i]){
        arr.push(data[i])
        break;
    }
   }
    if(arr == input){
       window.location.href='registration.html'
    }
    else{
        alert("Invalid Credential")
    }
   
    }