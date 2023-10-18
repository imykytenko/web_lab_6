$(document).ready(function() {
    $('#phone').inputmask("+38(099) 999-99-99");
});
function checkFirstName() {
    const firstName = document.getElementById('firstName').value;
    const error = document.getElementById('firstName_error');
    function validateName(firstName) {
        let error = "";
        if (/\s+/.test(firstName)){
            error += "Ім'я не повинно мітити пробіли<br>";
        }
        if (!firstName.trim()) {
            error += "Поле ім'я не може бути порожнім<br>";
        }
        if (firstName.length > 15) {
            error += "Має бути до 15 символів<br/>";
        }
        if (/[A-Z]+/.test(firstName) || /[a-z]+/.test(firstName)) {
            error += "Не має бути латинських літер<br/>";
        }
        if (/\d/.test(firstName)) {
            error += "Не можна вводити цифри<br>";
        }
        if (firstName.charAt(0).toUpperCase() !== firstName.charAt(0)) {
            error += "Перша літера має бути великою<br>";
        }
        return error;
    }
    error.innerHTML = validateName(firstName);
}


function checkLastName() {
    const lastName = document.getElementById('lastName').value;
    const error = document.getElementById('lastName_error');
    function validateLastName(lastName) {
        let error_name = "";
        if (/\s+/.test(lastName)){
            error_name += "В прізвищі не має бути пробілів<br>";
        }
        if (!lastName.trim()) {
            error_name += "Поле ім'я не може бути порожнім<br>";
        }
        if (lastName.length > 15) {
            error_name += "Має бути до 15 символів<br/>";
        }
        if (/[A-Z]+/.test(lastName) || /[a-z]+/.test(lastName)) {
            error_name += "Не має бути латинських літер<br/>";
        }
        if (/\d/.test(lastName)) {
            error_name += "Не можна вводити цифри<br>";
        }
        if (lastName.charAt(0).toUpperCase() !== lastName.charAt(0)) {
            error_name += "Перша літера має бути великою<br>";
        }
        return error_name;
    }
    error.innerHTML = validateLastName(lastName);
}
function checkMiddleName() {
    const middleName = document.getElementById('middleName').value;
    const error = document.getElementById('middleName_error');
    function validateMiddleName(middleName) {
        let error = "";
        if (/\s+/.test(middleName)){
            error += "Поле не має містити пробіліи<br>";
        }
        if (!middleName.trim()) {
            error += "Поле ім'я не може бути порожнім<br>";
        }
        if (middleName.length > 15) {
            error += "Має бути до 15 символів<br/>";
        }
        if (/[A-Z]+/.test(middleName) || /[a-z]+/.test(middleName)) {
            error += "Не має бути латинських літер<br/>";
        }
        if (/\d/.test(middleName)) {
            error += "Не можна вводити цифри<br>";
        }
        if (middleName.charAt(0).toUpperCase() !== middleName.charAt(0)) {
            error += "Перша літера має бути великою<br>";
        }
        return error;
    }
    error.innerHTML = validateMiddleName(middleName);
}

function checkEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const error = document.getElementById('email_error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        error.innerHTML = "Неправильний формат електронної пошти";
    } else {
        error.innerHTML = "";
    }
}

function checkPassword() {
    function validatePassword(password) {
        let error = "";
        if (/\s+/.test(password)){
            error += "В паролі не має бути пробілів<br>";
        }
        if (password.length < 8 || password.length > 15){
            error += "Пароль має бути від 8 до 15 символів<br/>";
        }
        if (!/[A-Z]+/.test(password)){
            error += "В паролі має бути хоча б одна велика латинська літера<br/>";
        }
        if (!/[a-z]+/.test(password)){
            error += "В паролі має бути хоча б одна маленька латинська літера<br/>";
        }
        if (/[\u0400-\u04FF]/.test(password)){
            error += "Тільки латинські літери<br/>";
        }
        return error;

    }

    const password = document.getElementById('password').value;
    const error = document.getElementById('password_error');

    error.innerHTML = validatePassword(password);
}
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const button = document.querySelector('.btn_pas');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        setTimeout(() => {
            passwordInput.type = 'password';
        }, 3000);
        button.innerHTML = '<i class="fas fa-eye-slash"></i> Приховати пароль';
    } else {
        passwordInput.type = 'password';
        button.innerHTML = '<i class="fas fa-eye"></i> Показати пароль';
    }
}
function checkDate() {
    const dateInput = document.getElementById('date');
    const date = new Date(dateInput.value);
    const error = document.getElementById('date_error');

    if (isNaN(date.getTime()) || date > new Date()) {
        error.innerHTML = 'Введіть коректну дату народження.';
    } else {
        error.innerHTML = '';
    }
}
function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value || '';
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const group = document.getElementById('group').value;
    
    addToTable(firstName, lastName, middleName, gender, email, phone, date, group);

    clearForm();
}

function addToTable(firstName, lastName, middleName, gender, email, phone, date, group) {
    const table = document.getElementById('userDataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);

    cell1.innerHTML = '<input type="checkbox">';
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = middleName;
    cell5.innerHTML = gender;
    cell6.innerHTML = email;
    cell7.innerHTML = phone;
    cell8.innerHTML = date;
    cell9.innerHTML = group;
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('middleName').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('group').value = 'group1'; // Set default group
}

function deleteSelectedRows() {
    const table = document.getElementById('userDataTable');
    const checkboxes = table.getElementsByTagName('input');

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
            table.deleteRow(i + 1);
        }
    }
}

function duplicateSelectedRows() {
    const table = document.getElementById('userDataTable');
    const checkboxes = table.getElementsByTagName('input');

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
            const newRow = table.insertRow(i + 2);
            const originalRow = table.rows[i + 1];

            for (let j = 0; j < originalRow.cells.length; j++) {
                const cell = newRow.insertCell(j);
                cell.innerHTML = originalRow.cells[j].innerHTML;
            }
        }
    }
}