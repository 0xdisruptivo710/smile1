/**
 * Copy da landing page — SmileSkin, instituto de tricologia clínica.
 * Voz: autoridade científica com acolhimento. Sem promessa, sem apelação.
 * Respeita limites de atuação: protocolos capilares, saúde do couro
 * cabeludo, acompanhamento tricológico. Nunca invade ato médico.
 */

export const hero = {
  eyebrow: "Instituto de tricologia clínica · Moema, SP",
  titulo: "A queda capilar é um sinal.",
  tituloDestaque: "Nós investigamos o que ele está dizendo.",
  lede:
    "A SmileSkin não trata cabelo no escuro. Estudamos cada caso como ele é: um conjunto de fatores que precisam ser identificados antes de qualquer protocolo. Tricologia de verdade começa por entender.",
  ctaPrimario: "Fazer a pré-avaliação",
  ctaSecundario: "Conhecer o método",
  nota: "Pré-avaliação on-line gratuita · conduz à avaliação presencial",
  marcas: [
    "Abordagem multifatorial",
    "Tricoscopia e investigação",
    "Protocolos individualizados",
    "Acompanhamento responsável",
  ],
};

export const multifatorial = {
  numero: "02",
  label: "O ponto de partida",
  titulo: "Nem toda queda é genética. Quase nenhuma tem uma causa só.",
  texto:
    "A crença mais cara sobre queda de cabelo é a de que existe um culpado único. Na prática, a rarefação capilar quase sempre nasce do encontro de vários fatores: o que você herdou, o que seu corpo está vivendo e o que o couro cabeludo está sofrendo. Tratar um fator e ignorar os outros é a razão mais comum de um tratamento não responder.",
  destaques: [
    {
      titulo: "O couro cabeludo envelhece",
      texto:
        "Como qualquer tecido. Microcirculação, oleosidade e firmeza mudam com o tempo, e isso pesa sobre o fio.",
    },
    {
      titulo: "O emocional impacta o fio",
      texto:
        "Estresse intenso e sofrimento prolongado alteram o ciclo capilar. O corpo registra o que a mente carrega.",
    },
    {
      titulo: "Existem limites biológicos",
      texto:
        "O fio responde dentro de um intervalo. Um trabalho sério diz com franqueza o que é possível e o que não é.",
    },
  ],
};

export const causas = {
  numero: "03",
  label: "Abordagem multifatorial",
  titulo: "O que pode estar por trás da sua queda.",
  texto:
    "Estes são os eixos que a investigação tricológica percorre. Raramente um caso se explica por um só. A avaliação existe para encontrar a combinação que é a sua.",
  fatores: [
    {
      codigo: "F1",
      titulo: "Predisposição genética",
      texto:
        "Folículos sensíveis a hormônios que miniaturizam ao longo dos anos. Comum, mas quase nunca age sozinha.",
      detalhe:
        "A miniaturização é progressiva: a cada ciclo, o fio nasce mais fino e mais curto, até o folículo entrar em repouso. A tricoscopia mede esse afinamento e mostra em que estágio o quadro está, o que define se a janela de tratamento ainda é ampla.",
    },
    {
      codigo: "F2",
      titulo: "Hormonal e tireoidiano",
      texto:
        "Tireoide, pós-parto, menopausa e oscilações hormonais reescrevem o ritmo do ciclo capilar.",
      detalhe:
        "Hormônios regulam quanto tempo o fio passa crescendo. Quando esse eixo se desorganiza, a fase de crescimento encurta e a queda aparece semanas depois do gatilho, o que dificulta o paciente associar causa e efeito sem investigação.",
    },
    {
      codigo: "F3",
      titulo: "Emocional e estresse",
      texto:
        "Períodos de estresse agudo ou luto podem empurrar muitos fios para a fase de queda ao mesmo tempo.",
      detalhe:
        "É o chamado eflúvio: um evento intenso sincroniza vários folículos na fase de queda, e o resultado aparece de dois a três meses depois. Costuma ser reversível, mas reconhecer o gatilho emocional é parte do cuidado, não um detalhe.",
    },
    {
      codigo: "F4",
      titulo: "Emagrecimento e nutrição",
      texto:
        "Dietas restritivas e perda de peso acelerada privam o fio de ferro, proteína e micronutrientes essenciais.",
      detalhe:
        "O cabelo é um dos primeiros tecidos a perder prioridade quando o corpo entra em restrição. Ferro, vitamina D, zinco e proteína aparecem com frequência no centro do quadro, e a correção costuma ser feita junto a nutrição.",
    },
    {
      codigo: "F5",
      titulo: "Doenças sistêmicas e pós-covid",
      texto:
        "Quadros febris, infecções e doenças sistêmicas, incluindo a covid, deixam marca no couro cabeludo meses depois.",
      detalhe:
        "Febre alta, internação e infecções relevantes funcionam como um choque para o ciclo capilar. A queda costuma surgir bem depois da recuperação, e a linha do tempo da anamnese é o que conecta os dois pontos.",
    },
    {
      codigo: "F6",
      titulo: "Saúde do couro cabeludo",
      texto:
        "Oleosidade, descamação, inflamação e sensibilidade comprometem o ambiente onde o fio nasce.",
      detalhe:
        "Antes de pensar no fio, é preciso olhar o solo. Um scalp inflamado ou desequilibrado prejudica qualquer protocolo, por isso a saúde do microambiente folicular costuma ser a primeira frente de trabalho.",
    },
    {
      codigo: "F7",
      titulo: "Tração e processos químicos",
      texto:
        "Apliques, mega hair, química intensa e penteados de tração agridem a raiz de forma mecânica e progressiva.",
      detalhe:
        "A tração repetida enfraquece a fixação do fio e, com o tempo, pode levar a perda definitiva em áreas específicas, como as bordas. Identificar o padrão cedo permite ajustar hábitos antes que o dano se consolide.",
    },
    {
      codigo: "F8",
      titulo: "Idade do couro cabeludo",
      texto:
        "O envelhecimento do tecido reduz firmeza e irrigação. É um fator silencioso, e tratável quando reconhecido.",
      detalhe:
        "Assim como a pele, o couro cabeludo envelhece: a microcirculação diminui e o ambiente fica menos favorável ao fio. É um fator que raramente aparece sozinho, mas que potencializa todos os outros quando ignorado.",
    },
  ],
};

