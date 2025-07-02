const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const palavrasPorLetra = {
  A: ['Abacate', 'Amor', 'Amigo', 'Árvore', 'Avião', 'Anel', 'Animado', 'Água', 'Azul', 'Aventura'],
  B: ['Bola', 'Bicho', 'Bebê', 'Banana', 'Beleza', 'Barco', 'Bicicleta', 'Borracha', 'Brincar', 'Biblioteca'],
  C: ['Cachorro', 'Casa', 'Céu', 'Criança', 'Carro', 'Coração', 'Cenoura', 'Computador', 'Cadeira', 'Chocolate'],
  D: ['Dado', 'Dente', 'Dia', 'Doce', 'Dólar', 'Dança', 'Desenho', 'Documento', 'Dedos', 'Dinheiro'],
    E: ['Elefante', 'Escola', 'Estrela', 'Escada', 'Esporte', 'Engenheiro', 'Eletrodoméstico', 'Enigma', 'Esperança', 'Exercício'],
    F: ['Futebol', 'Feliz', 'Flor', 'Fruta', 'Fogo', 'Família', 'Festa', 'Fada', 'Ferro', 'Fantasia'],
    G: ['Gato', 'Garagem', 'Guitarra', 'Geladeira', 'Guerra', 'Gelo', 'Grama', 'Gema', 'Golfinho', 'Globo'],
    H: ['Hotel', 'Habilidade', 'Horta', 'Herói', 'História', 'Harmonia', 'Hino', 'Hipopótamo', 'Holograma', 'Hospedagem'],
    I: ['Igreja', 'Ilha', 'Inverno', 'Inseto', 'Inteligência', 'Instrumento', 'Inspiração', 'Imagem', 'Ideia', 'Iluminação'],
    J: ['Jacaré', 'Jardim', 'Janela', 'Jogador', 'Jogo', 'Joia', 'Jornal', 'Jantar', 'Justiça', 'Jubileu'],
    K: ['Kanguru', 'Kilo', 'Kilograma', 'Karaokê', 'Ketchup', 'Kiwi', 'Kombucha', 'Koala', 'Kryptonita', 'Kara'],
    L: ['Leão', 'Laranja', 'Livro', 'Luz', 'Lago', 'Lápis', 'Liberdade', 'Lembrança', 'Língua', 'Laboratório'],
    M: ['Macaco', 'Mesa', 'Música', 'Montanha', 'Mar', 'Mãe', 'Mochila', 'Mistério', 'Mestre', 'Magia'],
    N: ['Navio', 'Natureza', 'Noite', 'Nuvem', 'Ninho', 'Nobreza', 'Números', 'Nectarina', 'Novela', 'Nave'],
    O: ['Ovelha', 'Olho', 'Oceano', 'Orquestra', 'Ouro', 'Oficina', 'Oásis', 'Ordem', 'Origem', 'Obra'],
    P: ['Pato', 'Praia', 'Papel', 'Pintura', 'Pássaro', 'Palavra', 'Poder', 'Prazer', 'Planeta', 'Poesia'],
    Q: ['Quati', 'Queijo', 'Quarto', 'Química', 'Queda', 'Questão', 'Quintal', 'Quimono', 'Quasar', 'Quixote'],
    R: ['Rato', 'Rio', 'Rosa', 'Relógio', 'Rei', 'Rainha', 'Roda', 'Ritmo', 'Robô', 'Revolução'],
    S: ['Sapo', 'Sol', 'Sombra', 'Sorriso', 'Semente', 'Sabor', 'Segredo', 'Saúde', 'Sonho', 'Super-herói'],
    T: ['Tigre', 'Torre', 'Trabalho', 'Tempo', 'Terra', 'Tesouro', 'Tinta', 'Trilha', 'Técnica', 'Teatro'],
    U: ['Urso', 'Universo', 'Uva', 'Unidade', 'Utilidade', 'Utopia', 'Urgência', 'Uniforme', 'Ultrassom', 'Urbano'],
    V: ['Vaca', 'Vento', 'Vermelho', 'Viagem', 'Vida', 'Vitória', 'Vela', 'Vinho', 'Visão', 'Vibrante'],
    W: ['Wolverine', 'Web', 'Windsurf', 'Workshop'],
    X: ['Xadrez', 'Xícara', 'Xilofone', 'Xarope', 'Xampu', 'Xerife', 'Xenofobia', 'Xerox', 'Xingamento', 'Xilogravura'],
    Y: ['Yeti', 'Yoga', 'Yin-yang', 'Yogurte', 'Yacht', 'Yarn', 'Yellowstone', 'Yodel', 'Yin', 'Yuca'],
    Z: ['Zebra', 'Zangado', 'Zíper', 'Zoológico', 'Zumbi', 'Zona', 'Zelo', 'Zen', 'Zodíaco', 'Zangão']

};

