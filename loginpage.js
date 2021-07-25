function gettingOtp(){
    let num = document.getElementById("input_num").value;
    if(num>=1000000000 && num<10000000000){
           
        window.location.href='otp.html'
    }
    else{
        alert('Please Check Your Number')
    }
}