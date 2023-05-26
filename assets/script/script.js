let result = document.getElementById("result_field");

function generate() {

    let password = '';
    const str = 'ABCDEFGHIJKLMNOPQRSTXYZabcdefghijklmnopqrstuwxyz12345690@#$*&.';

    for (i = 1; i <= 8; i++) {

        let num = Math.floor(Math.random() * str.length);
        password += str.charAt(num);

    }

    result.innerHTML = password;

}