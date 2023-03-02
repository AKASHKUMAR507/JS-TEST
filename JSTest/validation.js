
function fullName(){
    const name = document.getElementById('name').value;
    let len = name.length;
    const re = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    if(len >= 16){
        document.getElementById('nameAns').innerHTML = 'Name Should Be 16 Character';
    }else if(name.charAt(0) === ' '){
        document.getElementById('nameAns').innerHTML = 'Not Start With Space';
    }else if(len <= 2){
        document.getElementById('nameAns').innerHTML = 'Name Contain More Than 2 Character'
    }
    else if(re.test(name)){
        document.getElementById('nameAns').innerHTML = '✅';
    }else{
        document.getElementById('nameAns').innerHTML = 'Invalid Name';
    }
}

function emailFunc(){
    const email = document.getElementById('email').value;
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    if(reg.test(email)){
        document.getElementById('emailAns').innerHTML = "✅"
    }else if(email.charAt(0) === ' '){
        document.getElementById('emailAns').innerHTML = 'space not accept'
    }
    else{
        document.getElementById('emailAns').innerHTML = 'Invalid Email';
    }
}



function passwordValidation(){

    const password = document.getElementById('password').value;
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(reg.test(password)){
        document.getElementById('passAns').innerHTML = '✅';
    }else{
        document.getElementById('passAns').innerHTML = 'Invalid password';
    }

    return password
}


function showPass(){
    const password = document.getElementById('password');
    if (password.type === "password") {
       password.type = "text";
    }else{
        password.type = "password";
    }    
}


function passwordValidation2(){
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if(password === password2){
        document.getElementById('passAns2').innerHTML = '✅';
    }else if(!(password.length === password2.length)){
        document.getElementById('passAns2').innerHTML = 'Password not match';
    }
}

function showPass2(){
    const password2 = document.getElementById('password2');
    if (password2.type === "password") {
       password2.type = "text";
    }else{
        password2.type = "password";
    }    
}

function colorValidation(){
    const color = document.getElementById('color').value;
    console.log(color);

    if(color === '#000000'){
        document.getElementById('colorAns').innerHTML = 'Pick color';
    }else{
        document.getElementById('colorAns').innerHTML = color;
    }
}



function dateValidation(){
    const date = document.getElementById('date').value;
    
    if(date === ''){
        document.getElementById('dateAns').innerHTML = 'Select Date';
    }else{
        document.getElementById('dateAns').innerHTML = '✅';
    }
}


function textFieldValidation(){
    const text = document.getElementById('text').value;
    if(text === ''){
        document.getElementById('textAns').innerHTML = 'field required';
    }else if(text.charAt(0) === " "){
        document.getElementById('textAns').innerHTML = 'space not accepted';
    }else if(text.length <= 3){
        document.getElementById('textAns').innerHTML = 'must be more than 3 character';
    }else if(text.length >= 20){
        document.getElementById('textAns').innerHTML = 'it should be less than 20 character';
    }else{
        document.getElementById('textAns').innerHTML = '✅';
    }
}


function urlValidation(){
    const url = document.getElementById('url').value;
    const reg = (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g);
    if(reg.test(url)){
        document.getElementById('urlAns').innerHTML = '✅';
    }else if(url.charAt(0) === " "){
        document.getElementById('urlAns').innerHTML = 'Not start with space';
    }else if(url === ''){
        document.getElementById('urlAns').innerHTML = 'url is required';
    }else{
        document.getElementById('urlAns').innerHTML = 'Invalid Url';
    }
}


// function numValidation(){
//     const num = parseInt(document.getElementById('numeric').value);
//     const reg  = /^[0-9]+$/;
    
//     if(reg.test(num)){
//         document.getElementById('numericAns').innerHTML = '✅';
//     }else if(num.length == 22){
//         document.getElementById('numericAns').innerHTML = 'More value is not accepted';
//     }
//     else{
//         document.getElementById('numericAns').innerHTML = "field is required";
//     }
// }




function searchValidation(){
    const searchValue = document.getElementById('search').value.trim();
    const reg = (/^[a-zA-Z*|\s*]{3,12}/g);
    
    if(searchValue === ' '){
        document.getElementById('searchAns').innerHTML = 'Provide Input'; 
    }else if(searchValue === ''){
        document.getElementById('searchAns').innerHTML = 'field is required';
    }
    else if(searchValue.length <= 1){
        document.getElementById('searchAns').innerHTML = 'Provide more than 5 Character';
    }else if(searchValue.length >= 250){
        document.getElementById('searchAns').innerHTML = 'Not More than 250 character';
    }else if(reg.test(searchValue)){
        document.getElementById('searchAns').innerHTML = '';
    }
    else{
        document.getElementById('searchAns').innerHTML =  "Invalid Input";
    }
}


function searchPass(){
    let text = document.getElementById('search').value.trim();
    if(!(text === '')){
        let cleanQuery = text.replace(" ","+",text);
        let url='http://www.google.com/search?q='+cleanQuery;
        window.location.href=url;
    }
}


function language(){
    const lag = document.getElementById('language').value;
    console.log(lag);
    if(lag === 'Select language'){
        document.getElementById('languageAns').innerHTML = 'Select Language';
    }
}


function zipValidation(){
    const zip = document.getElementById('zip').value;
    const inReg = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    const usReg = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if(inReg.test(zip)){
        document.getElementById('zipAns1').innerHTML = 'India';
    }else if(usReg.test(zip)){
        document.getElementById('zipAns1').innerHTML = "US";
    }else if(zip ===''){
        document.getElementById('zipAns').innerHTML = 'zip code required';
    }else if(zip.charAt(0) === ' '){
        document.getElementById('zipAns').innerHTML = 'Space not accepted';
    }
    else{
        document.getElementById('zipAns').innerHTML = 'Invalid Zip Code';
    }
}



function phoneValidation(){
    const number = document.getElementById('phone').value;
    let regex = /^[\d,\s,\+,\-]{5,20}/;
    
    if (number.value == "") {
        document.getElementById('phoneAns').innerHTML = "Please Enter Your Phone Number";
	}
	else if (regex.test(number)) {
		
		document.getElementById('phoneAns').innerHTML = "Congrats! You Enter A Valid Phone Number"
	}else if(number.charAt(0) === ' ' || number.charAt(1) === ' '){
        document.getElementById('phoneAns').innerHTML = 'Provide phone number';
    }
	else {
		text.innerText = 
		document.getElementById('phoneAns').innerHTML = "Oops! Your Phone Number Is Invalid";
	}
}


(function() {

    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }
    init();
    
})();