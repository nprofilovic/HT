const categories = [{
        id: 1,
        name: 'Školski pribor',
        tags: ['products', 'skolskiPribor'],
        count: 147,
        image: require('../assets/images/HTB-1.png')
    },
    {
        id: 2,
        name: 'Kancelarijski materijal',
        tags: ['products', 'kancelarijskiMaterijal'],
        count: 16,
        image: require('../assets/images/s-l-1.png')
    },
    {
        id: 3,
        name: 'Školski pribor',
        tags: ['products', 'skolskiPribor'],
        count: 147,
        image: require('../assets/images/HTB-1.png')
    },
    {
        id: 4,
        name: 'Kancelarijski materijal',
        tags: ['products', 'kancelarijskiMaterijal'],
        count: 16,
        image: require('../assets/images/s-l-1.png')
    },
    {
        id: 5,
        name: 'Školski pribor',
        tags: ['products', 'skolskiPribor'],
        count: 147,
        image: require('../assets/images/HTB-1.png')
    },
    {
        id: 6,
        name: 'Kancelarijski materijal',
        tags: ['products', 'kancelarijskiMaterijal'],
        count: 16,
        image: require('../assets/images/s-l-1.png')
    },

];

const products = [{
    id: 1,
    name: 'Školski ranac',
    description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
        require('../assets/images/HTB-14.png'),
    ]
}];

const profile = {
    username: 'test',
    location: 'Europe',
    email: 'contact@test.com',
    avatar: require('../assets/images/company-logo.png'),
    company_name: 'Company D.O.O>',
    proizvodi_na_cekanju: 15,
    ukupno_zaduzenje: "45 rsd",
    datum_valute: "1.1.2020.",
};

export {
    categories,
    products,
    profile,
}