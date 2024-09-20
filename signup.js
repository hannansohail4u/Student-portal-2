// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore ,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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

let Fname = document.getElementById("Fname")
let Lname = document.getElementById("Lname")
let Email = document.getElementById("Email")
let password = document.getElementById("password")
let cnic = document.getElementById("cnic")
let usertype = document.getElementById("usertype")



const signup = async ()=>{
    try {
        const userObj = {
            Fname: Fname.value,
            Lname: Lname.value,
            Email: Email.value,
            password: password.value,
            cnic: cnic.value,
            usertype: usertype.value
        };

        const usersignup = await createUserWithEmailAndPassword(
            auth,
            userObj.Email,
            userObj.password
        );

        const uid = usersignup.user.uid
            
        const response = await setDoc(doc(db, "users", uid), userObj);
        alert("Student Register");
    } 
        catch (error){
       alert(error.message)
  }
}
   
const Marks =()=>{
    try{
        
    }
    catch(error){
        alert(error.message)
    }
}

window.Marks = Marks;
window.signup = signup;