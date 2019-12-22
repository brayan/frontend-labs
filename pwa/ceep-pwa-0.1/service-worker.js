const version = 3

const files = [
"/",
"css/estilos.css",
"css/opcoesDaPagina.css",
"css/opcoesDoCartao.css",
"css/cabecalho.css",
"css/login.css",
"css/loginForm.css",
"css/loginStatus.css",
"css/cartao.css",
"css/novoCartao.css",
"css/mural.css",
"js/lib/jquery.js",
"js/lib/eventemitter2.js",
"js/lib/KeyBoardNavigation.js",
"js/tags/Tags.js",
"js/cabecalho/mudaLayout.js",
"js/cabecalho/busca.js",
"js/filtro/Filtro.js",
"js/login/LoginUsuario_render.js",
"js/login/LoginUsuario.js",
"js/tipos/TiposCartao.js",
"js/cartao/render/Cartao_renderHelpers.js",
"js/cartao/render/CartaoOpcoes_render.js",
"js/cartao/render/CartaoConteudo_render.js",
"js/cartao/render/Cartao_render.js",
"js/cartao/Cartao.js",
"js/mural/render/Mural_render.js",
"js/mural/Mural.js",
"js/cabecalho/novoCartao.js",
"img/bin2.svg",
"img/edit.svg"
]

self.addEventListener("install", () => {
    
})

self.addEventListener("activate", () => {
    caches.open("ceep-files-" + version).then(cache => {
        cache.addAll(files).then(() => {
            caches.delete("ceep-files-" + (version - 1))
        })
    })
})

self.addEventListener("fetch", loadFromCacheStorage)

function loadFromCacheStorage(event) {
    console.log("Tried to load something from fetch");

    const request = event.request

    const response = caches.match(request)
        .then(cacheResponse => {
            let response = cacheResponse ? cacheResponse : fetch(request)
            return response
        })

    event.respondWith(response)
}
