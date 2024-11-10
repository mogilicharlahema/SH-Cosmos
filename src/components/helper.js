export function isValidEmailTextPattern(emailText) {
    const check = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return check.test(emailText);
}

export function isValidPasswordPattern(passwordText) {
    return /.{8,}/.test(passwordText)
        && /\d/.test(passwordText)
        && /[A-Z]/.test(passwordText)
        && /[@$!%*?^&#]/.test(passwordText)
}
