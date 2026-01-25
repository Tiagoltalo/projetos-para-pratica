let result = document.querySelector("p#result");
let btnSake = document.querySelector("button#btnSake");
let btnDeposit = document.querySelector("button#btnDeposit");

// Closure principal que mantém o saldo privado e salvo
function closure() {
    let sale = 0;

    
    function sake() {
        let value = Number.parseFloat(document.getElementById("value").value);

        if (value > sale) {
            result.innerHTML = "Saldo insuficiente!";

            setTimeout(() => result.innerHTML = `Saldo: R$ ${sale.toFixed(2)}`, 5000);
        } else {
            sale -= value;
            result.innerHTML = `Saque realizado com sucesso! Saldo atual: R$ ${sale.toFixed(2)}`;
            setTimeout(() => result.innerHTML = `Saldo: R$ ${sale.toFixed(2)}`, 5000);
        }
    }

    function deposit() {
        let value = Number.parseFloat(document.getElementById("value").value);

        sale += value;
        result.innerHTML = `Depósito realizado com sucesso! Saldo atual: R$ ${sale.toFixed(2)}`;
        setTimeout(() => result.innerHTML = `Saldo: R$ ${sale.toFixed(2)}`, 5000);
    }

    return {
        sake,
        deposit
    }
}

const atm = closure();

// Eventos dos botões
btnSake.addEventListener("click", atm.sake);
btnDeposit.addEventListener("click", atm.deposit);