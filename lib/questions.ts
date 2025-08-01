
export interface Question {
  id: string;
  subject: string;
  year: string;
  question_number: string;
  statement: string;
  alternative_a: string;
  alternative_b: string;
  alternative_c: string;
  alternative_d: string;
  alternative_e: string;
  correct_answer: string;
  explanation?: string;
}

// Base expandida de questões do ENEM (sem questões que necessitam imagens)
export const questionsData: Question[] = [
  // Matemática
  {
    id: '1',
    subject: 'Matemática',
    year: '2023',
    question_number: '136',
    statement: 'Uma empresa de telefonia oferece dois planos para seus clientes. No plano A, o cliente paga uma taxa fixa mensal de R$ 40,00 e mais R$ 0,50 por minuto de ligação. No plano B, o cliente paga uma taxa fixa mensal de R$ 60,00 e mais R$ 0,30 por minuto de ligação. A partir de quantos minutos de ligação por mês o plano B se torna mais vantajoso que o plano A?',
    alternative_a: '80 minutos',
    alternative_b: '90 minutos',
    alternative_c: '100 minutos',
    alternative_d: '110 minutos',
    alternative_e: '120 minutos',
    correct_answer: 'C'
  },
  {
    id: '21',
    subject: 'Matemática',
    year: '2022',
    question_number: '145',
    statement: 'Em uma progressão aritmética, o primeiro termo é 5 e a razão é 3. Qual é o décimo termo dessa progressão?',
    alternative_a: '29',
    alternative_b: '32',
    alternative_c: '35',
    alternative_d: '38',
    alternative_e: '41',
    correct_answer: 'B'
  },
  {
    id: '22',
    subject: 'Matemática',
    year: '2021',
    question_number: '160',
    statement: 'Um terreno retangular tem 50 metros de comprimento e 30 metros de largura. Qual é a área deste terreno em metros quadrados?',
    alternative_a: '1200',
    alternative_b: '1300',
    alternative_c: '1400',
    alternative_d: '1500',
    alternative_e: '1600',
    correct_answer: 'D'
  },
  {
    id: '23',
    subject: 'Matemática',
    year: '2020',
    question_number: '134',
    statement: 'Uma função do primeiro grau é definida por f(x) = 2x + 3. Qual é o valor de f(5)?',
    alternative_a: '11',
    alternative_b: '12',
    alternative_c: '13',
    alternative_d: '14',
    alternative_e: '15',
    correct_answer: 'C'
  },
  {
    id: '24',
    subject: 'Matemática',
    year: '2019',
    question_number: '142',
    statement: 'Em um triângulo retângulo, a hipotenusa mede 13 cm e um dos catetos mede 5 cm. Qual é a medida do outro cateto?',
    alternative_a: '10 cm',
    alternative_b: '11 cm',
    alternative_c: '12 cm',
    alternative_d: '13 cm',
    alternative_e: '14 cm',
    correct_answer: 'C'
  },
  {
    id: '25',
    subject: 'Matemática',
    year: '2018',
    question_number: '156',
    statement: 'O valor de 30% de 250 é igual a:',
    alternative_a: '65',
    alternative_b: '70',
    alternative_c: '75',
    alternative_d: '80',
    alternative_e: '85',
    correct_answer: 'C'
  },
  
  // Português
  {
    id: '2',
    subject: 'Português',
    year: '2023',
    question_number: '1',
    statement: 'Leia o texto a seguir: "A linguagem é um fenômeno social que se manifesta através da comunicação entre os indivíduos. Ela não é apenas um meio de transmitir informações, mas também uma forma de expressar identidade cultural e estabelecer vínculos sociais." Com base no texto, é correto afirmar que:',
    alternative_a: 'A linguagem serve apenas para transmitir informações.',
    alternative_b: 'A linguagem é um fenômeno individual e isolado.',
    alternative_c: 'A linguagem expressa identidade cultural e estabelece vínculos sociais.',
    alternative_d: 'A linguagem não tem relação com aspectos sociais.',
    alternative_e: 'A linguagem é um meio limitado de comunicação.',
    correct_answer: 'C'
  },
  {
    id: '26',
    subject: 'Português',
    year: '2022',
    question_number: '15',
    statement: 'Observe a frase: "João chegou atrasado à reunião." A palavra "atrasado" funciona como:',
    alternative_a: 'Substantivo',
    alternative_b: 'Adjetivo',
    alternative_c: 'Advérbio',
    alternative_d: 'Verbo',
    alternative_e: 'Preposição',
    correct_answer: 'B'
  },
  {
    id: '27',
    subject: 'Português',
    year: '2021',
    question_number: '8',
    statement: 'Na oração "Todos esperavam que ele chegasse cedo", a oração subordinada é:',
    alternative_a: 'Adjetiva restritiva',
    alternative_b: 'Adjetiva explicativa',
    alternative_c: 'Substantiva objetiva direta',
    alternative_d: 'Adverbial temporal',
    alternative_e: 'Coordenada sindética',
    correct_answer: 'C'
  },
  {
    id: '28',
    subject: 'Português',
    year: '2020',
    question_number: '22',
    statement: 'A figura de linguagem presente em "O vento sussurrava segredos" é:',
    alternative_a: 'Metáfora',
    alternative_b: 'Metonímia',
    alternative_c: 'Personificação',
    alternative_d: 'Hipérbole',
    alternative_e: 'Antítese',
    correct_answer: 'C'
  },
  {
    id: '29',
    subject: 'Português',
    year: '2019',
    question_number: '33',
    statement: 'O plural de "cidadão" é:',
    alternative_a: 'cidadões',
    alternative_b: 'cidadãos',
    alternative_c: 'cidadans',
    alternative_d: 'cidadões',
    alternative_e: 'cidadãoes',
    correct_answer: 'B'
  },
  {
    id: '30',
    subject: 'Português',
    year: '2018',
    question_number: '12',
    statement: 'Em "Faz três anos que não o vejo", o verbo "fazer" é:',
    alternative_a: 'Pessoal',
    alternative_b: 'Impessoal',
    alternative_c: 'Auxiliar',
    alternative_d: 'Pronominal',
    alternative_e: 'Defectivo',
    correct_answer: 'B'
  },

  // História
  {
    id: '3',
    subject: 'História',
    year: '2023',
    question_number: '45',
    statement: 'Durante o período colonial brasileiro, o sistema de capitanias hereditárias foi implementado pela Coroa Portuguesa como forma de colonizar e administrar o território. Sobre esse sistema, é correto afirmar que:',
    alternative_a: 'Foi um sistema que garantiu total autonomia aos donatários.',
    alternative_b: 'Teve completo sucesso em todas as capitanias criadas.',
    alternative_c: 'Os donatários tinham direitos e deveres definidos pela Coroa.',
    alternative_d: 'Excluía completamente a participação da Coroa Portuguesa.',
    alternative_e: 'Foi implementado apenas no século XVIII.',
    correct_answer: 'C'
  },
  {
    id: '31',
    subject: 'História',
    year: '2022',
    question_number: '38',
    statement: 'A Proclamação da República no Brasil (1889) foi resultado de diversos fatores. Entre eles, destaca-se:',
    alternative_a: 'O apoio total da população à mudança de regime.',
    alternative_b: 'A pressão dos militares e a crise da monarquia.',
    alternative_c: 'A influência direta dos Estados Unidos.',
    alternative_d: 'A abolição da escravatura como causa única.',
    alternative_e: 'O desejo de retorno ao período colonial.',
    correct_answer: 'B'
  },
  {
    id: '32',
    subject: 'História',
    year: '2021',
    question_number: '42',
    statement: 'A Revolução Industrial iniciada na Inglaterra no século XVIII transformou profundamente a sociedade. Entre as principais consequências desse processo, destaca-se:',
    alternative_a: 'A manutenção das estruturas feudais.',
    alternative_b: 'O fortalecimento exclusivo da agricultura.',
    alternative_c: 'O surgimento da classe operária urbana.',
    alternative_d: 'A diminuição da população mundial.',
    alternative_e: 'A redução da produção de mercadorias.',
    correct_answer: 'C'
  },
  {
    id: '33',
    subject: 'História',
    year: '2020',
    question_number: '51',
    statement: 'O período conhecido como Era Vargas (1930-1945) caracterizou-se por:',
    alternative_a: 'Total liberdade política e econômica.',
    alternative_b: 'Centralização política e intervenção estatal na economia.',
    alternative_c: 'Ausência completa de direitos trabalhistas.',
    alternative_d: 'Isolamento total do Brasil no cenário internacional.',
    alternative_e: 'Predominância absoluta do setor agrário.',
    correct_answer: 'B'
  },
  {
    id: '34',
    subject: 'História',
    year: '2019',
    question_number: '47',
    statement: 'A Guerra Fria (1945-1991) caracterizou-se pela rivalidade entre:',
    alternative_a: 'Inglaterra e França',
    alternative_b: 'Estados Unidos e União Soviética',
    alternative_c: 'Alemanha e Japão',
    alternative_d: 'Brasil e Argentina',
    alternative_e: 'China e Coreia',
    correct_answer: 'B'
  },
  {
    id: '35',
    subject: 'História',
    year: '2018',
    question_number: '49',
    statement: 'O movimento conhecido como Inconfidência Mineira (1789) teve como principal objetivo:',
    alternative_a: 'Manter o sistema colonial português.',
    alternative_b: 'Aumentar a produção de ouro em Minas Gerais.',
    alternative_c: 'Conquistar a independência do Brasil.',
    alternative_d: 'Fortalecer os laços com Portugal.',
    alternative_e: 'Expandir o território mineiro.',
    correct_answer: 'C'
  },

  // Geografia
  {
    id: '4',
    subject: 'Geografia',
    year: '2023',
    question_number: '23',
    statement: 'O processo de urbanização no Brasil intensificou-se a partir da segunda metade do século XX, resultando em transformações significativas no território nacional. Entre as principais características desse processo, destaca-se:',
    alternative_a: 'A diminuição da população urbana em relação à rural.',
    alternative_b: 'O crescimento equilibrado entre todas as regiões do país.',
    alternative_c: 'A concentração populacional em grandes centros urbanos.',
    alternative_d: 'A redução das desigualdades regionais.',
    alternative_e: 'O desenvolvimento uniforme de todas as cidades.',
    correct_answer: 'C'
  },
  {
    id: '36',
    subject: 'Geografia',
    year: '2022',
    question_number: '31',
    statement: 'O clima tropical do Brasil caracteriza-se por:',
    alternative_a: 'Baixas temperaturas durante todo o ano.',
    alternative_b: 'Duas estações bem definidas: seca e chuvosa.',
    alternative_c: 'Ausência total de precipitações.',
    alternative_d: 'Temperaturas sempre abaixo de zero.',
    alternative_e: 'Chuvas distribuídas uniformemente ao longo do ano.',
    correct_answer: 'B'
  },
  {
    id: '37',
    subject: 'Geografia',
    year: '2021',
    question_number: '28',
    statement: 'O Brasil possui um dos maiores territórios do mundo e apresenta grande diversidade climática. Os principais fatores que influenciam o clima brasileiro são:',
    alternative_a: 'Apenas a latitude.',
    alternative_b: 'Somente a altitude.',
    alternative_c: 'Latitude, altitude, massas de ar e maritimidade.',
    alternative_d: 'Exclusivamente as massas de ar.',
    alternative_e: 'Apenas a proximidade do oceano.',
    correct_answer: 'C'
  },
  {
    id: '38',
    subject: 'Geografia',
    year: '2020',
    question_number: '35',
    statement: 'A Amazônia brasileira é conhecida mundialmente por:',
    alternative_a: 'Sua baixa biodiversidade.',
    alternative_b: 'Sua grande extensão e rica biodiversidade.',
    alternative_c: 'Ser uma região completamente desabitada.',
    alternative_d: 'Ter apenas vegetação de cerrado.',
    alternative_e: 'Não possuir rios importantes.',
    correct_answer: 'B'
  },
  {
    id: '39',
    subject: 'Geografia',
    year: '2019',
    question_number: '29',
    statement: 'O fenômeno das ilhas de calor urbano é causado principalmente por:',
    alternative_a: 'Excesso de vegetação nas cidades.',
    alternative_b: 'Concentração de edifícios e asfalto.',
    alternative_c: 'Proximidade do oceano.',
    alternative_d: 'Baixa densidade populacional.',
    alternative_e: 'Predominância de áreas rurais.',
    correct_answer: 'B'
  },
  {
    id: '40',
    subject: 'Geografia',
    year: '2018',
    question_number: '26',
    statement: 'A região Nordeste do Brasil caracteriza-se por:',
    alternative_a: 'Clima frio e seco durante todo o ano.',
    alternative_b: 'Presença do clima semiárido em grande parte do território.',
    alternative_c: 'Ausência total de atividades econômicas.',
    alternative_d: 'Ser a região menos povoada do país.',
    alternative_e: 'Ter apenas vegetação de floresta tropical.',
    correct_answer: 'B'
  },

  // Biologia
  {
    id: '5',
    subject: 'Biologia',
    year: '2023',
    question_number: '67',
    statement: 'A fotossíntese é um processo fundamental para a vida na Terra, realizado por plantas, algas e algumas bactérias. Durante esse processo, ocorre a conversão de energia luminosa em energia química. As principais etapas da fotossíntese são:',
    alternative_a: 'Apenas a fase clara, que ocorre nos tilacoides.',
    alternative_b: 'Apenas a fase escura, que ocorre no estroma.',
    alternative_c: 'Fase clara (nos tilacoides) e fase escura (no estroma).',
    alternative_d: 'Apenas a respiração celular.',
    alternative_e: 'Somente a produção de oxigênio.',
    correct_answer: 'C'
  },
  {
    id: '41',
    subject: 'Biologia',
    year: '2022',
    question_number: '73',
    statement: 'As mitocôndrias são organelas celulares responsáveis por:',
    alternative_a: 'Produção de proteínas.',
    alternative_b: 'Síntese de lipídios.',
    alternative_c: 'Produção de energia (ATP).',
    alternative_d: 'Digestão celular.',
    alternative_e: 'Armazenamento de material genético.',
    correct_answer: 'C'
  },
  {
    id: '42',
    subject: 'Biologia',
    year: '2021',
    question_number: '71',
    statement: 'A cadeia alimentar representa o fluxo de energia nos ecossistemas. Em uma cadeia alimentar típica, os produtores são representados por:',
    alternative_a: 'Carnívoros primários.',
    alternative_b: 'Herbívoros.',
    alternative_c: 'Plantas e algas.',
    alternative_d: 'Decompositores.',
    alternative_e: 'Carnívoros secundários.',
    correct_answer: 'C'
  },
  {
    id: '43',
    subject: 'Biologia',
    year: '2020',
    question_number: '68',
    statement: 'A teoria da evolução proposta por Charles Darwin baseia-se no princípio da:',
    alternative_a: 'Herança dos caracteres adquiridos.',
    alternative_b: 'Seleção natural.',
    alternative_c: 'Geração espontânea.',
    alternative_d: 'Fixismo das espécies.',
    alternative_e: 'Criação especial.',
    correct_answer: 'B'
  },
  {
    id: '44',
    subject: 'Biologia',
    year: '2019',
    question_number: '75',
    statement: 'O DNA (ácido desoxirribonucleico) é responsável por:',
    alternative_a: 'Produção de energia celular.',
    alternative_b: 'Digestão de alimentos.',
    alternative_c: 'Armazenamento de informações genéticas.',
    alternative_d: 'Transporte de oxigênio.',
    alternative_e: 'Eliminação de toxinas.',
    correct_answer: 'C'
  },
  {
    id: '45',
    subject: 'Biologia',
    year: '2018',
    question_number: '72',
    statement: 'A diversidade de espécies em um ecossistema é importante porque:',
    alternative_a: 'Diminui a estabilidade do ambiente.',
    alternative_b: 'Aumenta a competição entre as espécies.',
    alternative_c: 'Contribui para o equilíbrio ecológico.',
    alternative_d: 'Reduz a produtividade do ecossistema.',
    alternative_e: 'Limita a reprodução das espécies.',
    correct_answer: 'C'
  },

  // Química
  {
    id: '6',
    subject: 'Química',
    year: '2023',
    question_number: '89',
    statement: 'A tabela periódica organiza os elementos químicos de acordo com suas propriedades. Os elementos de uma mesma família (coluna) apresentam propriedades semelhantes porque possuem:',
    alternative_a: 'O mesmo número de prótons.',
    alternative_b: 'A mesma massa atômica.',
    alternative_c: 'O mesmo número de elétrons na camada de valência.',
    alternative_d: 'O mesmo número de nêutrons.',
    alternative_e: 'A mesma quantidade de camadas eletrônicas.',
    correct_answer: 'C'
  },
  {
    id: '46',
    subject: 'Química',
    year: '2022',
    question_number: '91',
    statement: 'A água (H₂O) é uma substância fundamental para a vida. Sua molécula é caracterizada por:',
    alternative_a: 'Ser apolar.',
    alternative_b: 'Ter geometria linear.',
    alternative_c: 'Ser polar e ter geometria angular.',
    alternative_d: 'Não formar ligações de hidrogênio.',
    alternative_e: 'Ter apenas ligações iônicas.',
    correct_answer: 'C'
  },
  {
    id: '47',
    subject: 'Química',
    year: '2021',
    question_number: '85',
    statement: 'As ligações químicas são responsáveis pela união entre os átomos. A ligação iônica ocorre quando há:',
    alternative_a: 'Compartilhamento de elétrons entre átomos.',
    alternative_b: 'Transferência de elétrons entre átomos.',
    alternative_c: 'Formação de nuvem eletrônica.',
    alternative_d: 'Apenas forças de Van der Waals.',
    alternative_e: 'Ligações de hidrogênio.',
    correct_answer: 'B'
  },
  {
    id: '48',
    subject: 'Química',
    year: '2020',
    question_number: '87',
    statement: 'O pH de uma solução indica:',
    alternative_a: 'A temperatura da solução.',
    alternative_b: 'A densidade da solução.',
    alternative_c: 'O grau de acidez ou basicidade da solução.',
    alternative_d: 'A velocidade de reação.',
    alternative_e: 'A pressão da solução.',
    correct_answer: 'C'
  },
  {
    id: '49',
    subject: 'Química',
    year: '2019',
    question_number: '93',
    statement: 'A combustão completa do metano (CH₄) produz:',
    alternative_a: 'Apenas monóxido de carbono.',
    alternative_b: 'Dióxido de carbono e água.',
    alternative_c: 'Apenas água.',
    alternative_d: 'Carbono sólido e hidrogênio.',
    alternative_e: 'Apenas dióxido de carbono.',
    correct_answer: 'B'
  },
  {
    id: '50',
    subject: 'Química',
    year: '2018',
    question_number: '88',
    statement: 'Um mol de qualquer substância contém sempre:',
    alternative_a: '1 grama da substância.',
    alternative_b: '6,02 × 10²³ partículas.',
    alternative_c: '1 litro da substância.',
    alternative_d: '100 gramas da substância.',
    alternative_e: '10²³ partículas.',
    correct_answer: 'B'
  },

  // Física
  {
    id: '7',
    subject: 'Física',
    year: '2023',
    question_number: '112',
    statement: 'Um corpo de massa 2 kg está em movimento retilíneo uniforme com velocidade de 10 m/s. Qual é a energia cinética desse corpo?',
    alternative_a: '50 J',
    alternative_b: '100 J',
    alternative_c: '150 J',
    alternative_d: '200 J',
    alternative_e: '250 J',
    correct_answer: 'B'
  },
  {
    id: '51',
    subject: 'Física',
    year: '2022',
    question_number: '115',
    statement: 'A velocidade da luz no vácuo é aproximadamente:',
    alternative_a: '300.000 m/s',
    alternative_b: '3.000.000 m/s',
    alternative_c: '30.000.000 m/s',
    alternative_d: '300.000.000 m/s',
    alternative_e: '3.000.000.000 m/s',
    correct_answer: 'D'
  },
  {
    id: '52',
    subject: 'Física',
    year: '2021',
    question_number: '108',
    statement: 'A primeira Lei de Newton, também conhecida como Lei da Inércia, estabelece que:',
    alternative_a: 'Todo corpo em movimento tende a parar.',
    alternative_b: 'A força é sempre proporcional à aceleração.',
    alternative_c: 'Todo corpo permanece em repouso ou em movimento uniforme, a menos que uma força atue sobre ele.',
    alternative_d: 'A ação é sempre igual à reação.',
    alternative_e: 'A energia não pode ser criada nem destruída.',
    correct_answer: 'C'
  },
  {
    id: '53',
    subject: 'Física',
    year: '2020',
    question_number: '119',
    statement: 'A unidade de força no Sistema Internacional (SI) é:',
    alternative_a: 'Joule (J)',
    alternative_b: 'Watt (W)',
    alternative_c: 'Newton (N)',
    alternative_d: 'Pascal (Pa)',
    alternative_e: 'Coulomb (C)',
    correct_answer: 'C'
  },
  {
    id: '54',
    subject: 'Física',
    year: '2019',
    question_number: '113',
    statement: 'O som se propaga através de:',
    alternative_a: 'Apenas no vácuo.',
    alternative_b: 'Ondas eletromagnéticas.',
    alternative_c: 'Ondas mecânicas que necessitam de um meio.',
    alternative_d: 'Partículas de luz.',
    alternative_e: 'Apenas em líquidos.',
    correct_answer: 'C'
  },
  {
    id: '55',
    subject: 'Física',
    year: '2018',
    question_number: '117',
    statement: 'A temperatura de fusão do gelo é:',
    alternative_a: '0°C',
    alternative_b: '100°C',
    alternative_c: '-273°C',
    alternative_d: '32°C',
    alternative_e: '273°C',
    correct_answer: 'A'
  },

  // Sociologia
  {
    id: '8',
    subject: 'Sociologia',
    year: '2022',
    question_number: '15',
    statement: 'Max Weber, importante sociólogo alemão, desenvolveu o conceito de ação social como base para compreender os fenômenos sociais. Segundo Weber, a ação social é caracterizada por:',
    alternative_a: 'Ser um comportamento instintivo dos indivíduos.',
    alternative_b: 'Ter sentido e ser orientada para outros indivíduos.',
    alternative_c: 'Ocorrer apenas em grandes grupos sociais.',
    alternative_d: 'Ser determinada exclusivamente por fatores econômicos.',
    alternative_e: 'Não ter relação com o contexto cultural.',
    correct_answer: 'B'
  },
  {
    id: '56',
    subject: 'Sociologia',
    year: '2023',
    question_number: '18',
    statement: 'Karl Marx desenvolveu a teoria sobre a luta de classes. Segundo Marx, na sociedade capitalista as principais classes sociais são:',
    alternative_a: 'Nobres e plebeus.',
    alternative_b: 'Burguesia e proletariado.',
    alternative_c: 'Clero e camponeses.',
    alternative_d: 'Artesãos e comerciantes.',
    alternative_e: 'Senhores feudais e servos.',
    correct_answer: 'B'
  },
  {
    id: '57',
    subject: 'Sociologia',
    year: '2021',
    question_number: '12',
    statement: 'Émile Durkheim conceituou o fato social como fenômeno que possui três características principais:',
    alternative_a: 'Individualidade, subjetividade e temporalidade.',
    alternative_b: 'Coerção, exterioridade e generalidade.',
    alternative_c: 'Simplicidade, clareza e objetividade.',
    alternative_d: 'Particularidade, regionalismo e especificidade.',
    alternative_e: 'Modernidade, urbanização e industrialização.',
    correct_answer: 'B'
  },
  {
    id: '58',
    subject: 'Sociologia',
    year: '2020',
    question_number: '21',
    statement: 'A estratificação social refere-se à:',
    alternative_a: 'Igualdade absoluta entre todos os indivíduos.',
    alternative_b: 'Divisão da sociedade em camadas ou estratos.',
    alternative_c: 'Ausência de diferenças sociais.',
    alternative_d: 'Mobilidade social inexistente.',
    alternative_e: 'Uniformização cultural completa.',
    correct_answer: 'B'
  },
  {
    id: '59',
    subject: 'Sociologia',
    year: '2019',
    question_number: '16',
    statement: 'Os movimentos sociais caracterizam-se por:',
    alternative_a: 'Serem sempre violentos e ilegais.',
    alternative_b: 'Buscarem transformações ou manutenção de aspectos sociais.',
    alternative_c: 'Existirem apenas em sociedades tradicionais.',
    alternative_d: 'Não terem organização ou objetivos definidos.',
    alternative_e: 'Serem exclusivamente rurais.',
    correct_answer: 'B'
  },
  {
    id: '60',
    subject: 'Sociologia',
    year: '2018',
    question_number: '14',
    statement: 'A globalização pode ser definida como:',
    alternative_a: 'Processo de isolamento entre os países.',
    alternative_b: 'Integração econômica, política e cultural entre nações.',
    alternative_c: 'Retorno às sociedades feudais.',
    alternative_d: 'Diminuição do comércio internacional.',
    alternative_e: 'Fortalecimento exclusivo das culturas locais.',
    correct_answer: 'B'
  },

  // Filosofia
  {
    id: '9',
    subject: 'Filosofia',
    year: '2022',
    question_number: '32',
    statement: 'Platão, filósofo grego da Antiguidade, desenvolveu a Teoria das Ideias para explicar o conhecimento e a realidade. Segundo essa teoria:',
    alternative_a: 'O mundo sensível é a única realidade existente.',
    alternative_b: 'As ideias são apenas criações da mente humana.',
    alternative_c: 'Existe um mundo das ideias perfeitas e imutáveis.',
    alternative_d: 'O conhecimento provém exclusivamente dos sentidos.',
    alternative_e: 'Não há diferença entre aparência e essência.',
    correct_answer: 'C'
  },
  {
    id: '61',
    subject: 'Filosofia',
    year: '2023',
    question_number: '28',
    statement: 'Aristóteles, discípulo de Platão, desenvolveu uma filosofia própria. Para Aristóteles, a virtude ética é:',
    alternative_a: 'Uma característica inata do ser humano.',
    alternative_b: 'O meio-termo entre dois extremos.',
    alternative_c: 'Impossível de ser alcançada.',
    alternative_d: 'Exclusiva dos filósofos.',
    alternative_e: 'Desnecessária para a felicidade.',
    correct_answer: 'B'
  },
  {
    id: '62',
    subject: 'Filosofia',
    year: '2021',
    question_number: '35',
    statement: 'René Descartes, filósofo francês, é conhecido por sua frase "Penso, logo existo". Esta afirmação reflete:',
    alternative_a: 'A supremacia do corpo sobre a mente.',
    alternative_b: 'A certeza da existência através do pensamento.',
    alternative_c: 'A negação da realidade material.',
    alternative_d: 'A impossibilidade do conhecimento.',
    alternative_e: 'A irrelevância da consciência.',
    correct_answer: 'B'
  },
  {
    id: '63',
    subject: 'Filosofia',
    year: '2020',
    question_number: '31',
    statement: 'Immanuel Kant propôs o conceito de imperativo categórico, que se refere a:',
    alternative_a: 'Comandos condicionais baseados em desejos.',
    alternative_b: 'Princípios morais universais e incondicionais.',
    alternative_c: 'Regras aplicáveis apenas a alguns indivíduos.',
    alternative_d: 'Normas variáveis conforme a situação.',
    alternative_e: 'Leis científicas da natureza.',
    correct_answer: 'B'
  },
  {
    id: '64',
    subject: 'Filosofia',
    year: '2019',
    question_number: '29',
    statement: 'Jean-Paul Sartre, filósofo existencialista, afirmava que:',
    alternative_a: 'A essência precede a existência.',
    alternative_b: 'O ser humano não tem liberdade.',
    alternative_c: 'A existência precede a essência.',
    alternative_d: 'Não existe diferença entre ser e não-ser.',
    alternative_e: 'A natureza humana é predeterminada.',
    correct_answer: 'C'
  },
  {
    id: '65',
    subject: 'Filosofia',
    year: '2018',
    question_number: '33',
    statement: 'A Ética é o ramo da filosofia que estuda:',
    alternative_a: 'Apenas as leis jurídicas.',
    alternative_b: 'Os princípios que orientam o comportamento moral.',
    alternative_c: 'Exclusivamente as religiões.',
    alternative_d: 'Apenas os costumes antigos.',
    alternative_e: 'Somente as normas sociais.',
    correct_answer: 'B'
  },

  // Literatura
  {
    id: '10',
    subject: 'Literatura',
    year: '2022',
    question_number: '8',
    statement: 'O Romantismo no Brasil teve características próprias que o diferenciaram do movimento europeu. Entre as principais características do Romantismo brasileiro, destaca-se:',
    alternative_a: 'A predominância de temas clássicos greco-romanos.',
    alternative_b: 'O indianismo como forma de valorizar o elemento nacional.',
    alternative_c: 'A rejeição completa aos sentimentos e emoções.',
    alternative_d: 'O uso exclusivo de formas poéticas rígidas.',
    alternative_e: 'A ausência de crítica social nas obras.',
    correct_answer: 'B'
  },
  {
    id: '66',
    subject: 'Literatura',
    year: '2023',
    question_number: '5',
    statement: 'O Realismo brasileiro, movimento literário do século XIX, caracteriza-se por:',
    alternative_a: 'Idealização da realidade e sentimentalismo excessivo.',
    alternative_b: 'Retrato crítico da sociedade e análise psicológica.',
    alternative_c: 'Exaltação dos heróis nacionais e da natureza.',
    alternative_d: 'Predomínio da fantasia sobre a realidade.',
    alternative_e: 'Ausência total de crítica social.',
    correct_answer: 'B'
  },
  {
    id: '67',
    subject: 'Literatura',
    year: '2021',
    question_number: '11',
    statement: 'Machado de Assis é considerado um dos maiores escritores da literatura brasileira. Sua obra caracteriza-se por:',
    alternative_a: 'Romantismo exacerbado e idealismo.',
    alternative_b: 'Regionalismo e descrição da natureza.',
    alternative_c: 'Análise psicológica e ironia refinada.',
    alternative_d: 'Exaltação dos valores patrióticos.',
    alternative_e: 'Descrição exclusiva da vida rural.',
    correct_answer: 'C'
  },
  {
    id: '68',
    subject: 'Literatura',
    year: '2020',
    question_number: '7',
    statement: 'O Modernismo brasileiro, iniciado com a Semana de Arte Moderna de 1922, propunha:',
    alternative_a: 'Retorno aos modelos clássicos europeus.',
    alternative_b: 'Renovação estética e valorização da cultura nacional.',
    alternative_c: 'Manutenção das formas tradicionais de arte.',
    alternative_d: 'Rejeição completa da cultura brasileira.',
    alternative_e: 'Imitação exclusiva dos movimentos europeus.',
    correct_answer: 'B'
  },
  {
    id: '69',
    subject: 'Literatura',
    year: '2019',
    question_number: '9',
    statement: 'Carlos Drummond de Andrade, poeta modernista, é conhecido por:',
    alternative_a: 'Poesia exclusivamente épica.',
    alternative_b: 'Reflexão sobre o cotidiano e a condição humana.',
    alternative_c: 'Apenas sonetos de forma clássica.',
    alternative_d: 'Poemas exclusivamente políticos.',
    alternative_e: 'Ausência de preocupação social.',
    correct_answer: 'B'
  },
  {
    id: '70',
    subject: 'Literatura',
    year: '2018',
    question_number: '6',
    statement: 'O Parnasianismo no Brasil caracterizou-se por:',
    alternative_a: 'Liberdade formal e verso livre.',
    alternative_b: 'Culto à forma perfeita e à arte pela arte.',
    alternative_c: 'Engajamento político e social.',
    alternative_d: 'Sentimentalismo exagerado.',
    alternative_e: 'Temática exclusivamente religiosa.',
    correct_answer: 'B'
  },

  // Inglês
  {
    id: '12',
    subject: 'Inglês',
    year: '2022',
    question_number: '91',
    statement: 'Read the text: "Climate change is one of the most pressing issues of our time. Scientists around the world are working to understand its causes and effects." The word "pressing" in this context means:',
    alternative_a: 'Expensive',
    alternative_b: 'Urgent',
    alternative_c: 'Simple',
    alternative_d: 'Old',
    alternative_e: 'Rare',
    correct_answer: 'B'
  },
  {
    id: '71',
    subject: 'Inglês',
    year: '2023',
    question_number: '88',
    statement: 'Choose the correct alternative to complete: "I _____ English for five years."',
    alternative_a: 'study',
    alternative_b: 'studied',
    alternative_c: 'have studied',
    alternative_d: 'will study',
    alternative_e: 'am studying',
    correct_answer: 'C'
  },
  {
    id: '72',
    subject: 'Inglês',
    year: '2021',
    question_number: '92',
    statement: 'The sentence "She must be at home now" expresses:',
    alternative_a: 'Obligation',
    alternative_b: 'Prohibition',
    alternative_c: 'Probability',
    alternative_d: 'Permission',
    alternative_e: 'Ability',
    correct_answer: 'C'
  },
  {
    id: '73',
    subject: 'Inglês',
    year: '2020',
    question_number: '89',
    statement: 'Which alternative correctly uses the comparative form?',
    alternative_a: 'This book is more interesting than that one.',
    alternative_b: 'This book is most interesting than that one.',
    alternative_c: 'This book is interesting than that one.',
    alternative_d: 'This book is more interesting that one.',
    alternative_e: 'This book is interestinger than that one.',
    correct_answer: 'A'
  },
  {
    id: '74',
    subject: 'Inglês',
    year: '2019',
    question_number: '94',
    statement: 'The passive voice of "They are building a new school" is:',
    alternative_a: 'A new school is built by them.',
    alternative_b: 'A new school was being built by them.',
    alternative_c: 'A new school is being built by them.',
    alternative_d: 'A new school has been built by them.',
    alternative_e: 'A new school will be built by them.',
    correct_answer: 'C'
  },
  {
    id: '75',
    subject: 'Inglês',
    year: '2018',
    question_number: '87',
    statement: 'In the sentence "I wish I could speak French fluently", the verb "could" expresses:',
    alternative_a: 'Past ability',
    alternative_b: 'Present possibility',
    alternative_c: 'Unreal situation in the present',
    alternative_d: 'Future certainty',
    alternative_e: 'Past obligation',
    correct_answer: 'C'
  },

  // Espanhol
  {
    id: '13',
    subject: 'Espanhol',
    year: '2022',
    question_number: '93',
    statement: 'Lee el texto: "La educación es fundamental para el desarrollo de cualquier sociedad. Sin una educación de calidad, es difícil lograr el progreso social y económico." La palabra "cualquier" puede ser traducida al português como:',
    alternative_a: 'Alguma',
    alternative_b: 'Nenhuma',
    alternative_c: 'Qualquer',
    alternative_d: 'Toda',
    alternative_e: 'Muita',
    correct_answer: 'C'
  },
  {
    id: '76',
    subject: 'Espanhol',
    year: '2023',
    question_number: '91',
    statement: 'En español, el pretérito perfecto se forma con:',
    alternative_a: 'El verbo "ser" + participio',
    alternative_b: 'El verbo "haber" + participio',
    alternative_c: 'El verbo "tener" + participio',
    alternative_d: 'El verbo "estar" + participio',
    alternative_e: 'El verbo "hacer" + participio',
    correct_answer: 'B'
  },
  {
    id: '77',
    subject: 'Espanhol',
    year: '2021',
    question_number: '95',
    statement: 'La frase "Me gusta mucho la música" en português sería:',
    alternative_a: 'Eu gosto muito da música.',
    alternative_b: 'Eu tenho muito gosto pela música.',
    alternative_c: 'A música me agrada muito.',
    alternative_d: 'Eu amo muito a música.',
    alternative_e: 'A música é muito boa.',
    correct_answer: 'A'
  },
  {
    id: '78',
    subject: 'Espanhol',
    year: '2020',
    question_number: '92',
    statement: '¿Cuál es el plural de "lápiz"?',
    alternative_a: 'lápizes',
    alternative_b: 'lápics',
    alternative_c: 'lápices',
    alternative_d: 'lápieces',
    alternative_e: 'lápizs',
    correct_answer: 'C'
  },
  {
    id: '79',
    subject: 'Espanhol',
    year: '2019',
    question_number: '96',
    statement: 'La expresión "Hace mucho frío" significa:',
    alternative_a: 'Faz muito frio.',
    alternative_b: 'Está fazendo muito frio.',
    alternative_c: 'Fez muito frio.',
    alternative_d: 'Fará muito frio.',
    alternative_e: 'Tinha feito muito frio.',
    correct_answer: 'B'
  },
  {
    id: '80',
    subject: 'Espanhol',
    year: '2018',
    question_number: '94',
    statement: 'El subjuntivo en español se usa principalmente para expresar:',
    alternative_a: 'Hechos reales y concretos.',
    alternative_b: 'Acciones habituales del pasado.',
    alternative_c: 'Deseos, dudas y emociones.',
    alternative_d: 'Acciones futuras seguras.',
    alternative_e: 'Descripciones físicas.',
    correct_answer: 'C'
  },

  // Artes
  {
    id: '14',
    subject: 'Artes',
    year: '2021',
    question_number: '17',
    statement: 'O Barroco brasileiro desenvolveu características próprias, adaptando-se ao contexto colonial. Na arquitetura barroca brasileira, é comum encontrar:',
    alternative_a: 'Linhas retas e geometria simples.',
    alternative_b: 'Decoração exuberante e linhas curvas.',
    alternative_c: 'Ausência total de ornamentação.',
    alternative_d: 'Influência exclusivamente indígena.',
    alternative_e: 'Uso predominante de materiais importados.',
    correct_answer: 'B'
  },
  {
    id: '81',
    subject: 'Artes',
    year: '2023',
    question_number: '19',
    statement: 'Leonardo da Vinci, artista renascentista, é conhecido por obras como "Mona Lisa" e por ser um exemplo de:',
    alternative_a: 'Artista especializado apenas em pintura.',
    alternative_b: 'Homem renascentista com conhecimentos diversos.',
    alternative_c: 'Artista exclusivamente religioso.',
    alternative_d: 'Pintor focado apenas em retratos.',
    alternative_e: 'Escultor dedicado apenas à arte sacra.',
    correct_answer: 'B'
  },
  {
    id: '82',
    subject: 'Artes',
    year: '2022',
    question_number: '22',
    statement: 'A Semana de Arte Moderna de 1922, realizada em São Paulo, teve como objetivo:',
    alternative_a: 'Manter as tradições artísticas europeias.',
    alternative_b: 'Renovar a arte brasileira e buscar uma identidade nacional.',
    alternative_c: 'Copiar exclusivamente os movimentos europeus.',
    alternative_d: 'Rejeitar completamente a cultura brasileira.',
    alternative_e: 'Focar apenas na arte acadêmica tradicional.',
    correct_answer: 'B'
  },
  {
    id: '83',
    subject: 'Artes',
    year: '2020',
    question_number: '18',
    statement: 'Tarsila do Amaral foi uma importante pintora brasileira que participou do movimento:',
    alternative_a: 'Barroco',
    alternative_b: 'Neoclássico',
    alternative_c: 'Modernista',
    alternative_d: 'Impressionista',
    alternative_e: 'Realista',
    correct_answer: 'C'
  },
  {
    id: '84',
    subject: 'Artes',
    year: '2019',
    question_number: '20',
    statement: 'O teatro épico, desenvolvido por Bertolt Brecht, caracteriza-se por:',
    alternative_a: 'Buscar a identificação total do público com os personagens.',
    alternative_b: 'Provocar o distanciamento crítico do espectador.',
    alternative_c: 'Focar apenas no entretenimento.',
    alternative_d: 'Evitar qualquer mensagem política ou social.',
    alternative_e: 'Seguir rigorosamente as regras do teatro clássico.',
    correct_answer: 'B'
  },
  {
    id: '85',
    subject: 'Artes',
    year: '2018',
    question_number: '16',
    statement: 'A música popular brasileira (MPB) desenvolveu-se principalmente a partir da:',
    alternative_a: 'Década de 1920.',
    alternative_b: 'Década de 1940.',
    alternative_c: 'Década de 1960.',
    alternative_d: 'Década de 1980.',
    alternative_e: 'Década de 1990.',
    correct_answer: 'C'
  },

  // Educação Física
  {
    id: '15',
    subject: 'Educação Física',
    year: '2021',
    question_number: '25',
    statement: 'A prática regular de atividades físicas traz diversos benefícios para a saúde. Entre os principais benefícios da atividade física regular, pode-se destacar:',
    alternative_a: 'Apenas o fortalecimento muscular.',
    alternative_b: 'Somente a melhora da capacidade cardiorrespiratória.',
    alternative_c: 'A melhora da saúde física, mental e social.',
    alternative_d: 'Exclusivamente a perda de peso.',
    alternative_e: 'Apenas benefícios estéticos.',
    correct_answer: 'C'
  },
  {
    id: '86',
    subject: 'Educação Física',
    year: '2023',
    question_number: '27',
    statement: 'O fair play no esporte refere-se a:',
    alternative_a: 'Vencer a qualquer custo.',
    alternative_b: 'Jogo limpo e respeito às regras e adversários.',
    alternative_c: 'Competir apenas para ganhar prêmios.',
    alternative_d: 'Ignorar as regras quando necessário.',
    alternative_e: 'Priorizar apenas o resultado final.',
    correct_answer: 'B'
  },
  {
    id: '87',
    subject: 'Educação Física',
    year: '2022',
    question_number: '24',
    statement: 'A capacidade física que permite manter um esforço por períodos prolongados é chamada de:',
    alternative_a: 'Força',
    alternative_b: 'Velocidade',
    alternative_c: 'Resistência',
    alternative_d: 'Flexibilidade',
    alternative_e: 'Coordenação',
    correct_answer: 'C'
  },
  {
    id: '88',
    subject: 'Educação Física',
    year: '2020',
    question_number: '26',
    statement: 'Os Jogos Olímpicos da Era Moderna foram criados por:',
    alternative_a: 'Pierre de Coubertin',
    alternative_b: 'Thomas Bach',
    alternative_c: 'Juan Antonio Samaranch',
    alternative_d: 'Jacques Rogge',
    alternative_e: 'Avery Brundage',
    correct_answer: 'A'
  },
  {
    id: '89',
    subject: 'Educação Física',
    year: '2019',
    question_number: '23',
    statement: 'A dança, como manifestação cultural, caracteriza-se por:',
    alternative_a: 'Ser apenas uma atividade de entretenimento.',
    alternative_b: 'Expressar aspectos culturais e sociais de um povo.',
    alternative_c: 'Ter sempre a mesma forma em todas as culturas.',
    alternative_d: 'Ser praticada apenas profissionalmente.',
    alternative_e: 'Não ter relação com a identidade cultural.',
    correct_answer: 'B'
  },
  {
    id: '90',
    subject: 'Educação Física',
    year: '2018',
    question_number: '28',
    statement: 'O aquecimento antes da atividade física tem como principal função:',
    alternative_a: 'Apenas aumentar a temperatura corporal.',
    alternative_b: 'Preparar o organismo para o esforço físico.',
    alternative_c: 'Substituir o alongamento.',
    alternative_d: 'Cansar antes do exercício principal.',
    alternative_e: 'Ser dispensável em atividades leves.',
    correct_answer: 'B'
  }
];

// Função melhorada para garantir questões verdadeiramente aleatórias
export function getRandomQuestions(count: number = 15): Question[] {
  // Cria uma cópia do array e embaralha usando algoritmo Fisher-Yates
  const availableQuestions = [...questionsData];
  
  for (let i = availableQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
  }
  
  return availableQuestions.slice(0, count);
}

export function getSubjectRecommendations(incorrectAnswers: Question[]): string[] {
  const subjects = new Set(incorrectAnswers.map(q => q.subject));
  return Array.from(subjects);
}
