$(document).ready(function() {
    //máscara para CPF
    $('#CPF').mask('000.000.000-00');
    //máscara para tel
    $('#tel').mask('(00) 00000-0000');
    //máscara para cep
    $('#cep').mask('00000-000');

    //validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true,
            },
            CPF: {
                required: true,
                minlength: 14 //O CPF precisa ter 14 caracteres (incluindo os pontos e o hifen)
            },
            tel: {
                required: true,
            },
            email: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
                minlength: 9 //O cep precisa ter 9 caracteres (incluindo o hifen)
            }
        },
        messages: { 
            nome: {
                required: 'Campo Inválido',
            },
            CPF: {
                required: 'Campo Inválido'
            },
            tel: {
                required: 'Campo Inválido'
            },
            email: {
                required: 'Campo Inválido',
            },
            endereco: {
                required: 'Campo Inválido',
            },
            cep: {
                required: 'Campo Inválido'
            }
        },
        
        submitHandler: function(form) {
            console.log(form);
            //Aqui você pode adicionar a lógica para enviar o formulário
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const CPF = document.getElementById("CPF");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const cep = document.getElementById("cep");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const CPFValue = CPF.value;
    const telValue = tel.value;
    const emailValue = email.value;
    const enderecoValue = endereco.value;
    const cepValue = cep.value;
    
    if (usernameValue === "") {
    setErrorFor(username);
} else {
    setSuccessFor(username);
}

if (CPFValue === "") {
    setErrorFor(CPF);
} else if (CPFValue.length < 14) {
    setErrorFor(CPF);
} else {
    setSuccessFor(CPF);
}

if (telValue === "") {
    setErrorFor(tel);
} else if (telValue.length < 11) {
    setErrorFor(tel);
} else {
    setSuccessFor(tel);
}

if (emailValue === "") {
    setErrorFor(email);
} else if (!checkEmail(emailValue)) {
    setErrorFor(email);
} else {
    setSuccessFor(email);
}

if (enderecoValue === "") {
    setErrorFor(endereco);
} else {
    setSuccessFor(endereco);
}

if (cepValue === "") {
    setErrorFor(cep);
} else if (cepValue.length < 9) {
    setErrorFor(cep);
} else {
    setSuccessFor(cep);
}

const formControls = form.querySelectorAll(".form-control");

const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
    return formControl.classCPF === "form-control success";
    return formControl.classTel === "form-control success";
    return formControl.classEmail === "form-control success";
    return formControl.classEndereco === "form-control success";
    return formControl.classCep === "form-control success";
    
});

if (formIsValid) {
    console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
    small.innerText = message;

  // Adiciona a classe de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

  // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);
}

function checkTel(tel) {
    return /^[0-9]{10,11}$/.test(tel);
}

