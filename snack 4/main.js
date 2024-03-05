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


nameList.forEach ((item) => {
    if (item.age >= 18){
        console.log(`${item.name} può giudare perchè ha ${item.age}`);
    } else {
        console.log(`${item.name} non può giudare perchè ha ${item.age}`);
    }   
});