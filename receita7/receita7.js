let produtos = []

const carregarDiv = produtos => {
    const tbody = document.getElementById("produtosDiv")
    const itensHtml = produtos.map(({ title, price }) =>
        `
            <tr>
                <td>${title}</td>
                <td>$ ${price}</td>
            </tr>
        `)
    tbody.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarProdutos() {
    try {
        let res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
        produtos = await res.json()
        carregarDiv(produtos.products)
    } catch (err) {
        document.getElementById("produtosDiv").innerHTML = "Fudeu..."
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarProdutos())