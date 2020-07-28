// FUNCTION USED TO ACCEPT THE VALUE FOR THE PROGRESS BAR
function getValue(id) {
    var retVal = prompt("Enter the value between 1 to 10 : ");
    if(retVal >=1 && retVal<=10) {
        document.getElementById(id).value = retVal;
    }
    else {
        // WHEN THE USER SELECTS CANCEL, IT WILL NOT CREATE AN
        // UNNECESARY ALERT MESSAGE
        if(retVal==null) {
            return;
        }
        else {
            alert("You have entered Invalid Value");
        }
    }
}

// FUNCTION USED TO FETCH THE URL
function getURL(id) {
    // VARIABLE USED TO STORE THE LINKS ENTERED BY THE USER
    var retVal="";
    // CODE FOR LINKEDIN URL
    if(id=="linkedIn") {
        retVal = prompt("Enter your LinkedIn Url : ");
    }
    // CODE FOR CERTIFICATES URL
    else if(id=="cer4" || id=="cer5" || id=="cer6") {
        retVal = prompt("Enter your Certificate Url : ");
    }
    // CODE FOR ACHIEVEMENTS URL
    else {
        retVal = prompt("Enter your Achievements Url : ");
    }

    // IF THE USER SUBMITS AN EMPTY VALUE
    if(retVal=="") {
        console.log(retVal);
        alert("Please enter an url.");
    }
    else {
        // THE FOLLOWING CODE NOT EXECUTE WHEN THE USER SELECTS "Cancel" BUTTON
        // AND ALSO IT DOES NOT DIPSLAY THE ERROR
        if(retVal!=null) {
            // FETCH THE LINK TAG WHERE WE ARE ADDING URL
            var linkTag = document.getElementById(id);
            // CREATE A NEW <a> TAG
            var aTag = document.createElement("a");
            // ASSIGNING THE VALUE OF retVal TO href ATTRIBUTE OF <a> TAG
            aTag.setAttribute("href",retVal);
            // ASSIGNING THE TEXT PRESENT IN THE <li> TAG TO <a> TAG
            aTag.innerText = linkTag.innerText;
            if(id=="linkedIn") {
                // CREATING THE URL FOR LINKEDIN
                linkTag.innerHTML='<a href="'+retVal+'" target="_blank">'+retVal+'</a>';
            }
            else {
                // CREATING THE URL FOR CERTIFICATES AND ACHIEVEMENTS
                linkTag.innerHTML='<a href="'+retVal+'" target="_blank">'+linkTag.innerText+'</a>';
            }
        }
    }
}


