// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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

let email = document.getElementById("email")
let password = document.getElementById("Password")

const signin = async ()=>{
    console.log(password.value)
    
        //   try{
        //  let obj = {
        //     email : email.value,
        //     password : password.value,
        //   }

        //   console.log(obj)
         
        const usersignin = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        )
        // console.log(usersignin.user.uid);
        .then(async (userCredential) =>  {
            // Signed in 
            const user = userCredential.user;
            const uid = userCredential.user.uid
            const docref = doc(db , "users" , uid)
            const docSnap = await getDoc(docref);
            console.log(docSnap)
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                let snapdata = docSnap.data()
                console.log(snapdata);
                localStorage.setItem("login",JSON.stringify(snapdata))
                if(snapdata.usertype === "Admin"){
                    location.href="./signup.html"
                }else{
                    location.href="./profile.html"
                }
              } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }
            
          })
        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message)
          });

}

window.signin = signin;