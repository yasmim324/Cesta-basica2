const Usuario = require("../model/User")

module.exports = {
    async store(req, res){
        const usuario = await Usuario.create(req.body);
        return res.send(usuario);
    },
    async list(req, res){
        const usuario = await Usuario.find({});
        return res.json(usuario);
    },
    async index(req, res){
        const usuario = await Usuario.findOne({email: req.params.email});
        return res.json(usuario);
    },
    async update(req, res){
        const usuario = await Usuario.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.json(usuario);
    },
    async destroy(req, res){
        await Usuario.deletOne({_id: req.params.id});
        return res.json({message: "Excluido com sucesso!"});
    }
}