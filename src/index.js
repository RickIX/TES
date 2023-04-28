"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_model_1 = require("./entidades/produto.model");
const app = (0, express_1.default)();
app.use(express_1.default.json());
let produtos = [];
//Listar todos os produtos
app.get("/", function (request, response) {
    return response.status(200).json({ message: "Ok", dados: produtos });
});
//Buscar produto por...
app.get("/:categoria/:produto", (request, response) => {
    const { produto, categoria } = request.params;
    return response.status(200).json({ categoria, produto });
});
//Cadastrar produto
app.post("/", (request, response) => {
    let produto = new produto_model_1.Produto();
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;
    produtos.push(produto);
    return response.status(201).json({ message: "Produto cadastrado!", dados: produto });
});
//Implementar as funcionalidades no vetor de busca, alteração e remoção
//Implementar o banco na aplicação (Prisma)
app.listen(3000, function () {
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});
