let vida = 100
let checkpoint = false
let inventario = []
let checkpoint1 = true

while (checkpoint == false) {
    

function startGame() {
    alert("Bem-vindo a 'O Caminho de Mohammad'.");
    alert("Você é Mohammad Amin Alsalami, um jovem atleta sírio que enfrenta desafios inimagináveis para seguir sua paixão pelo atletismo.");
    alert("Suas escolhas determinarão o destino de sua carreira e sua vida. Vamos começar!\n");
    primeiraescolha();
    
}

function primeiraescolha() {
    alert("Você está na Síria, e a guerra está devastando seu país. Mesmo assim, você continua treinando.");
    alert("O que você faz?");
    alert("1. Continuar treinando na Síria, apesar dos perigos.");
    alert("2. Buscar refúgio em outro país e tentar recomeçar.");

    let choice = Number(prompt("Escolha 1 ou 2:"));

    if (choice === 1) {
        treinarnasiria();
    } else if (choice === 2) {
        fugirdopais();
    } else {
        alert("Escolha inválida. Tente novamente.");
        primeiraescolha();
    }
}

function treinarnasiria() {
    alert("\nVocê decidiu continuar treinando na Síria. A situação é difícil, mas sua determinação é forte.");
    alert("Durante um treino, você se machuca gravemente.");
    vida -= 10
    alert("Sua vida atual: "+vida)
    alert("O que você faz?");
    alert("1. Continuar treinando apesar da lesão.");
    alert("2. Parar e buscar tratamento adequado.");

    let choice2= Number(prompt("Escolha 1 ou 2:"));

    if (choice2 === 1) {
        alert("\nVocê força demais seu corpo e a lesão piora. Você é forçado a parar por um longo tempo.");
        vida -= 10
        alert("Sua vida atual: "+vida)
        alert("Com o agravamento da guerra, você decide que é hora de fugir do país.");
        fugirdopais();

    } else if (choice2 === 2) {
        alert("\nVocê decide cuidar da sua saúde e buscar tratamento. Apesar das dificuldades, você se recupera.");
        inventario.push("perseverança")
        alert("Você ganhou " + inventario)
        alert("No entanto, a guerra se intensifica, e você percebe que precisa fugir para sobreviver.");
        fugirdopais();
    } else {
        alert("Escolha inválida. Tente novamente.");
        treinarnasiria();
    }
}

function fugirdopais() {
    alert("\nVocê decide fugir da Síria. Sua jornada é perigosa e cheia de desafios.");
    
    alert("Você chega à costa e deve decidir como atravessar o Mediterrâneo.");
    alert("O que você faz?");
    alert("1. Paga um contrabandista para garantir uma travessia mais segura.");
    alert("2. Entra em um bote lotado e arriscado.");

    let choice3 = Number(prompt("Escolha 1 ou 2:"));

    if (choice3 === 1) {
        alert("\nO contrabandista trai você, e você perde tudo. Sem escolha, você acaba em um bote lotado.");
        vida -= 10 
        alert("Sua vida atual: "+vida)
        mediterraneo();
    } else if (choice3 === 2) {
        mediterraneo();
    } else {
        alert("Escolha inválida. Tente novamente.");
        fugirdopais();
    }
}

function mediterraneo() {
    alert("\nA travessia é assustadora e cheia de perigos. Muitos não sobrevivem, mas você consegue chegar à Europa.");
    alert("Você está agora na Alemanha, mas sua vida está longe de estar estável.");
    alert("O que você faz?");
    alert("1. Procura refúgio em um abrigo e começa a estudar alemão.");
    alert("2. Busca um lugar para treinar e retomar sua carreira atlética.");

    let choice4 = Number(prompt("Escolha 1 ou 2:"));

    if (choice4 === 1) {
        aprenderalemao();
    } else if (choice4 === 2) {
        carreiraAtletica();
    } else {
        alert("Escolha inválida. Tente novamente.");
        mediterraneo();
    }
}

function aprenderalemao() {
    alert("\nVocê precisa aprender alemão")
    alert("\n oque você prefere?")
    alert("1. Aprender pela internet sem gastar dinheiro")
    alert("2. Pagar aula e estudar com videos e aplicativos")

    let choice5 =Number(prompt("Escolha 1 ou 2"))
 if (choice5 === 1) {
    alert("Você resolveu economizar dinheiro e acabou não conseguindo aprender nada")
    console.log(vida)  
    vida -= 10
    console.log (vida)
    alert("Sua vida atual: "+vida)
 }else if (choice5 === 2){
    alert("Você resolveu pagar por aulas e estudar com videos e aplicativos e isso facilitou e você conseguiu aprender uma nova lingua")
    inventario.push("poder das linguas ")
    alert("Você ganhou poder das linguas no inventario")
}
 ajusteNaAlemanha();
}



  function ajusteNaAlemanha() {
    alert("\nVocê se estabeleceu na Alemanha, mas a vida como refugiado não é fácil. Você enfrenta preconceito e dificuldades burocráticas.");
    alert("O que você faz?");
    alert("1. Entra em contato com organizações de apoio a refugiados para obter ajuda.");
    alert("2. Tenta lidar sozinho com os desafios, focando apenas no treinamento.");

    let choice7 = Number(prompt("Escolha 1 ou 2:"));

    if (choice7 === 1) {
        alert("Com a ajuda das organizações, você consegue apoio legal e social, o que melhora sua estabilidade.");
        inventario.push("apoio comunitário");
        alert("Você ganhou 'apoio comunitário' no inventário.");
        carreiraAtletica();
    } else if (choice7 === 2) {
        alert("Você enfrenta muitos desafios sozinho, o que atrasa sua preparação e afeta sua saúde.");
        vida -= 20;
        alert("Sua vida atual: " + vida);
        carreiraAtletica();
    } else {
        alert("Escolha inválida. Tente novamente.");
        ajusteNaAlemanha();
    }
}
function carreiraAtletica() {
    alert("\nVocê está focado em retomar sua carreira atlética, mas há muitos obstáculos.");
    alert("O que você faz?");
    alert("1. Concentra-se em treinar para pequenas competições locais para ganhar experiência.");
    alert("2. Arrisca-se a participar diretamente de competições maiores para acelerar seu progresso.");

    let choice8 = Number(prompt("Escolha 1 ou 2:"));

    if (choice8 === 1) {
        alert("Você se concentra em competições locais e ganha experiência, mas seu progresso é lento.");
        vida += 10;
        alert("Sua vida atual: " + vida);
        mundialAtletismo();
    } else if (choice8 === 2) {
        alert("Você arrisca em competições maiores, e embora enfrente derrotas, você aprende com a experiência.");
        inventario.push("determinação");
        alert("Você ganhou 'determinação' no inventário.");
        vida -= 10;
        alert("Sua vida atual: " + vida);
        mundialAtletismo();
    } else {
        alert("Escolha inválida. Tente novamente.");
        carreiraAtletica();
    }
}

function mundialAtletismo() {

    while(checkpoint1 == true){
        
        alert("\nVocê se qualifica para o Campeonato Mundial de Atletismo de 2023 em Budapeste.");
        alert("Você é o primeiro atleta da equipe de refugiados a competir em um evento técnico.");
        alert("Como você se prepara?");
        alert("1. Foca no treinamento físico intenso, ignorando outras áreas.");
        alert("2. Equilibra o treinamento físico com preparação mental e descanso.");

        let choice9 = Number(prompt("Escolha 1 ou 2:"));

        if (choice9 === 1) {
            alert("Você se foca demais no treinamento físico e sofre de estresse e lesões.");
            alert("Você fez uma escolha errada!")
            vida -= 20;
            alert("Sua vida atual: " + vida);      
            checkpoint1 = true
        } else if (choice9 === 2) {
            alert("Você se prepara de forma equilibrada e chega ao campeonato em ótima forma.");
            inventario.push("equilíbrio");
            alert("Você ganhou 'equilíbrio' no inventário.");
            vida += 10;
            alert("Sua vida atual: " + vida);
            checkpoint1 = false
        } else {
            alert("Escolha inválida. Tente novamente.");
            mundialAtletismo();
        }
    }
    parisOlimpiadas();
}


function parisOlimpiadas() {
    alert("\nVocê finalmente chegou às Olimpíadas de Paris 2024!");
    alert("Sua jornada até aqui foi difícil, mas agora você está prestes a competir com os melhores do mundo.");
    alert("Como você aborda a competição?");
    alert("1. Mantém a calma e foca na execução perfeita.");
    alert("2. Arrisca tudo com uma abordagem agressiva para tentar o ouro.");

    let choice10 = Number(prompt("Escolha 1 ou 2:"));

    if (choice10 === 1) {
        if (vida >= 50) {
            alert("Você mantém a calma e executa sua melhor performance. Você alcança um excelente resultado nas Olimpíadas.");
            alert("Parabéns! Você completou a jornada de Mohammad com sucesso e ganhou reconhecimento internacional.");
        } else {
            alert("Sua saúde estava comprometida, e apesar de uma boa performance, você não conseguiu alcançar seu máximo.");
            alert("Tente novamente para melhorar sua saúde antes das Olimpíadas.");
        }
    } else if (choice10 === 2) {
        alert("Você arrisca tudo, mas a abordagem agressiva o leva a cometer erros. Embora você tenha dado seu melhor, não alcança o pódio.");
        alert("Tente novamente para equilibrar sua abordagem.");
    } else {
        alert("Escolha inválida. Tente novamente.");
        parisOlimpiadas();
    }

   alert("\nMuito obrigada por jogar!!")
   alert("Seu inventario ficou assim:"+inventario)

     alert("\nDeseja jogar novamente?");
    let choice11 = prompt("Digite 'sim' para recomeçar ou qualquer outra coisa para sair:");

    if (choice11.toLowerCase() === "sim") {
        startGame();
    } else {
        alert("Obrigado por jogar!");
    }
}
    checkpoint = true
    startGame();
}