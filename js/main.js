const inputSenha = document.getElementById('senha');
const olhoSenha = document.getElementById('olhoSenha');
const inputConfirmarSenha = document.getElementById('confirmar-senha');
const olhoConfirmarSenha = document.querySelector('#campo-confirmar-senha .fa-eye');

const checkboxLembrarDeMim = document.getElementById('checkbox');
const textoLembrarDeMim = document.getElementById('lembrar-de-mim p');
const btnEntrar = document.getElementById('btn-entrar');
const btnCriarConta = document.getElementById('btn-criar-conta');
const formLogin = document.getElementById('form-login');
const secaoCadastrar = document.getElementById('secao-cadastrar');
const contornoSectionPrincipal = document.getElementById('contorno-section-principal');

let jaClicouNoEntrar = localStorage.getItem('jaClicouNoEntrar') === 'true';

if (jaClicouNoEntrar) {
    formLogin.style.display = 'flex';
    secaoCadastrar.style.display = 'flex';
    contornoSectionPrincipal.style.display = 'none';
}

localStorage.setItem('jaClicouNoEntrar', 'false');

if (olhoConfirmarSenha) {
    if (window.innerWidth < 860) {
        contornoSectionPrincipal.style.display = 'none';
    }

    formLogin.style.display = 'flex';
    secaoCadastrar.style.display = 'flex';
}

if (btnEntrar) {
    btnEntrar.addEventListener('click', () => {
        jaClicouNoEntrar = true;
        formLogin.style.display = 'flex';
        secaoCadastrar.style.display = 'flex';
        contornoSectionPrincipal.style.display = 'none';
    });
}

if (btnCriarConta) {
    btnCriarConta.addEventListener('click', () => {
        window.location.href = 'cadastro.html';
    });
}

if (document.querySelector('#cadastrar').textContent == 'Entrar') {
    console.log("entrei");
    document.querySelector('#cadastrar').addEventListener('click', () => {
        localStorage.setItem('jaClicouNoEntrar', 'true');
        window.location.href = 'index.html';
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 860) {
        contornoSectionPrincipal.style.display = 'flex';
    } else if (jaClicouNoEntrar) {
        contornoSectionPrincipal.style.display = 'none';
    } else if (olhoConfirmarSenha) {
        formLogin.style.display = 'flex';
        secaoCadastrar.style.display = 'flex';
        contornoSectionPrincipal.style.display = 'none';
    }
});

olhoSenha.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        olhoSenha.setAttribute('class', 'fa-solid fa-eye-slash olhoSenhaRiscado');
    } else {
        inputSenha.type = 'password';
        olhoSenha.setAttribute('class', 'fa-solid fa-eye olhoSenha');
    }
});

if (olhoConfirmarSenha) {
    olhoConfirmarSenha.addEventListener('click', () => {
        if (inputConfirmarSenha.type === 'password') {
            inputConfirmarSenha.type = 'text';
            olhoConfirmarSenha.setAttribute('class', 'fa-solid fa-eye-slash olhoSenhaRiscado');
        } else {
            inputConfirmarSenha.type = 'password';
            olhoConfirmarSenha.setAttribute('class', 'fa-solid fa-eye olhoSenha');
        }
    });
}

if (textoLembrarDeMim) {
    textoLembrarDeMim.addEventListener('click', () => checkboxLembrarDeMim.checked = !checkboxLembrarDeMim.checked);
}
