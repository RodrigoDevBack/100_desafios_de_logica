function extrairDomain() {
    const resultado = document.getElementById('resultado');
    const email = document.getElementById('email').value;
    let domain = '';
    
    if (!(email.trim().split(' ').includes('@'))){
        resultado.textContent = 'Email não possui domínio';    
        return;
    }

    domain = email.trim().split('@')[1];
    resultado.textContent = domain

}