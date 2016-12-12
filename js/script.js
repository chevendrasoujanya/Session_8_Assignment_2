// FIRST PAGE LOGIN BUTTON HANDLER
function onLoginBtnClick() {
	window.location.href = "login-page.html";
}

// FIRST PAGE SIGN UP BUTTON HANDLER
function onSignupBtnClick() {
	window.location.href = "signup-page.html";
}

// BACK BUTTON HANDLER OF ALL THE PAGES
function onBackBtnClick() {
	window.location.href = "session_8_assignment_2.html";
}

// SINGN UP PAGE SUBMIT CLICK HANDLER
function onSubmitClick() {
	var signupName = document.getElementById("signupUsername").value;	
	var signupEmail = document.getElementById("signupEmail").value;
	var signupPassword = document.getElementById("signupPassword").value;

	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("storagename", signupName);
		localStorage.setItem("storageemail", signupEmail);
		localStorage.setItem("storagepassword", signupPassword);
	}
	else {
		alert("sorry, no web storage is available");
	}

	alert("Submitted Successfully");
	window.location.href="login-page.html";
	
}

// LOGIN PAGE LOGIN BUTTON HANDLER
var getName;
var getEmail;
var getPassword;

function onLoginPageClick() {
	var fieldName = document.getElementById("loginUsername").value;
	var fieldPassword = document.getElementById("loginPassword").value;
	getValues();
	if(fieldName == '' || fieldPassword == '') {
		window.alert("Please enter username and password");
	}
	else {
		if(fieldName === getEmail && fieldPassword === getPassword) {
			alert("Login Successful");
			window.location.href= "home-page.html";
			document.getElementById("myHome").innerHTML = "Welcome To: " +getName;
		}
		else {
			alert("Please enter valid username and password");
		}
	}	
}

function getValues() {
	if (typeof(Storage) !== "undefined") {
		getName = localStorage.getItem("storagename");
		getEmail = localStorage.getItem("storageemail");
		getPassword = localStorage.getItem("storagepassword");			
	}
}

// HOME PAGE BUTTON HANDLER
function onLogoutBtnClick() {
	window.location.href = "session_8_assignment_2.html";
}