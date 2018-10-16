//criacao de registros

//é melhor fazer via variável
var dado = {
    "nome": "Jão",
    "_id": 1,
    "datacad": new Date()
}

db.clientes.insert(dado);

//insert de vários documentos
db.clientes.insert([{
    "nome": "Zé",
    "_id": 2,
    "datacad": new Date()
},
    {
        "nome": "Maria",
        "_id": 3,
        "datacad": new Date()
    }])

//leitura
db.clientes.find(); //traz todos
db.clientes.count(); //contagem de registros
db.clientes.findOne(); //traz 1 registro

//update
//melhor forma é via find/update
var c = db.clientes.findOne({_id=1}) //traz o jão
c.nome = "João"
db.clientes.update({ _id: c._id }, c)

//delete 
db.clientes.remove({_id: {$gt:3}}) //remove com _id>3


