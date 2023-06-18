import { createSlice } from "@reduxjs/toolkit";
import airpod from "assets/items/airpod.png";
import almofadaAssento from "assets/items/assento.png";
import assistenteVirtualTela from "assets/items/assistente-virtual-tela.png";
import assistenteVirtual from "assets/items/assistente-virtual.png";
import cadeira from "assets/items/cadeira.png";
import caderno from "assets/items/caderno.png";
import caixaSomBluetooth from "assets/items/caixa-som-bluetooth.png";
import caixaSom from "assets/items/caixa-som.png";
import capaVolanteCouro from "assets/items/capa-volante-couro.png";
import capaVolanteCristais from "assets/items/capa-volante-cristais.png";
import console1 from "assets/items/console-1.png";
import console2 from "assets/items/console-2.png";
import guardaTreco from "assets/items/guarda-treco.png";
import jogo1 from "assets/items/jogo-1.png";
import jogo2 from "assets/items/jogo-2.png";
import leitorLivros from "assets/items/leitor-livros.png";
import manete from "assets/items/manete.png";
import miniSystem from "assets/items/mini-system.png";
import organizadorLateral from "assets/items/organizador-lateral.png";
import organizadorPastas from "assets/items/organizador-pastas.png";
import papel from "assets/items/papel.png";
import suporteVeicular from "assets/items/suporte-veicular.png";
import tablet from "assets/items/tablet.png";
import tv50 from "assets/items/tv-50.png";
import tv60 from "assets/items/tv-60.png";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    title: "Assistente virtual",
    description:
      'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um sound completo.',
    picture: assistenteVirtual,
    favorite: false,
    price: 285,
    id: uuid(),
    category: "eletronics",
  },
  {
    title: "AirPods com Estojo de Recarga",
    description:
      "Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.",
    picture: airpod,
    favorite: false,
    price: 900,
    id: uuid(),
    category: "eletronics",
  },
  {
    title: "Tablet Wi-Fi",
    description:
      "Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.",
    picture: tablet,
    favorite: false,
    price: 637,
    id: uuid(),
    category: "eletronics",
  },
  {
    title: "Assistente virtual com tela",
    description:
      'Desenvolvido para se mover com você: com um display HD de 10,1" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem sound direcional premium e de alta qualidade.',
    picture: assistenteVirtualTela,
    favorite: false,
    price: 1600,
    id: uuid(),
    category: "eletronics",
  },
  {
    title: "Leitor de livros digitais",
    description:
      'O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.',
    picture: leitorLivros,
    favorite: false,
    price: 447,
    id: uuid(),
    category: "eletronics",
  },
  {
    title: "Almofada de assento",
    description:
      "Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.",
    picture: almofadaAssento,
    favorite: false,
    price: 45.9,
    id: uuid(),
    category: "automotive",
  },
  {
    title: "Capa de volante de couro",
    description:
      "Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.",
    picture: capaVolanteCouro,
    favorite: false,
    price: 150,
    id: uuid(),
    category: "automotive",
  },
  {
    title: "Organizador lateral",
    description:
      "Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.",
    picture: organizadorLateral,
    favorite: false,
    price: 149.9,
    id: uuid(),
    category: "automotive",
  },
  {
    title: "Capa de volante de cristais",
    description:
      "Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ",
    picture: capaVolanteCristais,
    favorite: false,
    price: 290,
    id: uuid(),
    category: "automotive",
  },
  {
    title: "Suporte Veicular",
    description:
      "Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.",
    picture: suporteVeicular,
    favorite: false,
    price: 59.9,
    id: uuid(),
    category: "automotive",
  },
  {
    title: "Console",
    description:
      "O console que está em pré-venda oferece novas possibilidades de jogabilidade que você nunca imaginou. Além disso, você também pode baixar games digitais, Experimente o carregamento extremamente rápido do SSD de 825GB com ultra-velocidade, uma imersão mais profunda com suporte à resposta tátil, gatilhos adaptáveis e áudio 3D.",
    picture: console1,
    favorite: false,
    price: 4300,
    id: uuid(),
    category: "games",
  },
  {
    title: "Jogo para console",
    description:
      "Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.",
    picture: jogo1,
    favorite: false,
    price: 299.9,
    id: uuid(),
    category: "games",
  },
  {
    title: "Console",
    description:
      "Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.",
    picture: console2,
    favorite: false,
    price: 4349,
    id: uuid(),
    category: "games",
  },
  {
    title: "Controle joystick sem fio",
    description:
      "Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.",
    picture: manete,
    favorite: false,
    price: 279,
    id: uuid(),
    category: "games",
  },
  {
    title: "Jogo para console",
    description:
      "Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.",
    picture: jogo2,
    favorite: false,
    price: 349.9,
    id: uuid(),
    category: "games",
  },
  {
    title: "Organizador de Mesa",
    description:
      "Moderno, funcional e versátil com acabamento em plástico de alta qualidade e construção robusta que se adapta a qualquer ambiente. (5 compartimentos e 1 divisão na parte traseira). Em sua área de trabalho, mantenha tudo limpo e organizado, como caneta, lápis, tesoura, clipes, notas adesivas, acessórios e muito mais para economizar espaço com estilo.",
    picture: guardaTreco,
    favorite: false,
    price: 19.9,
    id: uuid(),
    category: "office",
  },
  {
    title: "Caderno Inteligente",
    description:
      "Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes",
    picture: caderno,
    favorite: false,
    price: 285,
    id: uuid(),
    category: "office",
  },
  {
    title: "Cadeira de Escritório",
    description:
      "Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.",
    picture: cadeira,
    favorite: false,
    price: 629,
    id: uuid(),
    category: "office",
  },
  {
    title: "Papel Sulfite A4 75g 500 folhas",
    description:
      "Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.",
    picture: papel,
    favorite: false,
    price: 27.6,
    id: uuid(),
    category: "office",
  },
  {
    title: "Arquivo Estreito com Furação",
    description:
      "Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.",
    picture: organizadorPastas,
    favorite: false,
    price: 44.9,
    id: uuid(),
    category: "office",
  },
  {
    title: 'TV Smart 50"',
    description:
      'A Smart TV LED 50" equipada com a tecnologia de Business TV que permite configurar a TV tanto para o modo residencial quanto para o modo hotel, trazendo uma maior variedade de configurações e personalizações para sua TV. Além de possui uma ótima qualidade de imagem 4K.',
    picture: tv50,
    favorite: false,
    price: 2600,
    id: uuid(),
    category: "sound",
  },
  {
    title: 'Smart TV 60" 4K UHD',
    description:
      'Smart TV LG 60" 4K UHD WiFi Bluetooth Inteligência Artificial, Painel de Controle, Processamento Natural de Linguagem, AI Recommendation, Otimizador de Games, Channels, Edição Inteligente de Apps e Media Player.',
    picture: tv60,
    favorite: false,
    price: 3359,
    id: uuid(),
    category: "sound",
  },
  {
    title: "Caixa de Som",
    description:
      "A caixa de sound 710 à prova de respingos transforma seu próximo evento em uma verdadeira festa, show ou balada. Show de luzes único e colorido sincronizado com seu aparelho de celular. Botões minimalistas e intuitivos no painel superior e o aplicativo permitem criar experiências musicais e visuais de alto nível. Com luzes estroboscópicas piscantes personalizáveis e o sound incrível do conjunto duplo de tweeters e woofers ricos em graves.",
    picture: caixaSom,
    favorite: false,
    price: 5817.33,
    id: uuid(),
    category: "sound",
  },
  {
    title: "Caixa de Som Bluetooth",
    description:
      "Caixa de sound oferece o ousado sound com driver de longa excursão otimizado, tweeter separado e dois radiadores de graves. Até 20 horas de reprodução e um prático powerbank para manter carregados os dispositivos que fazem a festa a noite toda.",
    picture: caixaSomBluetooth,
    favorite: false,
    price: 1199,
    id: uuid(),
    category: "sound",
  },
  {
    title: "Mini System com Função karaokê",
    description:
      "Moderno e superpotente, o Mini System vai reproduzir suas músicas com qualidade máxima nos mais diversos formatos, como MP3, WMA CD, CD-R e CD-RW. E, se a ideia for promover festas e encontros animados, a função karaokê, a conexão Bluetooth e as duas portas USB serão bastante úteis.",
    picture: miniSystem,
    favorite: false,
    price: 782.91,
    id: uuid(),
    category: "sound",
  },
];

const itemSlice = createSlice({
  name: "itemsSlicer",
  initialState,
  reducers: {
    changeFavorite(state, { payload }) {
      // is not the state of the store
      state.map((item) => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    },
  },
});

export const { changeFavorite } = itemSlice.actions;

export default itemSlice.reducer;
