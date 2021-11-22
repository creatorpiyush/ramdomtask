const usernameValidation = () => {
  var username = document.getElementById("username").value;
  var username_error = document.getElementById("username_error");
  if (username == "") {
    username_error.innerHTML = "Username is required";
    username_error.style.color = "red";
    return false;
  } else {
    username_error.innerHTML = "";
    return true;
  }
};

const emailValidation = () => {
  var email = document.getElementById("email").value;
  var email_error = document.getElementById("email_error");
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email == "") {
    email_error.innerHTML = "Email is required";
    email_error.style.color = "red";
    return false;
  } else if (!regex.test(email)) {
    email_error.innerHTML = "Invalid Email";
    email_error.style.color = "red";
    return false;
  } else {
    email_error.innerHTML = "";
    return true;
  }
};

const passwordValidation = () => {
  var password = document.getElementById("password").value;
  var password_error = document.getElementById("password_error");
  if (password == "") {
    password_error.innerHTML = "Password is required";
    password_error.style.color = "red";
    return false;
  } else if (password.length < 8) {
    password_error.innerHTML = "Password must be atleast 8 characters";
    password_error.style.color = "red";
    return false;
  } else {
    password_error.innerHTML = "";
    return true;
  }
};

const confirmPasswordValidation = () => {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var confirmpassword_error = document.getElementById("confirmpassword_error");
  if (confirmpassword == "") {
    confirmpassword_error.innerHTML = "Confirm Password is required";
    confirmpassword_error.style.color = "red";
    return false;
  } else if (confirmpassword != password) {
    confirmpassword_error.innerHTML = "Password does not match";
    confirmpassword_error.style.color = "red";
    return false;
  } else {
    confirmpassword_error.innerHTML = "";
    return true;
  }
};

function formValidation() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var username = document.getElementById("username").value;

  const usernameValidation = () => {
    if (username == "") {
      alert("Username is required!");
      email.focus();
      return false;
    } else {
      return true;
    }
  };

  const emailValidation = () => {
    var regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == "") {
      alert("Email is required!");
      email.focus();
      return false;
    } else if (!regex.test(email)) {
      alert("Please enter a Valid Email!");
      email.focus();
      return false;
    } else {
      return true;
    }
  };

  const passwordValidation = () => {
    if (password == "") {
      alert("Password is required!");
      password.focus();
      return false;
    } else if (password.length < 8) {
      alert("Password length must be between 8-15 characters!");
      password.focus();
      return false;
    } else {
      return true;
    }
  };

  const confirmPasswordValidation = () => {
    if (confirmpassword == "") {
      alert("Confirm Password is required!");
      email.focus();
      return false;
    } else if (confirmpassword != password) {
      alert("Password does not match!");
      email.focus();
      return false;
    } else {
      return true;
    }
  };

  if (
    usernameValidation() &&
    emailValidation() &&
    passwordValidation() &&
    confirmPasswordValidation()
  ) {
    return true;
  }
}
