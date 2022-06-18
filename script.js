function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let message = document.getElementById("message");
    console.log(" Password:", password, '\n', "Confirm Password:", cnfrmPassword);
    var res;
    var str = document.getElementById("password").value;
    if (str.match(/[0-9]/g))
        res = "TRUE";
    else
        res = "FALSE";

    if (password.length != 0) {


        if (password == cnfrmPassword) {
            if (password.length < 8) {
                message.textContent = "password length is less than 8";
            }
            else if (res == "FALSE") {
                message.textContent = "not contain digits";
            }
            else {
                message.textContent = "Yes the password match";
                window.open('file.html', '_self');
                //    message.style.backgroundColor = "#1dcd59";
            }
        }

        else {
            message.textContent = "the 2 passwords do not match";
            //    message.style.backgroundColor = "#ff4d4d";
        }
    }
    else {
        alert("Password can't be empty!");
        message.textContent = "";
    }
}