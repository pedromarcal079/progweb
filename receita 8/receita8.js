let cervejas = []

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

async function carregarCervejas() {
    try {
        let res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        cervejas = await res.json()
        carregarDiv(cervejas.products)
    } catch (err) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
    }
}

function carregarCervejas2() {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price').then(
        res => res.json()
    ).then(
        json => carregarDiv(json.products)
    ).catch(
        err => document.getElementById("cervejasDiv").innerHTML = `Fudeu... ${err}`
    )
    document.getElementById("cervejasDiv").innerHTML = `Fazendo requisição`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas2())