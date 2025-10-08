// input angka
let angka = 13;
let next = angka + 1;
let angkaprima;

// mencari bilangan prima setelah angka input
while (true) {
    angkaprima = true;

    // cek apakah angka selanjutnya adalah bilangan prima
    for (let i = 2; i < next; i++) {
        if (next % i === 0 ) {
            angkaprima = false;
            break;
        }
    }
    if (angkaprima) {
        console.log(`bilangan prima setelah ${angka} adalah ${next}`);
        break;
    } 
    next++;
}


// no 2. input
let awal = 1;
let akhir = 12;
let total = 0;

// mencari bilangan prima dari awal sampai akhir
for (let n = awal; n <= akhir; n++) {
    let prima = true;
    // cek apakah n bilangan prima
    if (n < 2) {
        prima = false;
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                prima = false;
                break;
            }
        }
    }

    // kalo bilangan prima ditambahkan ke total
    if (prima) {
        console.log(`${n} adalah bilangan prima`);
        total += n;
    } else {
        console.log(`${n} bukan bilangan prima`);
    }
}

console.log(`total bilangan prima dari ${awal} sampai ${akhir} adalah ${total}`);