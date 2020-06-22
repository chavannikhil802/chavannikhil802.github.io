// Function to insert the digits and operators in the textview
function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

// Function to find the result of the input
function equal() {
    var exp = document.form.textview.value;
    if(exp) {
         document.form.textview.value = eval(exp);
    }
}

// Function to clear the input
function clean() {
 document.form.textview.value = "";
}

// Function for Backspace
function back() {
 var exp = document.form.textview.value;
 document.form.textview.value = exp.substring(0,exp.length-1);
}