let formValidator = {

    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        formValidator.clearErrors();

        for (let i=0; i < inputs.length; i++){
            let input = inputs[i];
            //console.log(input);
            let check = formValidator.checkInput(input);

            if(check !== true ){
                send = false;
                //exibir o erro
                console.log(check);
                formValidator.showError(input, check);
            }
        }


        if(send){
            form.submit();
        }
    },

    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');

        if (rules !== null ){
            rules = rules.split('|');
            for (let k in rules){
                let rulesDetails = rules[k].split('=');
                
                //form rules
                switch(rulesDetails[0]){

                    case 'required':
                        if(input.value == ''){
                            return 'You must type something';
                        }
                    break;

                    case 'min':
                        if(input.value.length < rulesDetails[1]) {
                            return 'Minimum '+rulesDetails[1]+'characters';
                        }
                    break;

                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'E-mail is not valid';
                            }
                        }
                    break;
                }
               
            }
        }
        return true;
    },

    showError: (input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },

    clearErrors: () => {

        let inputs = form.querySelectorAll('input');

        for (let i=0; i < inputs.length; i++){
            inputs[i].style = '';
        }


        let errorElements = document.querySelectorAll('.error');
        for (let i=0; i<errorElements.length; i++){
            errorElements[i].remove();
        }
    }

}

let form = document.querySelector('.form-validator');
form.addEventListener('submit', formValidator.handleSubmit)