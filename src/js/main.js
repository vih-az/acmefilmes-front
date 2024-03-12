import { getFilmes, getFilme, postFilme} from "./filmes.js"

console.table(await getFilme(1))
function criarCard(filme) {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const duracao = document.createElement('button')
    title.textContent = filme.nome
    duracao.textContent = filme.sinopse
    card.append(title, duracao)
    return card
}

async function preencherContainer() {
    const container = document.querySelector('body')
    const filmes = await getFilmes()
    filmes.forEach(function (filme) {
        const card = criarCard(filme)
        container.appendChild(card)
    })
}
// const filme = {
//     "nome": "Testando o POST - 3",
//     "sinopse": "Elementos é um filme de animação que se passa em uma sociedade extraordinária chamada Cidade Elemento, na qual os quatro elementos da natureza - ar, terra, fogo e ar - vivem em completa harmonia. Na história, somos apresentados à Faísca (fogo, dublada por Leah Lewis), uma mulher espirituosa na faixa dos vinte anos, com um grande senso de humor e apaixonada pela família, mas que tem um temperamento um pouco quente; Gota (água, dublado por Mamoudou Athie) é um jovem empático, observador e extrovertido, que não tem medo de demonstrar suas emoções - na verdade, é até um pouco difícil controlá-las;",
//     "duracao": "01:48:00",
//     "data_lancamento": "2023-06-22",
//     "data_relancamento": null,
//     "foto_capa": "https://br.web.img2.acsta.net/c_310_420/pictures/22/11/17/20/58/0132283.jpg",
//     "valor_unitario": 50
// }
// await postFilme(filme)
// preencherContainer()