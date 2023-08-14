const produtos = [
    {   
        id: 1,
        cod: "cafe",
        descricao: "Café",
        preco: 300,
        id_extra: null,
    },
    {
        id: 2,
        cod: "chantily",
        descricao: "Chantily (extra do Café)",
        preco: 150,
        id_extra: 1,
    },
    {
        id: 3,
        cod: "suco",
        descricao: "Suco Natural",
        preco: 620,
        id_extra: null,
    },
    {
        id: 4,
        cod: "sanduiche",
        descricao: "Sanduíche",
        preco: 650,
        id_extra: null,
    },
    {
        id: 5,
        cod: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        preco: 200,
        id_extra: 4,
    },
    {
        id: 6,
        cod: "salgado",
        descricao: "Salgado",
        preco: 725,
        id_extra: null,
    },
    {
        id: 7,
        cod: "combo1",
        descricao: "1 Suco e 1 Sanduíche",
        preco: 950,
        id_extra: null,
    },
    {
        id: 8,
        cod: "combo2",
        descricao: "1 Café e 1 Sanduíche",
        preco: 750,
        id_extra: null,
    },
]

export default produtos