export const questionarioIntro = {
  numero: "04",
  label: "Pré-avaliação capilar",
  titulo: "Comece por entender o seu caso.",
  texto:
    "Algumas perguntas guiadas para mapear quais fatores merecem investigação na sua queda. Leva cerca de um minuto. Ao final, você recebe uma orientação inicial e o caminho para a avaliação presencial.",
  aviso:
    "Esta é uma orientação inicial, não um diagnóstico. Diagnóstico e conduta dependem da avaliação presencial.",
};

export const investigacao = {
  numero: "05",
  label: "A investigação",
  titulo: "O que acontece antes de qualquer protocolo.",
  texto:
    "A avaliação capilar da SmileSkin é um trabalho de investigação. O objetivo não é vender um pacote: é entender o couro cabeludo, o fio e a história por trás da queda.",
  etapas: [
    {
      passo: "01",
      titulo: "Anamnese aprofundada",
      texto:
        "Histórico de saúde, rotina, alimentação, momento emocional e linha do tempo da queda. O contexto é metade do diagnóstico.",
    },
    {
      passo: "02",
      titulo: "Tricoscopia",
      texto:
        "Análise do couro cabeludo e do fio sob ampliação: densidade, calibre, sinais de miniaturização e estado do microambiente folicular.",
    },
    {
      passo: "03",
      titulo: "Registro científico",
      texto:
        "Imagens padronizadas que viram o ponto de partida. Toda evolução futura é comparada a este registro.",
    },
    {
      passo: "04",
      titulo: "Leitura integrada",
      texto:
        "Os achados se cruzam com o histórico para identificar os fatores em jogo, e quando outro profissional precisa entrar.",
    },
  ],
  videoLabel: "SmileSkin · atendimento capilar",
};

export const protocolo = {
  numero: "06",
  label: "Protocolo individual",
  titulo: "Um plano para o seu couro cabeludo. Não um pacote para todos.",
  texto:
    "A partir do diagnóstico, a equipe desenha um protocolo capilar individual: o que será feito, com qual frequência, em quanto tempo se reavalia. Trabalhamos com saúde do scalp, fortalecimento folicular e gerenciamento da rarefação, sempre dentro do que é possível e responsável.",
  video: {
    label: "Ver evolução",
    titulo: "Registro de evolução, mês a mês",
    texto:
      "O acompanhamento da SmileSkin é documentado. Este é o registro de um protocolo capilar real, mês a mês, conduzido na clínica.",
  },
  pilares: [
    {
      titulo: "Individualização",
      texto:
        "O protocolo responde aos seus fatores, à sua rotina e ao seu objetivo. Dois diagnósticos diferentes não recebem o mesmo plano.",
    },
    {
      titulo: "Expectativa honesta",
      texto:
        "Antes de começar, você sabe o que esperar e em que prazo. Limites biológicos são ditos com clareza, não escondidos.",
    },
    {
      titulo: "Reavaliação com registro",
      texto:
        "A cada ciclo, novo registro comparado ao inicial. O que responde, segue; o que não responde, é ajustado.",
    },
  ],
};

