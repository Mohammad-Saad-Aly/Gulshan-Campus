import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3WofDB98eUXVVqMcilo38RyJgF2vTpf8",
    authDomain: "batch11-c9ba6.firebaseapp.com",
    projectId: "batch11-c9ba6",
    storageBucket: "batch11-c9ba6.appspot.com",
    messagingSenderId: "756118996711",
    appId: "1:756118996711:web:776547e825a3a6786b8442",
    measurementId: "G-2QVJFV7ERD"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let getBtn = document.getElementById('btn')
getBtn.addEventListener('click', async () => {
    let getInp = document.getElementById('inp')
    if (getInp.value) {
        let id = Math.random() * 1000
        await setDoc(doc(db, "Students", `user${id}`), {
            name: getInp.value
        });
        console.log('data chala gaya')

    }
    else {
        alert("please fill form")
    }
})