function gerarNumero(){
    const randomNumber= Math.floor(Math.random()* 20)
    let numberList
   
   if(randomNumber % 2 == 0){
     numberList= [randomNumber]
     console.log(`The number ${randomNumber}`)
   }else{
     numberList=[randomNumber]
      console.log(`The number ${randomNumber}`)
   }
     }
   gerarNumero()    