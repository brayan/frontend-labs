const Mural = (function (_render, Filtro) {
    "use strict"
    let cartoes = loadUserCards()

    cartoes.forEach(cartao => preparaCartao(cartao));

    const render = () => _render({ cartoes: cartoes, filtro: Filtro.tagsETexto });
    render()

    Filtro.on("filtrado", render)

    function loadUserCards() {
        let cartoesLocal = JSON.parse(localStorage.getItem(usuario))
        if (cartoesLocal) {
            return cartoesLocal.map(cartaoData => {
                return new Cartao(cartaoData.conteudo, cartaoData.tipo)
            })
        } else {
            return []
        }
    }

    function preparaCartao(cartao) {
        const urlsImagens = Cartao.pegaImagens(cartao)
        
        urlsImagens.forEach(url => {
            fetch(url).then(response => {
                caches.open("ceep-imagens").then(cache => {
                    cache.put(url, response)
                })
            })
        })

        cartao.on("mudanca.**", saveCards)
        cartao.on("remocao", () => {
            cartoes = cartoes.slice(0)
            cartoes.splice(cartoes.indexOf(cartao), 1)
            saveCards()
            render()
        })
    }

    function saveCards() {
        localStorage.setItem(usuario,
            JSON.stringify(cartoes.map(cartao => ({ conteudo: cartao.conteudo, tipo: cartao.tipo })))
        )
    }

    loginCallback.on("login", () => {
        cartoes = loadUserCards()
        render()
    })

    loginCallback.on("logout", () => {
        cartoes = []
        render()
    })

    function adiciona(cartao) {
        if (logado) {
            cartoes.push(cartao)
            saveCards()
            preparaCartao(cartao)
            render()
            return true

        } else {
            alert("Você não está logado!")
        }
    }

    return Object.seal({
        adiciona
    })

})(Mural_render, Filtro)
