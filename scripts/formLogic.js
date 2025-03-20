function submitForm(formId) {
    const form = document.getElementById(formId);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        
        const data = Object.fromEntries(formData.entries());

        if (!validateForm(data)) {
            return;
        }

        data.phoneNumber = normalizePhoneNumber(data.phoneNumber);

        console.log(`Логин: ${data.username}`);
        console.log(`Имя: ${data.firstName}`);
        console.log(`Фамилия: ${data.lastName}`);
        console.log(`Отчество: ${data.patronymic}`);
        console.log(`Пароль: ${data.password}`);
        console.log(`Пароль заново: ${data.passwordAgain}`);
        console.log(`Телефон: ${data.phoneNumber}`);
    });

    function validateForm(data) {
        let isValid = true;
    
        if (data.password !== data.passwordAgain) {
            showError('passwordAgain', 'Пароли не совпадают');
            isValid = false;
        }
    
        const phoneRegex = /^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
        if (!phoneRegex.test(data.phoneNumber)) {
            showError('phoneNumber', 'Неверный формат номера телефона');
            isValid = false;
        }

        return isValid;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
        field.nextElementSibling.textContent = message;
    }
}