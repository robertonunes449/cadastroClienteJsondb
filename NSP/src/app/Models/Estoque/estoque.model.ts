export interface Estoque {
    id: string;        
    nome: string,
    categoria: string,
    tipo: string,
    validade: Date,
    quantidade: number,
    preco: number
    codigodebarra:number;
}