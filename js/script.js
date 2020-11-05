var button = document.querySelector("#button-pass");
var pass = document.querySelector("#pass");
var confirm = document.querySelector("#confirmPass");

button.addEventListener('click', function(e) {
    let value = e.target.value;
    if (pass.value == confirm.value) {
        pass.setAttribute('class', 'correct');
        confirm.setAttribute('class', 'correct');
    } else {
        pass.setAttribute('class', 'wrong');
        confirm.setAttribute('class', 'wrong');
    }
});

