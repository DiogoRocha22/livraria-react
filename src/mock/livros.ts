import capa from '../assets/capas/jogadorn1.jpg';

export interface Livro {
  id: number,
  nome: string,
  autor: string,
  categoria: string,
  descricao: string,
  imagem: string
}

export const livros: Livro[] = [
  {
    id: 1,
    nome: "Garota Exemplar",
    autor: "Gillian Flynn",
    categoria: "Mistério",
    descricao: "Livro de suspense psicológico que segue a história de Amy Dunne, uma mulher desaparecida e seu marido, Nick, que se torna o principal suspeito. Repleto de reviravoltas e manipulações, o livro explora os segredos obscuros de um casamento aparentemente perfeito.",
    imagem: capa // Usando a mesma imagem para todos os livros
  },
  {
    id: 2,
    nome: "A Verdade Sobre o Caso Harry Quebert",
    autor: "Joël Dicker",
    categoria: "Mistério",
    descricao: "Um jovem escritor investiga o mistério do assassinato de uma jovem, desvendando segredos sombrios e reviravoltas chocantes ao longo do caminho.",
    imagem: capa
  },
  {
    id: 3,
    nome: "Assassinato no Expresso Oriente",
    autor: "Agatha Christie",
    categoria: "Mistério",
    descricao: "Um detetive habilidoso investiga um assassinato enigmático a bordo do luxuoso trem Expresso Oriente, revelando uma teia de intriga e segredos.",
    imagem: capa
  },
  {
    id: 4,
    nome: "Blade Runner",
    autor: "Philip K. Dick",
    categoria: "Ficção Científica",
    descricao: "Num futuro distópico, um caçador de androides tenta distinguir entre humanos e replicantes em uma sociedade repleta de complexidade moral e existencial.",
    imagem: capa
  },
  {
    id: 5,
    nome: "2001: Uma Odisseia no Espaço",
    autor: "Arthur C. Clarke",
    categoria: "Ficção Científica",
    descricao: "Uma missão espacial descobre um monólito misterioso que desencadeia uma jornada cósmica de exploração, evolução e questionamentos existenciais.",
    imagem: capa
  },
  {
    id: 6,
    nome: "Jogador Nº 1",
    autor: "Ernest Cline",
    categoria: "Ficção Científica",
    descricao: "Em um futuro distópico, um jovem jogador embarca em uma emocionante caça ao tesouro virtual que testa suas habilidades, conhecimentos e determinação.",
    imagem: capa
  },
  {
    id: 7,
    nome: "Orgulho e Preconceito",
    autor: "Jane Austen",
    categoria: "Romance",
    descricao: "Em uma sociedade do século XIX, um romance se desenvolve entre uma mulher independente e um homem orgulhoso, superando preconceitos e desafios sociais ao longo do caminho.",
    imagem: capa
  },
  {
    id: 8,
    nome: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    categoria: "Romance",
    descricao: "Uma história de paixões tumultuosas e vingança implacável se desenrola em uma mansão isolada nas charnecas inglesas, revelando as profundezas da alma humana.",
    imagem: capa
  },
  {
    id: 9,
    nome: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    categoria: "Romance",
    descricao: "Na Era do Jazz, um homem misterioso e extravagante busca desesperadamente reconquistar o amor de sua vida, desvendando os excessos e as ilusões da alta sociedade americana.",
    imagem: capa
  },
  {
    id: 10,
    nome: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    categoria: "Fantasia",
    descricao: "Um jovem bruxo descobre seu destino no mundo da magia enquanto enfrenta desafios e perigos.",
    imagem: capa
  },
  {
    id: 11,
    nome: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    categoria: "Fantasia",
    descricao: "Um grupo de crianças vive aventuras extraordinárias ao entrar em um mundo mágico repleto de criaturas fantásticas, batalhas épicas e lições morais profundas.",
    imagem: capa
  },
  {
    id: 12,
    nome: "A Guerra dos Tronos",
    autor: "George R.R. Martin",
    categoria: "Fantasia",
    descricao: "Em um reino medieval intrincado, várias famílias nobres travam uma batalha brutal pelo controle do trono, enquanto forças sobrenaturais ameaçam o equilíbrio do poder.",
    imagem: capa
  },
];
