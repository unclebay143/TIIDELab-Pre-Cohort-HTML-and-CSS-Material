// get access to the input elements
const getFirstName = document.getElementById("first-name");
const getSecondName = document.getElementById("second-name");
const getDob = document.getElementById("dob");


// get access to the span tags to display the information
const getFirstNamePlaceholder = document.getElementById("first-name-placeholder");
const getSecondNamePlaceholder = document.getElementById("second-name-placeholder");
const getDobPlaceholder = document.getElementById("dob-placeholder");


// get access to the error message span tag
const getMessagePlaceholder = document.getElementById("error-message");


// function that check if the user has filled the form correctly
const validateFormInput = () =>{
    // check of the user has filled all the form
    if(getFirstName.value == "" || getSecondName.value == "" || getDob.value == "" ){
        getMessagePlaceholder.innerHTML = "All Fields are required"
    }else{// if the user has satisfied the if condition, by filling all forms
        //proceed to handle the form data
        handleFormSubmission()
    }
}

// function to set the user details to the profile placeholder
function handleFormSubmission(){
    
    // set the user input to the html value of the element
    getFirstNamePlaceholder.innerHTML = getFirstName.value;
    getSecondNamePlaceholder.innerHTML = getSecondName.value;
    getDobPlaceholder.innerHTML = getDob.value;
    
    // reset the form to be blank
    getFirstName.value = "";
    getSecondName.value = "";
    getDob.value = "";



    getMessagePlaceholder.innerHTML = "Form Submitted Successfully"
}