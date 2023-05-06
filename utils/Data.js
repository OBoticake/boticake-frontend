import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import bannerImg from '../src/assets/banner.svg';

export const aboutObj = {
  banner: {
    img: bannerImg,
    alt: 'banner',
  },
  name: 'Oboti Cake Confeitaria',
  address: 'Rua José da Silva, 73 - Centro - São Paulo - SP',
  infoObj: [
    {
      title: 'Pagamento',
      icon: CreditCardIcon,
    },
    {
      title: 'Informações',
      icon: InfoOutlinedIcon,
    },
    {
      title: 'Entrega',
      icon: LocationOnIcon,
    }
  ]
}

export const tabsObj = {
  tabs: [
    {
      index: 0,
      title: 'Tipos de Bolos',
      content: [
        {
          title: 'Bolo de Chocolate',
          description: 'Com camadas de bolo de chocolate macio e úmido, recheios de brigadeiro e cobertura de ganache, é uma combinação perfeita de texturas e sabores.',
          price: 'R$ 100,00',
          image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80'
        },
        {
          title: 'Bolo de Cenoura',
          description: 'Com camadas de bolo de cenoura macio e úmido, recheios de brigadeiro e cobertura de chantilly, é uma combinação perfeita de texturas e sabores.',
          price: 'R$ 90,00',
          image: 'https://images.unsplash.com/photo-1576618148332-a18871379090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80'
        },
        {
          title: 'Bolo de Limão',
          description: 'Com camadas de bolo de limão macio e úmido, recheios de cream cheese e cobertura de glacê de limão, é uma combinação perfeita de texturas e sabores.',
          price: 'R$ 110,00',
          image: 'https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
        },
      ],
    },
    {
      index: 1,
      title: 'Salgados',
      content: [
        {
          title: 'Torta de Frango',
          description: 'Com massa folhada crocante e recheio de frango desfiado com catupiry, é uma opção deliciosa para um lanche ou para uma refeição rápida.',
          price: 'R$ 70,00',
          image: 'https://images.unsplash.com/photo-1628642585518-2d63c2beab6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80'
        },
        {
          title: 'Empadão de Palmito',
          description: 'Com massa que derrete na boca e recheio cremoso de palmito, é uma opção vegetariana saborosa para um almoço ou jantar.',
          price: 'R$ 85,00',
          image: 'https://images.unsplash.com/photo-1554298128-c916518a4b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
        },
        {
          title: 'Quiche Lorraine',
          description: 'Com massa crocante e recheio de bacon, queijo e creme de leite, é uma opção clássica e deliciosa para um brunch ou para um lanche.',
          price: 'R$ 80,00',
          image: 'https://images.unsplash.com/photo-1551807501-9263ed1942d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
      ],
    },
    {
      index: 2,
      title: 'Brigadeiros',
      content: [
        {
          title: 'Brigadeiro Tradicional',
          description: 'Feito com chocolate de alta qualidade e leite condensado, é uma opção clássica e irresistível para uma sobremesa ou para um evento especial.',
          price: 'R$ 2,00/unidade',
          image: 'https://images.unsplash.com/photo-1630953899906-d16511a72558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
        {
          title: 'Brigadeiro de Leite Ninho',
          description: 'Feito com leite em pó e leite condensado, é uma opção cremosa e suave para uma sobremesa ou para uma mesa de doces.',
          price: 'R$ 2,50/unidade',
          image: 'https://images.unsplash.com/photo-1630953899439-e1b44977d777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
        {
          title: 'Brigadeiro Gourmet de Caramelo',
          description: 'Feito com caramelo e leite condensado, é uma opção sofisticada e deliciosa para um evento especial ou para presentear alguém.',
          price: 'R$ 3,00/unidade',
          image: 'https://images.unsplash.com/photo-1630953899650-0ee223bb29d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
      ],
    },
  ]
}
