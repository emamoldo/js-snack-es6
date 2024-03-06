const footballTeams =[
    {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Manchester City',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Real Madrid',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Barcellona',
        points: 0,
        fouls: 0,
    },
];

// Function for Random Points
function points() {
    for (i = 0; i < 5; i++){
       const punti = Math.floor(Math.random()*100);
       //console.log(punti);
   }
}
points();

// Function for Random Fouls
function fauls() {
    for (i = 0; i < 5; i++){
       const falli = Math.floor(Math.random()*10);
       //console.log(falli);
   }
}

var {name, fauls} = footballTeams;
console.log(name , fauls);
