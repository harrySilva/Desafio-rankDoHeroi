//for (Estrutura)
for (let contador = 0; contador <=4; contador++) // ++ = variavel mais 1
{
    console.log (contador)
}
console.log ("Teste 1")

//while (Estrutura)
contador1 = 0
while (contador1 >= 3)
{
    console.log(contador1)
    contador1++
     /*NÃO ESQUEÇA DE COLOCAR A VARIAVEL JUNTAMENTE DO SINAL DE "++"
        SE NÃO, O LOOP VAI FICAR INFINITO, E NA HORA DO TESTE VAI TRAVAR
        A PORRA TODA!!                
        (PARA INTERROMPER UM TESTE, USE SHIFT + F5)*/ 
}

//do-while (Estrutura) *(O método "do-while" ele executa primeiro pra depois testar)
let contador3 =  0
do {
    console.log("teste")
    contador3++
} while (contador3 >= 5);