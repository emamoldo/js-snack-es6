const nameList = [
    {
        name: 'Marco',
        surname: 'Rossi',
        age: '16',
    },

    {
        name: 'Luca',
        surname: 'Verdi',
        age: '45',
    },

    {
        name: 'Giovanni',
        surname: 'Bianchi',
        age: '30',
    },

    {
        name: 'Giuseppe',
        surname: 'Neri',
        age: '14',
    },

    {
        name: 'Fabrizio',
        surname: 'Rossi',
        age: '18',
    },
];


nameList.forEach ((element) => {
    if (age > 18){
        console.log(`${element.name} può giudare perchè ha ${element.age}`);
    } else {
        console.log(`${element.name} non può giudare perchè ha ${element.age}`);
    }   
});
