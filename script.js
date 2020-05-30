// Event listeners waiting for clicks

document.getElementById("generate").addEventListener("click", Generator);
document.getElementById("copy").addEventListener("click", popCopy);

// Where we copy to clipboard

function popCopy() {
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");
}
// The main function that generates the random password, starting with prompt questions

function Generator() {
    var passwordLength = prompt("Password Length?");
    if (passwordLength === null) {
        return;
    }
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Password must be between 8 and 128 characters. Password Length?");
        if (passwordLength === null) {
            return;
        }
    }
    var wantsNumber = prompt("Numbers?");
    if (wantsNumber === null) {
        return;
    }
    while (wantsNumber !== "Y" && wantsNumber !== "N") {
        wantsNumber = prompt("Answer with Y or N. Numbers?");
        if (wantsNumber === null) {
            return;
        }
    }
    var wantsAlpha = prompt("Uppercase Letters?");
    if (wantsAlpha === null) {
        return;
    }
    while (wantsAlpha !== "Y" && wantsAlpha !== "N") {
        wantsAlpha = prompt("Answer with Y or N. Uppercase Letters?");
        if (wantsAlpha === null) {
            return;
        }
    }
    var wantsLowerAlpha = prompt("Lowercase Letters?");
    if (wantsLowerAlpha === null) {
        return;
    }
    while (wantsLowerAlpha !== "Y" && wantsLowerAlpha !== "N") {
        wantsLowerAlpha = prompt("Answer with Y or N. Uppercase Letters?");
        if (wantsLowerAlpha === null) {
            return;
        }
    }
    var wantsSpecial = prompt("Special Characters?");
    if (wantsSpecial === null) {
        return;
    }
    while (wantsSpecial !== "Y" && wantsSpecial !== "N") {
        wantsSpecial = prompt("Answer with Y or N. Special Characters?")
        if (wantsSpecial === null) {
            return;
        }
    }

    if (wantsNumber === "N" && wantsAlpha === "N" && wantsLowerAlpha === "N" && wantsSpecial === "N") {
        alert("You must choose one");
        Generator();

    }

    // Variables used in password genration. I recreated the 'objs' as arrays in order to validate all elements requested are in the password

    var specialObj = { 0: "!", 1: "#", 2: "$", 3: "%", 4: "&", 5: "\'", 6: "\(", 7: "\)", 8: "\*", 9: "\+", 10: "\,", 11: "\-", 12: "\.", 13: "\/", 14: "\:", 15: "\;", 16: "\<", 17: "\=", 18: "\>", 19: "\?", 20: "@", 21: "[", 22: "\\", 23: "]", 24: "^", 25: "_", 26: "`", 27: "{", 28: "|", 29: "}", 30: "~" };
    var alphaObj = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z" };
    var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var alphaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","0","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowerAlphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var specialArray = ["!","#","$","%","&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","@","[","\\","]","^","_","`","{","|","}","~" ];

    function randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from - Used this to translate user's answer into an array - arrayLength. I'm don't fully understand how this is working.
        var arrayLength = Array.from({ length: passwordLength }, (v, i) => i);
        var i;

        // Random number generation
        var numPasswordArray = [];

        for (i = 0; i < arrayLength.length; i++) {
            numPasswordArray[i] = Math.floor(Math.random() * 10);
        }

        var numPassword = numPasswordArray.join("");

        // Random uppercase letter generation

        var alphaPasswordArray = [];
        var alphaPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            alphaPasswordArray[i] = Math.floor(Math.random() * 25);
            alphaPassword += alphaObj[alphaPasswordArray[i]];
        }

        // Random lowercase letter generation
        
        var lowerAlphaPasswordArray = [];
        var lowerAlphaPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            lowerAlphaPasswordArray[i] = Math.floor(Math.random() * 25);
            lowerAlphaPassword += alphaObj[alphaPasswordArray[i]];
            lowerAlphaPassword = lowerAlphaPassword.toLowerCase();
        }


        // Random special character generation

        var specialPasswordArray = [];
        var specialPassword = [];

        for (i = 0; i < arrayLength.length; i++) {
            specialPasswordArray[i] = Math.floor(Math.random() * 30);
            specialPassword += specialObj[specialPasswordArray[i]];
        }

        // Returning password combos based on what user wants

        if (wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "N" && wantsSpecial === "N") {
            return numPassword;
        }
        else if (wantsAlpha === "Y" && wantsNumber === "N" && wantsLowerAlpha === "N" && wantsSpecial === "N") {
            return alphaPassword;
        }
        else if (wantsLowerAlpha === "Y" && wantsAlpha === "N" && wantsNumber === "N" && wantsSpecial === "N") {
            return lowerAlphaPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "N" && wantsLowerAlpha === "N") {
            return specialPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "N") {
            
            var totalPassword = numPassword + specialPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = numPassword + alphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "N" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = alphaPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = numPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = specialPassword + alphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = lowerAlphaPassword + specialPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "N") {
            var totalPassword = specialPassword + numPassword + alphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "Y" && wantsAlpha === "N" && wantsLowerAlpha === "Y") {
            var totalPassword = specialPassword + numPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "Y" && wantsNumber === "N" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = specialPassword + alphaPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else if (wantsSpecial === "N" && wantsNumber === "Y" && wantsAlpha === "Y" && wantsLowerAlpha === "Y") {
            var totalPassword = numPassword + alphaPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
        else {
            var totalPassword = numPassword + alphaPassword + specialPassword + lowerAlphaPassword
            var parsedPassword = totalPassword.split("");
            var mixedPasswordObj = [];
            var mixedPassword = [];

            for (i = 0; i < passwordLength; i++) {
                mixedPasswordObj[i] = Math.floor(Math.random() * parsedPassword.length);
                mixedPassword += parsedPassword[mixedPasswordObj[i]];
            }
            return mixedPassword;
        }
    }

    // This is where we make sure the random password has everthing the user asked for. I got help on this from Dave and Peter.

    var passValidates = false;
    var password;
    while (passValidates === false) {
        password = randomizer(passwordLength, wantsNumber, wantsAlpha, wantsLowerAlpha, wantsSpecial);
        console.log(password);
        var hasNumber = false;
        var hasAlpha = false;
        var hasLowerAlpha = false;
        var hasSpecial = false;

        if (wantsNumber === "Y") {
            for (i = 0; i < numArray.length; i++) {
                if (password.includes(numArray[i])) {
                    hasNumber = true;
                }
            }
        }

        if (wantsAlpha === "Y") {
            for (i = 0; i < alphaArray.length; i++) {
                if (password.includes(alphaArray[i])) {
                    hasAlpha = true;
                }
            }

        }


        if (wantsLowerAlpha === "Y") {
            for (i = 0; i < lowerAlphaArray.length; i++) {
                if (password.includes(lowerAlphaArray[i])) {
                    hasLowerAlpha = true;
                }
            }

        }

        if (wantsSpecial === "Y") {
            for (i = 0; i < specialArray.length; i++) {
                if (password.includes(specialArray[i])) {
                    hasSpecial = true;
                }
            }

        }

        function checker(){
            if (wantsNumber === "Y" && hasNumber === true){
                passValidates = true;
            } 
            else if (wantsNumber === "Y" && hasNumber === false){
                return;
            }
            
            if (wantsAlpha === "Y" && hasAlpha === true){
                passValidates = true;
            }
            else if (wantsAlpha === "Y" && hasAlpha === false){
                return passValidates = false;
            }

            if (wantsLowerAlpha === "Y" && hasLowerAlpha === true){
                passValidates = true;
            }
            else if (wantsLowerAlpha === "Y" && hasLowerAlpha === false){
                return passValidates = false;
            }

            if (wantsSpecial === "Y" && hasSpecial === true){
                passValidates = true;
            }
            else if (wantsSpecial === "Y" && hasSpecial === false){
                passValidates = false;
            }
        }
        checker()
    }

    // This is where we insert the generated password onto the page within the password id

    function insertPassword(password) {
        event.preventDefault();
        var passwordText = password
        document.querySelector("#password").textContent = passwordText;
    }
    insertPassword(password)

    return password;
}

