import { Colaboradores } from "../Colaboradores/colaborador.model";

export interface Clientes {
    
    id: string;
        
    nome: string,
    email: string,
    nascimento: Date,
    profissao: string,
    calcado: string, 
    logradouro: string,
    numero: string,
    complemento: string,
    cep: string,
    bairro: string,
    cidade: string,
    telefone: string,
    celular: string,
    contato: string,
    uf: string,
    colaboradores: Colaboradores[] | string[],
}