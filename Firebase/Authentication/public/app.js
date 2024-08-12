import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6EuAaXi9wibNqC1hakSdgko3Re58cj0Y",
    authDomain: "batchevening-d03ae.firebaseapp.com",
    projectId: "batchevening-d03ae",
    storageBucket: "batchevening-d03ae.appspot.com",
    messagingSenderId: "853431120453",
    appId: "1:853431120453:web:c3ff95c94066d2cc5d692c",
    measurementId: "G-KN60RZD1D3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);







let sbtn = document.getElementById('sbtn')

if (sbtn) {
    sbtn.addEventListener('click', () => {
        let username = document.getElementById('username')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        console.log(username.value, email.value, password.value)

        createUserWithEmailAndPassword(auth, email.value, password.value, username.value)
            .then((data) => {
                const user = data.user;
                console.log(user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    })
}

let lbtn = document.getElementById('lbtn')
if(lbtn){

    lbtn.addEventListener('click',()=>{
        let email = document.getElementById('signin-email')
        let password = document.getElementById('signin-password')
        
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user mil raha hai ==>', user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        
        
    })
}