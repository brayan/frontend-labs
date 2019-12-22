let logado = JSON.parse(localStorage.getItem("logado"))
let usuario = localStorage.getItem("nomeUsuario")
let loginCallback = new EventEmitter2()

LoginUsuario_render({
    logado: logado,
    usuario: localStorage.getItem("nomeUsuario"),
    onLogin: (nomeUsuario) => {
        logado = true
        localStorage.setItem("logado", true)
        localStorage.setItem("nomeUsuario", nomeUsuario)
        usuario = nomeUsuario
        loginCallback.emit("login")
    },
    onLogout: () => {
        logado = false
        localStorage.setItem("logado", false)
        localStorage.removeItem("nomeUsuario")
        loginCallback.emit("logout")
    }
    
})