export const multiprofissional = {
  numero: "07",
  label: "Visão integrada",
  titulo: "Cabelo não vive isolado do resto do corpo.",
  texto:
    "Quando a investigação aponta para fora do couro cabeludo, a SmileSkin trabalha em rede. A condução do seu caso pode envolver, ou encaminhar para, outras especialidades, porque tricologia séria reconhece os próprios limites.",
  areas: [
    { nome: "Psicologia", nota: "O peso emocional da queda e o estresse como fator" },
    { nome: "Endocrinologia", nota: "Tireoide, hormônios e quadros metabólicos" },
    { nome: "Nutrição", nota: "Ferro, proteína e micronutrientes do fio" },
    { nome: "Transplante capilar", nota: "Quando a indicação é cirúrgica" },
    { nome: "Mega hair", nota: "Especialistas para soluções estéticas seguras" },
    { nome: "Salões parceiros", nota: "Cuidado do dia a dia alinhado ao protocolo" },
  ],
};

export const humano = {
  numero: "08",
  label: "O lado humano",
  titulo: "A queda mexe com mais do que o cabelo.",
  texto:
    "Quem procura ajuda para a queda capilar raramente está falando só de fios. Está falando de se reconhecer no espelho, de fotos evitadas, de uma confiança que foi recuando devagar. A SmileSkin leva esse lado a sério: acolhimento não é cortesia, é parte do cuidado.",
  pontos: [
    "Reconhecemos o impacto emocional sem dramatizar e sem minimizar.",
    "Você não precisa justificar o quanto isso te incomoda.",
    "Cuidar da autoestima é um objetivo legítimo do tratamento.",
  ],
  depoimento: {
    label: "Ver depoimento",
    eyebrow: "Na voz de quem viveu",
    nota: "Depoimento de paciente em acompanhamento na SmileSkin.",
  },
};

export const autoridade = {
  numero: "09",
  label: "Autoridade científica",
  titulo: "Estudo que continua depois que o consultório fecha.",
  texto:
    "A diferença entre uma clínica de cabelo e um instituto de tricologia é o que sustenta o atendimento por trás. A SmileSkin investe em produção de conhecimento, atualização e ensino, e isso volta para o paciente em forma de conduta melhor.",
  distincao: {
    eyebrow: "Tricologia clínica ≠ trabalho de salão",
    titulo: "Duas áreas, dois objetivos. Ambos legítimos.",
    texto:
      "Tricologia clínica é uma área científica voltada à investigação das causas da queda capilar e à saúde do couro cabeludo. Difere fundamentalmente do trabalho de cuidado estético dos fios realizado em salões: aqui o foco é diagnóstico, protocolo individualizado e acompanhamento clínico do microambiente folicular. Salões parceiros cuidam dos fios; o instituto investiga a raiz.",
  },
  itens: [
    { rotulo: "Produção acadêmica", nota: "Monografia e estudo continuado em tricologia" },
    { rotulo: "Conteúdo educativo", nota: "Artigos e vídeos que explicam, sem prometer" },
    { rotulo: "Ensino", nota: "Aulas e formação na área capilar" },
    { rotulo: "Presença na mídia", nota: "Entrevistas e participações sobre saúde capilar" },
    { rotulo: "Certificações", nota: "Formação específica da equipe em tricologia" },
    { rotulo: "Instagram", nota: "Bastidores e educação capilar no dia a dia" },
  ],
  moldura: "Espaço para artigos, vídeos e produção científica",
};

export const equipe = {
  numero: "10",
  label: "Quem cuida de você",
  titulo: "O cuidado tem nome e responsabilidade.",
  texto:
    "Você não será atendido por um protocolo anônimo. A investigação e a condução do seu caso são assinadas pelo profissional responsável pelo instituto.",
  pessoas: [
    {
      nome: "Dr. Deli Brito",
      papel: "Responsável clínico · Tricologia",
      bio:
        "Farmacêutico (CRF/SP 52.349), membro da Academia Brasileira de Tricologia, com RQE em Farmácia Estética e Tricologia e mestrado em Nanotecnologia aplicada à alopecia. Conduz a avaliação capilar e define a estratégia de tratamento de cada caso no SS Hair Science Institute.",
    },
  ],
};

