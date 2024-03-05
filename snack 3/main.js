const animals = [
    { 
        nome: 'gatto', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },

    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },

    { 
        nome: 'pappagallo', 
        famiglia: 'psittacidi', 
        classe: 'uccelli' 
    },

    { 
        nome: 'coniglio', 
        famiglia: 'cuniculus', 
        classe: 'mammiferi' 
    },

    { 
        nome: 'mucca', 
        famiglia: 'bovidi', 
        classe: 'mammalia' 
    },
  ]

  const animalsClass = animals.filter((animal) => {return animal.classe === 'mammiferi'});
console.log(animalsClass);