
import { getDatabase, get, set, child, update, remove, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var namev, emailv, passv;

const db = getDatabase();

document.getElementById('up').onclick = insertData;


var nameb = document.getElementById('name');
var emailb = document.getElementById('email');
var passb = document.getElementById('pass');


function insertData(e) {
    e.preventDefault();
    readFormData();
    // console.log("Btn Clicked")

    if (namev == "" && emailv == "" && passv == "") {
        alert("Input Fields cannot be Blank")
    }
    else {
        set(ref(db, "data/" + namev), {
            Email: emailv,
            Name: namev,
            Pass: passv,
        }).then(() => {
            alert("Data Stored Successfully")
            window.location.href = "./Cong.html"
        }).catch((error) => { alert("Unsuccessful", error) });
    }



    clearFormData();
}



function readFormData() {
    namev = nameb.value;
    emailv = emailb.value;
    passv = passb.value;


    console.log(namev, emailv, passv);
}


function clearFormData() {
    nameb.value = ""
    emailb.value = ""
    passb.value = ""
}