export const paraQuem = {
  numero: "11",
  label: "Quando procurar",
  titulo: "Sinais de que vale investigar agora.",
  texto:
    "Quanto mais cedo a queda é entendida, mais ampla é a janela de tratamento. Se você se reconhece abaixo, uma avaliação faz sentido.",
  sinais: [
    "Mais fios na escova, no travesseiro ou no ralo do que o habitual.",
    "Afinamento dos fios ou perda de densidade, mesmo sem queda intensa.",
    "Risca alargando, coroa mais visível ou entradas que recuaram.",
    "Queda que começou depois de parto, dieta, doença ou fase de estresse.",
    "Couro cabeludo com oleosidade, coceira ou descamação persistentes.",
    "Já tentou produtos por conta própria sem entender o que estava tratando.",
  ],
};

export const faq = {
  numero: "12",
  label: "Antes de decidir",
  titulo: "Perguntas que merecem resposta clara.",
  itens: [
    {
      p: "Queda capilar sempre significa calvície?",
      r: "Não. Existem diferentes causas para queda capilar e afinamento dos fios.",
    },
    {
      p: "O estresse realmente pode causar queda capilar?",
      r: "Sim. O emocional possui forte impacto sobre o ciclo capilar.",
    },
    {
      p: "Emagrecimento pode provocar queda de cabelo?",
      r: "Pode. O emagrecimento acelerado atualmente é uma das causas mais frequentes de queda capilar.",
    },
    {
      p: "Existem tipos diferentes de alopecia?",
      r: "Sim. Existem diferentes tipos de alopecias e alterações capilares, cada uma com comportamentos e características específicas.",
    },
    {
      p: "Alopecia cicatricial é diferente das demais?",
      r: "Sim. As alopecias cicatriciais podem envolver destruição folicular progressiva e frequentemente exigem investigação especializada.",
    },
    {
      p: "Alterações do couro cabeludo podem provocar queda?",
      r: "Sim. Inflamações, oleosidade excessiva, dermatite seborreica e desequilíbrios do couro cabeludo podem impactar diretamente os fios.",
    },
    {
      p: "Mega hair pode piorar a queda capilar?",
      r: "Dependendo da técnica utilizada, do peso, da tração exercida e das características do couro cabeludo, pode haver impacto sobre os fios e folículos.",
    },
    {
      p: "O instituto contraindica mega hair?",
      r: "Não. A abordagem é individualizada, educativa e baseada em critérios técnicos.",
    },
    {
      p: "Existem protocolos voltados para barba e sobrancelhas?",
      r: "Sim. Dependendo da avaliação individualizada, podem ser elaboradas estratégias voltadas à melhora da densidade e qualidade folicular dessas regiões.",
    },
    {
      p: "Existem casos em que o cabelo pode não voltar completamente?",
      r: "Sim. Existem situações em que o potencial de recuperação pode ser parcial ou limitado.",
    },
    {
      p: "Os resultados são imediatos? Os protocolos possuem garantia de resultado?",
      r: "Não. O cabelo possui um ciclo biológico lento e a resposta costuma ocorrer de forma progressiva. Nenhum protocolo possui garantia de resultado: cada organismo responde de forma diferente e os resultados podem variar conforme múltiplos fatores individuais.",
    },
  ],
};

export const agendamento = {
  numero: "13",
  label: "O próximo passo",
  titulo: "Entender a sua queda começa aqui.",
  texto:
    "Faça a pré-avaliação capilar ou fale direto com a equipe. O destino é o mesmo: uma avaliação presencial que investiga o seu caso a sério.",
  whatsapp: {
    titulo: "Falar com a equipe",
    texto: "Atendimento direto pelo WhatsApp para agendar sua avaliação capilar.",
    cta: "Falar com um especialista",
  },
  form: {
    titulo: "Prefere que a clínica entre em contato?",
    texto: "Deixe seus dados e a equipe da SmileSkin retorna.",
    campos: {
      nome: "Como podemos te chamar?",
      whatsapp: "Seu WhatsApp",
      email: "Seu e-mail",
      mensagem: "Quer adiantar algo sobre o seu caso? (opcional)",
    },
    enviar: "Solicitar contato",
    enviando: "Enviando...",
    sucessoTitulo: "Recebemos seus dados.",
    sucessoTexto:
      "A equipe da SmileSkin vai entrar em contato pelo WhatsApp informado para agendar sua avaliação capilar.",
    erro:
      "Algo travou no envio. Tente de novo ou fale com a gente direto no WhatsApp.",
  },
};

export const rodape = {
  assinatura: "SmileSkin — instituto de tricologia clínica",
  unidade: "Unidade Moema · São Paulo, SP",
  legal:
    "A SmileSkin atua com protocolos capilares, saúde do couro cabeludo e acompanhamento tricológico. As informações desta página são educativas e não substituem avaliação profissional individual. Resultados variam conforme o diagnóstico de cada pessoa.",
  navTitulo: "Navegar",
  contatoTitulo: "Contato",
};
