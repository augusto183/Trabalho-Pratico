// Estrutura de dados para o portal de notícias

// Dados do autor
const authorData = {
    name: "Nome do Aluno",
    course: "Engenharia de Software",
    class: "FS0124",
    socialMedia: [
      { name: "Facebook", url: "#", icon: "fa-facebook-f" },
      { name: "Twitter", url: "#", icon: "fa-twitter" },
      { name: "LinkedIn", url: "#", icon: "fa-linkedin-in" },
      { name: "GitHub", url: "#", icon: "fa-github" }
    ]
  };
  
  // Dados de notícias
  const newsData = [
    {
      id: 1,
      title: "Novo acordo climático é firmado entre países do G20",
      excerpt: "Em uma reunião histórica, líderes mundiais se comprometem com metas ambiciosas para redução de emissões de carbono até 2030.",
      content: `<p class="mb-4">Em uma cúpula histórica realizada nesta semana, os líderes das maiores economias do mundo firmaram um acordo sem precedentes para combater as mudanças climáticas, estabelecendo metas mais ambiciosas do que as previamente acordadas no Acordo de Paris.</p>
      
      <p class="mb-4">O novo pacto, que será formalmente ratificado nos próximos meses, prevê a redução de 65% das emissões de gases de efeito estufa até 2030, em comparação com os níveis de 1990, além de estabelecer um fundo de US$ 100 bilhões anuais para financiar a transição energética em países em desenvolvimento.</p>
      
      <h3 class="text-lg font-bold my-4">Pontos principais do acordo</h3>
      
      <p class="mb-4">Entre os principais compromissos assumidos pelos países signatários estão a eliminação gradual de subsídios a combustíveis fósseis até 2027, o compromisso de atingir 70% da matriz energética baseada em fontes renováveis até 2035, e o estabelecimento de um sistema global de precificação de carbono.</p>
      
      <p class="mb-4">"Este é um momento decisivo na nossa luta coletiva contra a crise climática", declarou o secretário-geral da ONU, destacando que pela primeira vez há um consenso real entre nações desenvolvidas e em desenvolvimento sobre a urgência e a escala das ações necessárias.</p>
      
      <h3 class="text-lg font-bold my-4">Impactos econômicos e sociais</h3>
      
      <p class="mb-4">Especialistas estimam que o cumprimento das metas do acordo pode gerar mais de 20 milhões de novos empregos no setor de energia limpa globalmente, além de prevenir custos relacionados a desastres climáticos que poderiam chegar a US$ 5 trilhões nas próximas décadas.</p>
      
      <p class="mb-4">O acordo também inclui medidas para garantir uma "transição justa", com programas de requalificação profissional para trabalhadores de setores intensivos em carbono e assistência específica para comunidades vulneráveis mais afetadas pelas mudanças climáticas.</p>
      
      <h3 class="text-lg font-bold my-4">Próximos passos</h3>
      
      <p>Uma comissão internacional será formada para monitorar o cumprimento das metas, com relatórios de progresso obrigatórios a cada dois anos. Países que não cumprirem suas metas poderão enfrentar sanções comerciais, uma novidade em acordos climáticos que demonstra o aumento do comprometimento global com a questão.</p>`,
      author: "Carlos Mendes",
      date: "15 Ago 2023",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      readTime: "6 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">ACORDO CLIMÁTICO GLOBAL</h3>
      <p class="mb-3">O acordo representa o mais ambicioso conjunto de compromissos climáticos já estabelecido, com mecanismos inéditos de implementação e verificação. A participação unânime dos países do G20, responsáveis por 80% das emissões globais, é considerada crucial para o sucesso da iniciativa.</p>
      <p>O documento final inclui 37 artigos detalhando obrigações específicas para diferentes grupos de países, com prazos e métricas para avaliação de progresso, além de mecanismos de financiamento que superam R$ 500 bilhões ao longo da próxima década.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Líderes mundiais reunidos em conferência" },
        { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Paisagem natural representando a biodiversidade" },
        { url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Vista da Terra do espaço" },
        { url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Turbinas eólicas em um campo verde" }
      ]
    },
    {
      id: 2,
      title: "Avanços na medicina: nova vacina promete combater variantes de COVID-19",
      excerpt: "Cientistas desenvolvem vacina de última geração com capacidade de neutralizar múltiplas variantes do coronavírus.",
      content: `<p class="mb-4">Uma equipe internacional de pesquisadores anunciou hoje o desenvolvimento de uma vacina inovadora contra a COVID-19, que demonstrou eficácia superior a 95% contra todas as variantes conhecidas do vírus, incluindo aquelas que têm mostrado capacidade de escapar da imunidade gerada por vacinas anteriores.</p>
      
      <p class="mb-4">A nova vacina, denominada CoviShield-X, utiliza uma tecnologia pioneira que combina a plataforma de mRNA com nano-anticorpos sintéticos, permitindo uma resposta imunológica mais ampla e duradoura no organismo.</p>
      
      <h3 class="text-lg font-bold my-4">Resultados dos testes clínicos</h3>
      
      <p class="mb-4">Os resultados dos testes de fase 3, realizados com mais de 45.000 voluntários em 12 países, superaram as expectativas iniciais dos cientistas. Além da alta taxa de proteção contra infecção, a vacina demonstrou reduzir em 99% o risco de hospitalização mesmo em pacientes imunocomprometidos.</p>
      
      <p class="mb-4">"Este é um salto quântico na nossa capacidade de combater não apenas o SARS-CoV-2, mas potencialmente outros vírus respiratórios", afirmou a Dra. Amelia Chang, líder da pesquisa. "A tecnologia desenvolvida pode ser rapidamente adaptada para responder a novas variantes ou até mesmo novos patógenos que possam surgir no futuro."</p>
      
      <h3 class="text-lg font-bold my-4">Vantagens adicionais</h3>
      
      <p class="mb-4">Entre os diferenciais da nova vacina estão a estabilidade à temperatura ambiente por até um mês, eliminando a necessidade de cadeia de frio para distribuição, e a capacidade de gerar imunidade nas mucosas, reduzindo significativamente a transmissão do vírus.</p>
      
      <p class="mb-4">Outra característica importante é a dose única necessária para a imunização completa, o que simplifica logística e aumenta a adesão da população, especialmente em regiões com sistemas de saúde fragilizados.</p>
      
      <h3 class="text-lg font-bold my-4">Produção e distribuição</h3>
      
      <p>As agências reguladoras de diversos países já iniciaram o processo de análise para aprovação emergencial, e a expectativa é que as primeiras doses estejam disponíveis para distribuição global dentro de três meses. A tecnologia foi licenciada sem patentes para permitir produção em larga escala em países de baixa e média renda.</p>`,
      author: "Dra. Sophia Kim",
      date: "10 Ago 2023",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      readTime: "5 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">AVANÇO MÉDICO REVOLUCIONÁRIO</h3>
      <p class="mb-3">A nova tecnologia de vacina representa um marco na imunologia, combinando três plataformas distintas que trabalham em sinergia para fornecer proteção abrangente contra múltiplas variantes virais simultaneamente.</p>
      <p class="mb-3">Testes demonstraram eficácia duradoura por pelo menos 18 meses sem necessidade de doses de reforço, mesmo contra variantes que surgem após a vacinação, graças ao mecanismo inovador de "resposta imune adaptativa programada".</p>
      <p>Além da proteção contra COVID-19, pesquisas preliminares sugerem potencial para aplicação dessa tecnologia contra outros vírus respiratórios como influenza e VSR, abrindo caminho para vacinas combinadas no futuro próximo.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Laboratório de pesquisa médica" },
        { url: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Vacina sendo preparada" },
        { url: "https://images.unsplash.com/photo-1600443271879-51c113fcab01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Profissional de saúde com equipamento de proteção" },
        { url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Microscópio em laboratório" }
      ]
    },
    {
      id: 3,
      title: "Mercado de trabalho em transformação: profissões do futuro",
      excerpt: "Estudo revela quais serão as áreas mais promissoras nos próximos 10 anos com o avanço da inteligência artificial.",
      content: `<p class="mb-4">Um estudo abrangente conduzido por pesquisadores do Instituto de Tecnologia e Trabalho (ITT) aponta para uma transformação radical no mercado laboral global nos próximos 10 anos, com o surgimento de novas profissões e o declínio de carreiras tradicionais, principalmente devido à crescente adoção de inteligência artificial e automação.</p>
      
      <p class="mb-4">A pesquisa, que analisou tendências em mais de 45 países e consultou mais de 300 especialistas em diversas áreas, prevê que até 40% das funções atualmente desempenhadas por humanos serão automatizadas até 2033, mas também estima o surgimento de 85 milhões de novos postos de trabalho em áreas emergentes.</p>
      
      <h3 class="text-lg font-bold my-4">Profissões em ascensão</h3>
      
      <p class="mb-4">Entre as áreas identificadas como mais promissoras destacam-se os especialistas em ética de IA, designers de experiências de realidade expandida, consultores de biohacking e medicina personalizada, gestores de economia circular, e técnicos em infraestrutura verde.</p>
      
      <p class="mb-4">"Estamos testemunhando não apenas o surgimento de novas funções, mas de campos inteiros de conhecimento que sequer existiam há cinco anos", explica o Dr. Miguel Ferreira, coordenador do estudo. "As carreiras com maior potencial de crescimento são aquelas que combinam conhecimento técnico com habilidades tipicamente humanas como criatividade, empatia e pensamento sistêmico."</p>
      
      <h3 class="text-lg font-bold my-4">Impacto da automação</h3>
      
      <p class="mb-4">Apesar das novas oportunidades, o relatório alerta para os desafios de transição, especialmente para profissionais em setores altamente suscetíveis à automação, como atendimento ao cliente, processamento de dados, contabilidade básica e operações logísticas.</p>
      
      <p class="mb-4">O estudo estima que cerca de 375 milhões de trabalhadores globalmente (14% da força de trabalho) precisarão mudar de categoria ocupacional até 2030, o que exigirá programas massivos de requalificação profissional.</p>
      
      <h3 class="text-lg font-bold my-4">Recomendações para profissionais e instituições</h3>
      
      <p class="mb-4">O relatório recomenda que profissionais priorizem o desenvolvimento de competências adaptativas e multidisciplinares, com ênfase em aprendizado contínuo. Para instituições de ensino, sugere uma reformulação radical dos currículos, com ciclos de atualização mais curtos e maior integração com o setor produtivo.</p>
      
      <p>Já para governos, o estudo indica a necessidade de políticas proativas que incluam renda básica temporária para trabalhadores em transição, incentivos fiscais para programas de requalificação corporativa, e reformulação dos sistemas de seguridade social para acomodar carreiras mais fluidas e intermitentes.</p>`,
      author: "Amanda Torres",
      date: "05 Ago 2023",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      readTime: "7 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">TRANSFORMAÇÃO DO MERCADO DE TRABALHO</h3>
      <p class="mb-3">O estudo baseou-se em análises de big data de mais de 8 milhões de ofertas de emprego globais nos últimos cinco anos, entrevistas com CEOs das 500 maiores empresas do mundo e simulações econômicas avançadas utilizando modelos preditivos de IA.</p>
      <p class="mb-3">Os resultados apontam para uma polarização crescente do mercado, com aumento significativo de demanda por profissionais altamente qualificados em áreas técnicas específicas e criativas, enquanto funções intermediárias de qualificação média sofrerão o maior impacto da automação.</p>
      <p>Entre as habilidades identificadas como "à prova de futuro" destacam-se: pensamento crítico complexo, inteligência emocional, criatividade aplicada, gestão de equipes multiculturais e alfabetização avançada em dados e sistemas.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Profissional em ambiente de trabalho moderno" },
        { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Equipe em reunião de trabalho" },
        { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Robô trabalhando ao lado de humano" },
        { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Pessoa trabalhando com tecnologia avançada" }
      ]
    },
    {
      id: 4,
      title: "Nova política econômica promete estabilizar mercados",
      excerpt: "Medidas anunciadas pelo governo visam controlar inflação e atrair investimentos estrangeiros.",
      content: `<p class="mb-4">O Ministério da Economia anunciou hoje um abrangente pacote de medidas econômicas que visa estabilizar o mercado financeiro, reduzir a inflação e criar um ambiente mais favorável para investimentos nacionais e estrangeiros nos próximos anos.</p>
      
      <p class="mb-4">O plano, denominado "Programa de Estabilidade e Crescimento Sustentável", inclui uma combinação de políticas fiscais, monetárias e regulatórias que serão implementadas gradualmente ao longo dos próximos 18 meses.</p>
      
      <h3 class="text-lg font-bold my-4">Principais medidas</h3>
      
      <p class="mb-4">Entre as iniciativas centrais do programa estão a redução gradual da taxa básica de juros, simplificação do sistema tributário para empresas de pequeno e médio porte, criação de um fundo soberano para investimentos em infraestrutura, e novas regras para controle de gastos públicos.</p>
      
      <p class="mb-4">"Este conjunto de medidas representa um novo curso para nossa política econômica, baseado em responsabilidade fiscal, previsibilidade regulatória e incentivos ao setor produtivo", afirmou a ministra da Economia durante coletiva de imprensa.</p>
      
      <h3 class="text-lg font-bold my-4">Reação do mercado</h3>
      
      <p class="mb-4">A reação inicial do mercado financeiro foi positiva, com alta de 2,7% no principal índice da bolsa de valores e valorização da moeda nacional frente ao dólar. Analistas de instituições financeiras classificaram o pacote como "coerente" e "tecnicamente sólido".</p>
      
      <p class="mb-4">No entanto, alguns economistas destacam desafios para a implementação completa das medidas, especialmente aquelas que exigem aprovação legislativa ou mudanças constitucionais.</p>
      
      <h3 class="text-lg font-bold my-4">Impactos esperados</h3>
      
      <p class="mb-4">De acordo com projeções do próprio Ministério, o pacote deve resultar em crescimento adicional de 1,5% do PIB nos próximos dois anos, redução da taxa de desemprego para menos de 8% até o final de 2024, e queda da inflação para o centro da meta já no próximo ano.</p>
      
      <p>Empresários de diversos setores manifestaram otimismo com as medidas, destacando especialmente a previsibilidade trazida pelo novo marco regulatório para investimentos de longo prazo e a redução da carga burocrática para operações cotidianas.</p>`,
      author: "Ricardo Almeida",
      date: "01 Ago 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      readTime: "4 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">RESUMO DO PACOTE ECONÔMICO</h3>
      <p class="mb-3">O pacote econômico anunciado pelo governo inclui 27 medidas divididas em quatro eixos principais: estabilidade monetária, simplificação tributária, atração de investimentos e responsabilidade fiscal.</p>
      <p class="mb-3">Entre as medidas mais impactantes está a criação de um sistema unificado de tributação para pequenas e médias empresas, que promete reduzir em até 30% o tempo gasto com obrigações acessórias.</p>
      <p>O programa prevê a criação de aproximadamente 2 milhões de empregos diretos e indiretos nos próximos 3 anos, principalmente nos setores de infraestrutura, tecnologia e energia renovável.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Gráficos de mercado financeiro" },
        { url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Reunião de negócios" },
        { url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Prédios comerciais" },
        { url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Calculadora e documentos financeiros" }
      ]
    },
    {
      id: 5,
      title: "Startup brasileira de tecnologia recebe investimento bilionário",
      excerpt: "Empresa de inteligência artificial aplicada à agricultura atrai atenção de investidores internacionais.",
      content: `<p class="mb-4">A AgriTech Brasil, startup especializada em soluções de inteligência artificial para otimização de processos agrícolas, anunciou hoje que recebeu um aporte de US$ 1,2 bilhão (aproximadamente R$ 6 bilhões) de um consórcio de investidores liderado pelo fundo de venture capital Sequoia Capital e pelo SoftBank Vision Fund.</p>
      
      <p class="mb-4">Este investimento representa a maior rodada de captação já realizada por uma empresa de tecnologia na América Latina e posiciona a AgriTech Brasil como o mais recente "unicórnio" brasileiro, com avaliação total estimada em US$ 4,7 bilhões.</p>
      
      <h3 class="text-lg font-bold my-4">Tecnologia inovadora</h3>
      
      <p class="mb-4">Fundada há apenas quatro anos por três pesquisadores da Embrapa e um especialista em machine learning, a AgriTech desenvolveu um sistema integrado que combina sensores de solo, drones, imagens de satélite e algoritmos avançados de aprendizado de máquina para otimizar todos os aspectos da produção agrícola.</p>
      
      <p class="mb-4">A plataforma, que já é utilizada em mais de 3 milhões de hectares de cultivo no Brasil, Argentina e Colômbia, demonstrou capacidade de aumentar a produtividade em até 32% enquanto reduz o uso de água em 40% e de fertilizantes em 25%, diminuindo simultaneamente os custos e o impacto ambiental.</p>
      
      <h3 class="text-lg font-bold my-4">Planos de expansão</h3>
      
      <p class="mb-4">De acordo com Ana Luiza Pereira, CEO e co-fundadora da empresa, o aporte será utilizado principalmente para financiar a expansão internacional, com foco inicial nos mercados dos Estados Unidos, Índia e África subsaariana, além de acelerar o desenvolvimento de novas funcionalidades da plataforma.</p>
      
      <p class="mb-4">"Nossa missão é transformar a agricultura global, tornando-a mais eficiente, lucrativa e sustentável simultaneamente", afirmou Pereira. "Este investimento nos dará o impulso necessário para escalar nossa solução para mercados-chave em todos os continentes nos próximos 24 meses."</p>
      
      <h3 class="text-lg font-bold my-4">Impacto econômico e social</h3>
      
      <p class="mb-4">Além da expansão internacional, a empresa planeja abrir um novo centro de pesquisa e desenvolvimento em Campinas (SP) que deve gerar mais de 400 postos de trabalho de alta qualificação para engenheiros agrônomos, cientistas de dados, especialistas em sensoriamento remoto e desenvolvedores de software.</p>
      
      <p>A startup também anunciou um programa de parceria com pequenos produtores, que permitirá acesso facilitado à tecnologia para agricultores familiares, comunidades tradicionais e assentamentos rurais, com potencial para beneficiar mais de 100 mil famílias apenas no Brasil nos próximos cinco anos.</p>`,
      author: "Juliana Costa",
      date: "28 Jul 2023",
      image: "https://images.unsplash.com/photo-1506827961861-9ed1e1dca359?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      readTime: "5 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">A REVOLUÇÃO DA AGRITECH</h3>
      <p class="mb-3">A tecnologia desenvolvida pela AgriTech Brasil integra mais de 40 variáveis ambientais e agronômicas em tempo real para criar "receitas de manejo" personalizadas para cada talhão de cultivo, com atualizações a cada 4 horas baseadas nas condições climáticas e no estágio de desenvolvimento das plantas.</p>
      <p class="mb-3">Em testes independentes realizados pela Universidade de São Paulo (USP), o sistema demonstrou capacidade de prever com 94% de precisão a produtividade final das safras já no primeiro mês após o plantio, permitindo intervenções precoces para maximizar resultados.</p>
      <p>A empresa recentemente estabeleceu parceria com a NASA e a Agência Espacial Europeia para integrar dados de novos satélites de observação terrestre, aumentando ainda mais a precisão de seus algoritmos preditivos.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1506827961861-9ed1e1dca359?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Drone sobrevoando plantação" },
        { url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Plantação de soja" },
        { url: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Sensores instalados em plantação" },
        { url: "https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Agricultor utilizando tablet no campo" }
      ]
    },
    {
      id: 6,
      title: "Descoberta arqueológica revela civilização desconhecida na Amazônia",
      excerpt: "Pesquisadores encontram vestígios de sociedade complexa que existiu há mais de 2.000 anos na região amazônica.",
      content: `<p class="mb-4">Uma equipe internacional de arqueólogos anunciou hoje a descoberta de vestígios de uma civilização avançada e previamente desconhecida que floresceu na bacia amazônica entre 2.500 e 1.500 anos atrás. O achado, localizado na região de confluência dos rios Negro e Solimões, inclui uma rede de cidades interconectadas, estruturas cerimoniais complexas e evidências de gestão ambiental em larga escala.</p>
      
      <p class="mb-4">Segundo os pesquisadores, a descoberta revoluciona o entendimento da pré-história amazônica e desafia a noção tradicional de que a floresta tropical não poderia sustentar sociedades densamente povoadas e complexas antes da chegada dos europeus.</p>
      
      <h3 class="text-lg font-bold my-4">Extensão do achado</h3>
      
      <p class="mb-4">Utilizando a tecnologia de sensoriamento remoto LiDAR, que permite "enxergar" através da cobertura vegetal, os cientistas mapearam mais de 30 assentamentos urbanos distribuídos em uma área de aproximadamente 10.000 km², interligados por uma rede de estradas elevadas de até 20 metros de largura e canais de irrigação.</p>
      
      <p class="mb-4">A maior das cidades identificadas abrigava uma população estimada de 10.000 pessoas e apresentava planejamento urbano sofisticado, com áreas residenciais, administrativas e cerimoniais claramente delimitadas, além de um observatório astronômico primitivo.</p>
      
      <h3 class="text-lg font-bold my-4">Avanços tecnológicos</h3>
      
      <p class="mb-4">As escavações iniciais revelaram evidências de metalurgia avançada, com peças decorativas e ferramentas de cobre, tecnologia de cerâmica sofisticada, e um sistema de escrita ainda não decifrado preservado em pedra e cerâmica.</p>
      
      <p class="mb-4">"O que estamos vendo aqui é uma sociedade que desenvolveu soluções tecnológicas e organizacionais altamente adaptadas ao ambiente amazônico", explica a Dra. Mariana Santos, arqueóloga brasileira e líder do projeto. "Eles não apenas sobreviveram na floresta tropical, mas prosperaram através de sistemas inovadores de gestão ambiental que podemos apenas começar a compreender."</p>
      
      <h3 class="text-lg font-bold my-4">Manejo ambiental</h3>
      
      <p class="mb-4">Uma das descobertas mais surpreendentes foi a identificação de extensas áreas de "terra preta antropogênica" - solo artificialmente enriquecido através de técnicas desenvolvidas pela população antiga - cobrindo mais de 7.000 hectares. Estas áreas apresentam fertilidade excepcional mesmo após milênios e parecem ter sido parte de um sistema agrícola intensivo que sustentava a população urbana.</p>
      
      <p>Além disso, análises preliminares indicam que a civilização praticava manejo florestal em grande escala, enriquecendo áreas da floresta com espécies úteis como castanheiras, açaí e cacau, em um sistema que alguns pesquisadores descrevem como "agroflorestas pré-históricas" e que pode ter influenciado significativamente a composição atual da floresta amazônica.</p>`,
      author: "Dr. Paulo Mendes",
      date: "22 Jul 2023",
      image: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      readTime: "6 min de leitura",
      generalInfo: `<h3 class="text-lg font-bold mb-3">CIVILIZAÇÃO AMAZÔNICA ANCESTRAL</h3>
      <p class="mb-3">A datação por radiocarbono indica que a civilização atingiu seu auge por volta de 300 a.C., mantendo-se estável por aproximadamente 800 anos antes de entrar em declínio gradual que culminou em seu desaparecimento por volta de 900 d.C.</p>
      <p class="mb-3">Evidências de redes de comércio sugerem que esta sociedade mantinha contato com culturas andinas e caribenhas, trocando bens como plumas exóticas, ouro, obsidiana e possivelmente conhecimentos astronômicos e agrícolas.</p>
      <p>O sítio arqueológico, temporariamente denominado "Complexo Arawak", está sendo considerado para nomeação como Patrimônio Mundial pela UNESCO e deve abrir para pesquisas interdisciplinares expandidas no próximo ano.</p>`,
      images: [
        { url: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Floresta Amazônica" },
        { url: "https://images.unsplash.com/photo-1575995872537-3793d29d9c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Escavação arqueológica" },
        { url: "https://images.unsplash.com/photo-1566159199244-4161f99f5e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Artefato arqueológico" },
        { url: "https://images.unsplash.com/photo-1565703348945-bde2a12f5a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Rio na Amazônia" }
      ]
    }
  ];