const frasesPorLetra = {
  A: [
    'A Ana adora abacate.',
    'Aviões azuis atravessam o céu.',
    'Árvores altas abrigam aves.',
    'A amiga Alice ama arte.',
    'A água ajuda a alimentar.'
  ],
  B: [
    'Bruna brinca de bola.',
    'Bebês babam bastante.',
    'Bichos barulhentos bagunçam.',
    'Brinquedos bonitos brilham.',
    'Borboletas belas bailam.'
  ],
  C: [
    'Carlos come cenoura.',
    'Cachorros correm com carinho.',
    'Céu claro com nuvens brancas.',
    'Crianças criam castelos de areia.',
    'Cores coloridas encantam crianças.'
  ],
    D: [
        'Dona Dora dança de dia.',
        'Dentes de dragão são perigosos.',
        'Doce de damasco é delicioso.',
        'Dólares dançam no bolso.',
        'Desenhos divertidos distraem.'
    ],
    E: [
        'Elefantes enormes encantam crianças.',
        'Escolas ensinam ética e educação.',
        'Estrelas brilhantes iluminam a noite.',
        'Escadas estreitas levam ao topo.',
        'Esportes energizam o corpo.'
    ],
    F: [
        'Futebol é divertido para todos.',
        'Flores frescas enfeitam o jardim.',
        'Frutas frescas são saudáveis.',
        'Famílias felizes fazem piqueniques.',
        'Fadas fantásticas vivem em florestas.'
    ],
    G: [
        'Gatos grandes gostam de brincar.',
        'Garagens guardam coisas valiosas.',
        'Guitarras grandes fazem música linda.',
        'Geladeiras guardam alimentos frescos.',
        'Golfinhos graciosos nadam no mar.'
    ],
    H: [
        'Hospitais ajudam pessoas doentes.',
        'Heróis ajudam os necessitados.',
        'Hortas ajudam a produzir alimentos.',
        'Histórias de heróis inspiram crianças.',
        'Harmonia é importante para a paz.'
    ],
    I: [
        'Igrejas iluminam a cidade.',
        'Ilhas isoladas são misteriosas.',
        'Insetos importantes polinizam flores.',
        'Inteligência é fundamental para o sucesso.',
        'Instrumentos musicais encantam os ouvidos.'
    ],
    J: [
        'Jacarés jogam na água.',
        'Jardins são lugares tranquilos.',
        'Jogadores jogam futebol com alegria.',
        'Joias brilhantes encantam os olhos.',
        'Jornais informam sobre o mundo.'
    ],
    K: [ 
    'Kangurus saltam com graça.',
    'Kilos de frutas frescas são saudáveis.',
    'Karaokês são divertidos em festas.',
    'Ketchup é um condimento popular.',
    'Kiwi é uma fruta deliciosa.'
    ],
    L: [
        'Leões são os reis da selva.',
        'Laranjas são frutas cítricas.',
        'Livros são fontes de conhecimento.',
        'Luzes iluminam a cidade à noite.',
        'Lagos são lugares tranquilos para relaxar.'
    ],
    M: [
        'Macacos fazem travessuras nas árvores.',
        'Mesas são úteis para refeições.',
        'Músicas animadas fazem as pessoas dançarem.',
        'Montanhas majestosas são vistas de longe.',
        'Maravilhas naturais encantam os viajantes.'
    ],
    N: [
        'Navios navegam pelos mares.',
        'Natureza é bela e diversificada.',
        'Noites estreladas são mágicas.',
        'Nuvens brancas flutuam no céu.',
        'Ninhos de pássaros são feitos com carinho.'
    ],
    O: [
        'Ovelhas pastam tranquilamente.',
        'Olhos observam o mundo ao redor.',
        'Oceano é vasto e misterioso.',
        'Orquestras tocam músicas clássicas.',
        'Ouro é um metal precioso.'
    ],
    P: [
        'Patos nadam no lago.',
        'Praias são lugares de descanso.',
        'Papel é usado para escrever histórias.',
        'Pinturas coloridas adornam as paredes.',
        'Pássaros cantam ao amanhecer.'
    ],
    Q: [
        'Quatis são animais curiosos.',
        'Queijos variados são deliciosos.',
        'Quartos confortáveis são relaxantes.',
        'Química é uma ciência fascinante.',
        'Quedas d\'água são vistas deslumbrantes.'
    ],
    R: [
        'Ratos são pequenos roedores.',
        'Rios correm pelas florestas.',
        'Rosas vermelhas são românticas.',
        'Relógios marcam o tempo.',
        'Reis governam seus reinos.'
    ],
    S: [
        'Sapos pulam na lagoa.',
        'Sol brilha no céu azul.',
        'Sombra de árvores é refrescante.',
        'Sorrisos iluminam o rosto.',
        'Sementes crescem e dão frutos.'
    ],
    T: [
        'Tigres são animais majestosos.',
        'Torres altas tocam o céu.',
        'Trabalho duro traz recompensas.',
        'Tempo passa rapidamente.',
        'Terra fértil produz alimentos.'
    ],
    U: [
        'Ursos são animais fortes.',
        'Universo é vasto e misterioso.',
        'Uvas são frutas doces.',
        'Unidades de medida são importantes.',
        'Utilidades domésticas facilitam a vida.'
    ],
    V: [
        'Vacas pastam no campo.',
        'Vento sopra suavemente.',
        'Vermelho é uma cor vibrante.',
        'Viagens trazem novas experiências.',
        'Vitórias são celebradas com alegria.'
    ],
    W: [
        'Wolverine é um personagem famoso.',
        'Webs de aranha são fascinantes.',
        'Windsurf é um esporte aquático emocionante.',
        'Workshops ensinam novas habilidades.'
    ],
    X: [
        'Xadrez é um jogo estratégico.',
        'Xícaras de chá são reconfortantes.',
        'Xilofones produzem sons melodiosos.',
        'Xarope é usado em receitas doces.',
        'Xampu limpa os cabelos.'
    ],
    Y: [
        'Yeti é uma criatura lendária.',
        'Yoga é uma prática relaxante.',
        'Yin-yang representa equilíbrio.',
        'Yogurte é um lanche saudável.',
        'Yacht é um barco luxuoso.'
    ],
    Z: [
        'Zebras têm listras pretas e brancas.',
        'Zangados ficam irritados facilmente.',
        'Zíperes fecham roupas e bolsas.',
        'Zoológicos abrigam animais de várias espécies.',
        'Zumbis são criaturas de ficção.'
    ]

};

