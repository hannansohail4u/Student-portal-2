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


let course = document.getElementById("course")
let studentid = document.getElementById("Studentid")
let marks = document.getElementById("marks")
let totalMarks = document.getElementById("totalMarks")
let grade = document.getElementById("grade")
let cnic = document.getElementById("cnic")



const Marks = async()=>{
    try{
        let obj = {
            course: course.value,
            studentid: studentid.value,
            marks: marks.value,
            totalMarks: totalMarks.value,
            grade: grade.value,
            cnic: cnic.value,
        }

        // console.log(obj)

        const ref = await setDoc(doc(db , "marks" , obj.cnic), obj)

        alert("Marks uploaded")
    }
    catch(error){
        alert(error.message)
    }
}

window.Marks = Marks;