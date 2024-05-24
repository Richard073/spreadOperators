const pessoa1= {
    nome:"alex",
    idade:23,
    filho:{
        name:"aslan",
        age:1
    }
}
const pessoa2 = {
    city:"serra",
    numberHouse:18
}
const pessoaCompleta={...pessoa1,...pessoa2}
console.log(pessoaCompleta)