const textosPorLetra = {
  A: 'A Ana acordou animada. Ela adora ajudar os amigos e aprender algo novo. A aula de arte é a sua atividade favorita.',
  B: 'Bruno brincava no bosque com seu boné azul. Ele buscava borboletas bonitas para fotografar com seu brinquedo novo.',
    C: 'Carlos comeu cenoura com seu cachorro. Eles correram pelo campo, explorando cada canto e fazendo novas descobertas.',
    D: 'Diana desenhou um dragão no diário. Ela dedicou horas para detalhar cada escama e dente, criando uma obra de arte impressionante.',
    E: 'Eduardo estudou eletricidade e energia. Ele entendeu como os elétrons se movem e como a eletricidade é gerada, fascinando-se com o mundo da física.',
    F: 'Fernanda foi à feira comprar frutas frescas. Ela encontrou maçãs, bananas e laranjas, todas deliciosas e prontas para serem saboreadas.',
    G: 'Gabriel gostava de jogar guitarra. Ele praticava diariamente, sonhando em se tornar um grande músico e tocar em grandes palcos.',
    H: 'Helena tinha um hobby de jardinagem. Ela plantava flores e cuidava de sua horta, colhendo legumes frescos para sua família.',
    I: 'Isabel inventou um novo jogo. Ela imaginou regras divertidas e convidou seus amigos para jogar, criando momentos de alegria e risadas.',
    J: 'João jogou futebol com seus amigos. Eles se divertiram correndo atrás da bola, fazendo gols e celebrando cada jogada.',
    K: 'Karla conheceu um kanguru no zoológico. Ela ficou encantada com a forma como ele pulava e brincava, parecendo tão feliz.',
    L: 'Lucas leu um livro sobre lendas antigas. Ele se perdeu nas histórias de heróis e aventuras, imaginando-se vivendo aquelas experiências.',
    M: 'Mariana montou um quebra-cabeça de mil peças. Ela passou horas encaixando cada parte, sentindo a satisfação de completar a imagem.',
    N: 'Nicolas navegou pelo rio com seu barco. Ele admirou a natureza ao redor, observando pássaros e peixes enquanto remava tranquilamente.',
    O: 'Olívia organizou uma festa de aniversário. Ela convidou seus amigos e preparou uma decoração colorida, cheia de balões e doces.',
    P: 'Pedro pintou um quadro com paisagens. Ele usou cores vibrantes  e pinceladas suaves, criando uma obra que capturava a beleza da natureza.',
    Q: 'Quintino quis aprender a tocar violão. Ele começou a praticar acordes simples, sonhando em tocar suas músicas favoritas.',
    R: 'Rafaela resolveu escrever um romance. Ela criou personagens cativantes e tramas emocionantes, mergulhando em um mundo de imaginação.',
    S: 'Sofia sonhou com viagens ao redor do mundo. Ela planejou roteiros, pesquisou culturas e sonhou em conhecer lugares exóticos.',
    T: 'Tiago treinou para a maratona. Ele correu diariamente, fortalecendo seu corpo e mente, determinado a completar a corrida.',
    U: 'Ulisses usou um uniforme novo para a competição. Ele se sentiu confiante e preparado, pronto para dar o seu melhor.',
    V: 'Valentina viajou para uma vila encantadora. Ela explorou ruas de paralelepípedos, conheceu pessoas amigáveis e se apaixonou pela cultura local.',
    W: 'Wagner escreveu uma canção sobre o amor. Ele expressou seus sentimentos em versos poéticos, criando uma melodia que tocava o coração.',
    X: 'Xuxa, a famosa apresentadora, encantou crianças com seu programa. Ela trouxe alegria e diversão, ensinando valores importantes através de suas histórias.',
    Y: 'Yara yoga diariamente para relaxar. Ela encontrou paz interior e equilíbrio, melhorando sua saúde física e mental.',
    Z: 'Zé fez um zíper novo para sua jaqueta. Ele aprendeu a costurar e consertar roupas, desenvolvendo uma habilidade útil e criativa.'
};

