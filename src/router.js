const express = require("express")
const routes = express.Router()
const UsuarioControle = require("../src/Controllers/UserController")

routes.post("/usuario", UsuarioControle.store)
routes.get("/usuario",UsuarioControle.list)
routes.get("/usuario/:email",UsuarioControle.index)
routes.put("/Usuario/:id", UsuarioControle.update)
routes.delete("Usuario/:id", UsuarioControle.destroy)

module.exports = routes