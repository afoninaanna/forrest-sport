function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');

    const select = document.getElementById('category');

    const filesInput = document.getElementById('filesInput');

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    //символы, собака, символы, точка, символы
    var named = /^[а-яА-Яa-zA-Z ]+$/;
    
    if (!select.value) {
        let a = select.parentNode.children[1]
        if (a) {
            if (a.classList[0] == 'error-label') {
                console.log('ura')
                a.classList[0].remove('error')
            }
        }
        removeError(select)
        createError(select, `Выберите категорию статьи!`)
        result = false
    }
   

    for (const input of allInputs) {

        removeError(input)

        if (input === allInputs[0]) {
            if (Number(input.value)) {
                removeError(allInputs[0])
                createError(allInputs[0], `Имя должно содержать буквы!`)
                result = false
            }
        }

        if (input === allInputs[1]) {
            if (!EMAIL_REGEXP.test(input.value)) {
                removeError(input)
                createError(input, `Введен некорректный email!`)
                result = false
            }
        }

        if (input === allInputs[2]) {
            if (!named.test(input.value)) {
                removeError(input)
                createError(input, `Название должно содержать только заглавные или строчные РУССКИЕ буквы`)
                result = false
            }
        }

        if (input === allInputs[3]) {
            if (input.dataset.required == "true") {
                if (input.value == "") {
                    removeError(input)
                    createError(input, 'Поле не заполнено!')
                    result = false
                }
            }
            if (input.files[0].name.split('.')[1] !== 'docx') {
                if ((input.files[0].name.split('.')[1] !== 'txt')) {
                    removeError(input)
                    createError(input, `Загрузите файл формата docx или txt`)
                    result = false
                }
            }
        }
        

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Поле не заполнено!')
                result = false
            }
        }

    }

    return result
}

// document.getElementById('add-form').addEventListener('submit', function(event) {
//     event.preventDefault()

//     if (validation(this) == true) {
//         alert('Форма проверена успешно!')
//     }

// })

