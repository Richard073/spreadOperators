function gerarRelatorio(...dadosDepartamentos) {
    const vendas = [];
    for (const dadosDepartamento of dadosDepartamentos) {
      for (const venda of dadosDepartamento) { // Usei `venda` aqui
        const { valor, client, data } = venda;
        vendas.push({ valor, client, data });
      }
    }
    return vendas;
  }
const dadosVendas =[
    [
        {valor:500, client:"willldon", data:"25-11-2001"},
        {valor:700, client:"MDT", data:"05-06-2001"},
    ],
    [
        {valor:100, client:"ABC", data:"1-1-2001"},
        {valor:7000, client:"MDDST", data:"05-06-1900"},
    ]
]
const relatorio= gerarRelatorio(...dadosVendas)
console.log(relatorio)
