let correctLogin = ""
let correctPassword = ""

function generateCaptcha() {
    let captcha = ""
    const characters = "qwertyuiopasdfghjklzxcvbnm1234567890"
    for(let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * characters.length)
        captcha += characters[index]
    }

    return captcha
}
let correctCaptcha = generateCaptcha()
document.getElementById("captcha").innerHTML = correctCaptcha

function validate() {
  const userLogin = document.getElementById("login");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeat-password");
  const userCaptcha = document.getElementById("user-captcha");

  if (
    userLogin.value === "" || password.value === "" || repeatPassword.value === ""
  ) {
    alert("Please fill the form");
    if (userLogin.value === "") {
        userLogin.focus()
        return
    }
    if (password.value === "") {
        password.focus()
        return
    }
    if (repeatPassword.value === "") {
        repeatPassword.focus()
        return
    }
  }

  if(password.value !== repeatPassword.value) {
    alert("Passwords don't match")
    return
  }
  if(password.value.length < 6) {
    alert("The password is too weak - at least 6 characters")
    return
  }
  if(correctCaptcha !== userCaptcha.value) {
    alert("Captcha is not matching")
    correctCaptcha = generateCaptcha()
    document.getElementById("captcha").innerHTML = correctCaptcha
  }

  correctLogin = userLogin.value
  correctPassword = password.value
}

function signIn() {
    const userLogin = document.getElementById("user-login")
    const userPassword = document.getElementById("user-password")

    if(userLogin.value === "" || userPassword === "") {
        alert("Fill the form")
        return
    }

    if(userLogin.value === correctLogin && userPassword.value === correctPassword) {
        alert("Correct")
    }
    else {
        alert("Bad credentials")
    }
}