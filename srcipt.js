const insanlar = [
    {
        id: 1,
        firstName: "Doğukan",
        lastName: "Öztürk",
        age: 19
    },
    {
        id: 2,
        firstName: "Muhammed",
        lastName: "Bozaba",
        age: 19
    },
    {
        id:3,
        firstName: "Selen",
        lastName: "Kavici",
        age: 18
    },
    {
        id:4,
        firstName: "Atlas",
        lastName: "Öztürk",
        age: 3
    },
    {
        id: 5,
        firstName: "Almira",
        lastName: "Kavici",
        age: 12
    }
];

const sonuc = insanlar.filter(insan => insan.age > 18);

console.log(sonuc);