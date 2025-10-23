// tugas soal 1

let dataSiswa = [
    {},
    { nama: "andi", score: 90 },
    { nama: "budi", score: 80 },
    { nama: "dira", score: 100 }
];

let nilaiTertinggi = 0;
let namaTertinggi = ""; 

for (let i = 1; i < dataSiswa.length; i++) {
    if (dataSiswa[i].score > nilaiTertinggi) {
        nilaiTertinggi = dataSiswa[i].score;  
        namaTertinggi = dataSiswa[i].nama;    
    }
}

console.log(`Siswa dengan nilai tertinggi adalah ${namaTertinggi} (${nilaiTertinggi})`);

// tugas soal 2

var motoGP = [
    {
        circuit: 'losail',
        location: 'qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
    winner: {
        firstName: 'Valentino',
        lastName: 'Rossi',
        country: 'Italy'
    }
},
{
    circuit: 'mugello',
    location: 'Italy',
    winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
    }
}
];
let result = {};

for (let i = 0; i < motoGP.length; i++) {
    let country =motoGP[i].winner.country;
    let name = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;
    let winLocation = motoGP[i].circuit + ", " + motoGP[i].location;

    if (!result[country]) {
        result[country] = {
          winningCircuits: [],
          totalWins: 0
        };
    }

    result[country].winningCircuits.push(winLocation);
    result[country].name = name;
    result[country].winLocation = winLocation;
    result[country].totalWins++;

}

console.dir(result, { depth: null });
