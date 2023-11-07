import express from "express"

const server = express();
server.use(express.json());

class Filmes {
    constructor(id, nome, lancamento){
        this.id = id;
        this.nome = nome;
        this.lancamento = lancamento;
    }
}

const todosFilmes = [];

server.post("/", (req, res) => {
    const id = todosFilmes.length + 1;
    const nome = req.body.nome;
    const lancamento = req.body.lancamento;
    const filme = new Filmes (id, nome, lancamento);
    todosFilmes.push(filme);

    res.json(todosFilmes);
})

server.get("/", (req, res) => {
    res.json(todosFilmes);
});

server.put("/:id", (req, res) => {
    const filme = todosFilmes.find(e => e.id == req.params.id);
    filme.nome = req.body.nome;
    filme.lancamento = req.body.lancamento;
    res.json(filme);
});

server.delete("/:id", (req, res) => {
    const filme = todosFilmes.find(e => e.id == req.params.id);
    const index = todosFilmes.indexOf(filme);
    const deleta = todosFilmes.splice(index, 1);

    res.json(deleta);
});

server.listen(3000, () => {
    console.log("Escutando!");
});
