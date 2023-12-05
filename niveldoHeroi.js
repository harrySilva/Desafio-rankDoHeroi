let heroLvl = 1
let completeQuests = 0 //QUESTS COMPLETADAS PELO USUARIO
completeQuests ++

let heroClass = ["Warrior","Mage","Bard","Assassin"]
let xpPoints = heroClass[0] = 0 //PONTOS DE XP QUE A CLASSE ESCOLHIDA TEN

function questsRealizadas (){
    xpPoints += 10
    completeQuests ++

    console.log ("Parabéns, você completou uma quest! \n","XP + 10")
}

//SIMULAÇÃO CASO O HERÓI TENHA REALIZADO AS QUESTS E ACUMULADO 100 PONTOS DE XP
for (let i = 1; i <= 10; i++) {
    console.log ("Quest realizadas: " + completeQuests)
    questsRealizadas ()
}

if (xpPoints >= 100){
    heroLvl++
    xpPoints = 0
    console.log("PARABÉNS, VOCÊ SUBIU DE NÍVEL! \n","NOVO NÍVEL: " + heroLvl)
}

