let getsbtn = document.getElementById('sbtn')

if(getsbtn){
    getsbtn.addEventListener('click', ()=>{
        let getemail = document.getElementById('signin-email')
        let getpassword = document.getElementById('signin-password')
        if(getemail.value == 'admin' && getpassword.value == 'admin'){
            location.href = 'admindashboard.html'
        }
        else{
            location.href = 'userdashboard.html'
        }
    })
}