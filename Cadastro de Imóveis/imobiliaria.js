const imoveis = []
let opcao = " "

do {
  opcao = prompt(
    "Bem-vindo(a) ao cadastro de Imóveis!\n" + 
    "Total de Imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (opcao) {
   case "1":
    const imovel = {}

    imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
    imovel.quartos = prompt("Quantos quartos possui o imóvel?")
    imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
    imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
   
   const confirmacao = confirm(
    "Salva este imóvel?\n"+
    "\nProprietario: " + imovel.proprietario + 
    "\nQuartos: "+ imovel.quartos +
    "\nPossui garagem? " + imovel.garagem
 
   )

   if (confirmacao) {
    imoveis.push(imovel)
    alert("Imóvel salvo com sucesso!")
   } else {
     alert("Voltando ao menu.")
   }
   
   break
   case "2":
    for (let i = 0; i < imoveis.length; i++) {
        alert(
        "Imóvel " + (i + i) + 
        "\nProprietário:" + imoveis[i].proprietario +
        "\nQuartos: " + imoveis[i].quartos +
        "\nBanheiros: "  + imoveis[i].garagem
        )
    }
    break
   case "3":
    alert("Encerrando...")
    break
    default:
        alert("Opeção inválida")
  }
} while (opcao != "3")