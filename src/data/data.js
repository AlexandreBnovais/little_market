import { Theme } from '../ui';

export const someData = [
    {
        id: 1,
        title: 'Frutas',
        price: "50,00",
        itens: "5",
        date: '27/05/2024',
        imageId: require('../assets/fruits.png'),
        background: Theme.Colors.GREENCARD
    },
    {
        id: 2,
        title: 'Diversos',
        price: "35,00",
        itens: "6",
        date: '20/05/2024',
        imageId: require('../assets/grocery.png'),
        background: Theme.Colors.BLUECARD
    },
    {
        id: 3,
        title: 'Açougue',
        price: "56,44",
        itens: "3",
        date: '20/05/2024',
        imageId: require('../assets/meats.png'),
        background: Theme.Colors.REDCARD
    },
    {
        id: 4,
        title: 'Bebidas',
        price: "56,44",
        itens: "4",
        date: '20/05/2024',
        imageId: require('../assets/drinks.png'),
        background: Theme.Colors.EXPCARD
    }
    
]; 

