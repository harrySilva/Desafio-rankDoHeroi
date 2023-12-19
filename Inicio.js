let poteCafe = "Café maratá"
let poteAcucar = "Açucar Cristal"
let poteBolacha = "Bolacha Cream Cracker"

const mensagemDaVovo = "Na cozinha da vovo hoje tem: "

console.log (mensagemDaVovo + poteAcucar +", ", poteBolacha, "e " +poteCafe)
poteAcucar = "Açucar Mascavo"

console.groupEnd (mensagemDaVovo + poteBolacha, ", "+ poteCafe,"e " + poteAcucar)

