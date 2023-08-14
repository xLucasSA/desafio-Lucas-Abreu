import  produtos  from "./produtos-da-lanchonete.js"
import { 
    validarFormaPagamento,
    validarPedidoVazio,
    validarQtdItens,
    validarCodigoInvalido,
    validarItemExtraSemPrincipal
} from "./validacao-de-dados.js"



class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        //transforma os itens do pedido em objetos com quantidade de itens em formato de número
        const itensSeparados = itens.map( (item) => {
            const arr = item.split(",")
            return { cod: arr[0], qtd: Number(arr[1])}
        })
        
        //cria um array com os id's dos itens listados no pedido
        const idDosItensPedidos = []
        itensSeparados.map( item => {
            idDosItensPedidos.push((produtos.findIndex( produto => produto.cod === item.cod))+1)
        })

        //testes de validação de das entradas
        if (validarFormaPagamento(metodoDePagamento) === "Erro") {
            return "Forma de pagamento inválida!"
        }

        if (validarPedidoVazio(itens) === "Erro") {
            return "Não há itens no carrinho de compra!"
        }    

        if (validarQtdItens(itensSeparados) === "Erro") {
            return "Quantidade inválida!"
        }

        if (validarCodigoInvalido (itensSeparados) === "Erro") {
            return "Item inválido!"
        }
        
        if (validarItemExtraSemPrincipal (idDosItensPedidos) === "Erro") {
            return "Item extra não pode ser pedido sem o principal"
        }

        //cálculo do preco total final
        let precosTotal = itensSeparados.reduce( (acumulador, atual) => {
            return acumulador += atual.qtd * atual.preco
        },0)

        switch (metodoDePagamento) {
            case "credito":
                precosTotal = precosTotal*1.03
                break

            case "dinheiro":
                precosTotal = precosTotal*0.95
                break
            
            default:
                break
        }

        return `R$ ${(precosTotal/100).toFixed(2).replace(".", ",")}`
    }

}

export { CaixaDaLanchonete };
