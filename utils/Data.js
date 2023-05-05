import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
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
      title: 'Contatos',
      icon: ChatBubbleOutlineIcon,
    },
    {
      title: 'Entrega',
      icon: LocationOnIcon,
    }
  ]
}