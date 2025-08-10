import { ProductNames } from '@app-types/productNames';
import aveelon from './../../../assets/images/banners/aveelon.png';
import offiwebsite from './../../../assets/images/banners/offiwebsite.png';
import ozimki from './../../../assets/images/banners/ozimki.png';
import sanaup from './../../../assets/images/banners/sanaup.png';

export const getContentData = (namePage: string) => {
  switch (namePage) {
    case ProductNames.SANA_UP:
      return {
        title: 'SanaUp',
        description: 'product.SanaUp.description',
        src: sanaup,
        link: 'https://sanaup.com'
      };

    case ProductNames.OFFIWEBSITE:
      return {
        title: 'Offiwebsite',
        description: 'product.Offiwebsite.description',
        src: offiwebsite,
        link: 'https://offiwebsite.com'
      };

    case ProductNames.AVEELON:
      return {
        title: 'Aveelon',
        description: 'product.Aveelon.description',
        src: aveelon,
        link: 'https://aveelon.com'
      };

    case ProductNames.OZIMKI:
      return {
        title: 'Ozimki',
        description: 'product.Ozimki.description',
        src: ozimki,
        link: 'https://ozimki.com'
      };

    default:
      return {
        title: 'SanaUp',
        description: 'product.SanaUp.description',
        src: sanaup,
        link: 'https://sanaup.com'
      };
  }
};