let secaoAtual = '';

function mostrarSecao(secao) {
  document.getElementById('tela-inicial').style.display = 'none';
  document.getElementById('resultado').style.display = 'none';
  const letrasDiv = document.getElementById('letras');
  letrasDiv.innerHTML = `<h2>Escolha uma letra:</h2>`;
  letrasDiv.style.display = 'block';

  letras.forEach(l => {
    const btn = document.createElement('button');
    btn.textContent = l;
    btn.className = 'letra-btn';
    btn.onclick = () => carregarConteudo(secao, l);
    letrasDiv.appendChild(btn);
  });

  secaoAtual = secao;
}

function carregarConteudo(secao, letra) {
  const resultado = document.getElementById('resultado');
  resultado.style.display = 'block';

  let conteudo = `<h3>Conteúdo para a letra ${letra}:</h3>`;

  if (secao === 'palavrinhas') {
    const palavras = palavrasPorLetra[letra] || ['Nenhuma palavra encontrada.'];
    conteudo += `<ul>${palavras.map(p => `<li>${p}</li>`).join('')}</ul>`;
  } else if (secao === 'frases') {
    const frases = frasesPorLetra[letra] || ['Nenhuma frase disponível.'];
    conteudo += `<ul>${frases.map(f => `<li>${f}</li>`).join('')}</ul>`;
  } else if (secao === 'textos') {
    const texto = textosPorLetra[letra] || 'Texto não encontrado.';
    conteudo += `<p>${texto}</p>`;
  }

  resultado.innerHTML = conteudo;
}

function voltarInicio() {
  document.getElementById('tela-inicial').style.display = 'block';
  document.getElementById('letras').style.display = 'none';
  document.getElementById('resultado').style.display = 'none';
}
