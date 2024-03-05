const cars = [
    {
        marca: "Tesla",
        modello: "Model-S",
        alimentazione : "Elettrico",
    },

    {
        marca: "Ferrari",
        modello: "F-40",
        alimentazione : "Benzina",
    },

    {
        marca: "Dacia",
        modello: "Lodgy Family",
        alimentazione : "Diesel",
    },

    {
        marca: "Porche",
        modello: "911 Turbo S",
        alimentazione : "Benzina",
    },

    {
        marca: "Nissan",
        modello: "Skyline R-34",
        alimentazione : "Benzina",
    },

    {
        marca: "Audi",
        modello: "RS6",
        alimentazione : "Ibrida",
    },

    {
        marca: "Fiat",
        modello: "Marea",
        alimentazione : "Benzina",
    },

    {
        marca: "Nissan",
        modello: "Quashqai",
        alimentazione : "Diesel",
    },

    {
        marca: "Volkswagen",
        modello: "Polo",
        alimentazione : "Diesel",
    },

    {
        marca: "Citroen",
        modello: "Ami",
        alimentazione : "Elettrico",
    },
]

const petrolCars = cars.filter((car) => {return car.alimentazione === 'Benzina'});
console.log(petrolCars);

const dieselCars = cars.filter((car) => {return car.alimentazione === 'Diesel'});
console.log(dieselCars);

const eletricCars = cars.filter((car) => {return car.alimentazione === 'Elettrico'});
console.log(eletricCars);

const ibridCars = cars.filter((car) => {return car.alimentazione === 'Ibrida'});
console.log(ibridCars);