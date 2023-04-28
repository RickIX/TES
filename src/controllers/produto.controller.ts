import { Request, Response } from 'express';
import { Produto } from '../models/produto.model';

let produtos : Produto[] = [];

export class ProdutoController{

    cadastrar(request: Request, response: Response) : Response{
    let produto : Produto = new Produto();
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;

    produtos.push(produto);

    return response
        .status(201)
        .json({ message : "Produto cadastrado!", dados : produto });
    }
    
    listar(request : Request, response : Response) : Response{
        return response.status(200).json({ message : "macaco", dados : produtos});
    };

    buscar(request : Request, response : Response) : Response{
        const { nome } = request.params;
        
    for(let produtoCadastrado of produtos){
    if(produtoCadastrado.nome == nome){
        return response.status(200).json({ message: "Ok", dados : produtoCadastrado });
    }
    }

        return response.status(404).json({ message: "Produto não encontrado"});
    };
}