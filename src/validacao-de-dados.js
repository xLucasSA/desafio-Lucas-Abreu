import  produtos  from "./produtos-da-lanchonete.js"
const formasPagamento = ["debito", "credito", "dinheiro"]

function validarFormaPagamento (metodoDePagamento){
    //verifica se o método de pagamento está correto
    if (!formasPagamento.find( elemento => elemento === metodoDePagamento )){
        return "Erro"
    }
}

function validarPedidoVazio (itens){
    //verifica se há itens no pedido
    if (!itens[0]){
        return "Erro"
    }
}

function validarQtdItens (itensSeparados){
    //verifica se há algum item com quantidade igual ou inferior a zero
    if (itensSeparados.find( item => item.qtd <= 0 )){
        return "Erro"
}
}

function validarCodigoInvalido (itensSeparados) {
    //verifica se há algum código inválido no pedido e adiciona o valor dos itens pedidos
    const todosItensCorretos = itensSeparados.reduce( (acul,atual) => {
        for (const produto of produtos) {
            if (produto.cod === atual.cod) {
                acul++
                atual.preco = produto.preco
            }
        }
        return acul
    }, 0)
    if(itensSeparados.length !== todosItensCorretos){
        return "Erro"
    }
}

function validarItemExtraSemPrincipal (idDosItensPedidos){
    //verifica se há pedido de extras sem pedido principal
    if (idDosItensPedidos.includes(2)){
        if(!idDosItensPedidos.includes(1)){
            return "Erro"
        }
    }
    if (idDosItensPedidos.includes(5)){
        if(!idDosItensPedidos.includes(4)){
            return "Erro"
        }
    }
}

export {
    validarFormaPagamento,
    validarPedidoVazio,
    validarQtdItens,
    validarCodigoInvalido,
    validarItemExtraSemPrincipal
}