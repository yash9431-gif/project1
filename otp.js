let otp = [123456,112233,445566]
    localStorage.setItem('otps',JSON.stringify(otp))

 function congrat(){
     let input = document.getElementById('otp_input').value
     let onetimepass = JSON.parse(localStorage.getItem('otps'))
     let arr = []
    for(var i = 0;i<onetimepass.length;i++){
    if(input==onetimepass[i]){
        arr.push(onetimepass[i])
        break;
    }
}
    if(arr == input){
       window.location.href='amrita.html'
    }
    else{
        alert("Wrong otp")
    }
   
    }
