// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore ,doc, setDoc,getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDrWQ2_Ww4YmI3QIDZmovcASwJArRGAk",
  authDomain: "hannan4u.firebaseapp.com",
  projectId: "hannan4u",
  storageBucket: "hannan4u.appspot.com",
  messagingSenderId: "234888349225",
  appId: "1:234888349225:web:92a6b86e30164cbe6dfe38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
let table = document.getElementById("table")


let loginData = JSON.parse(localStorage.getItem("login"))
console.log(loginData.Fname);
 table.innerHTML = `
              <td>${loginData.Fname}</td>
              <td>${loginData.Lname}</td>
              <td>${loginData.cnic}</td>
              <td>${loginData.Email}</td>
              `
        


// window.profile = profile;