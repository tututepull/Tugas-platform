/** Biodata Diri */

let nama = "fathir";
let umur = 19;
let hobi = "olahraga";
let alamat = "sukabumi";
let menikah = false;
console.log(`nama saya ${nama}, umur saya ${umur}, hobi saya ${hobi}, alamat saya di ${alamat}, sudah menikah : ${menikah}`);

/** penjumlahan bilangan    
 */

let a = 100;
let b = 240;

console.log("penjumlahan: ", a + b);
console.log("pengurangan: ", a - b);
console.log("perkalian: ", a * b);
console.log("pembagian: ", a / b);
console.log("modulus: ", a % b);

/** percabangan
 * 
 */

let nilai = 95;
if (nilai >= 75){
    console.log("selamat anda lulus");
}
else{
    console.log("maaf anda tidak lulus");
}

/** perulangan 
 *
 * */

for (let i = 1; i <= 10; i++){
    console.log(`perulangan ke ${i}`);

}

/** function
 * 
 * */

function greeting(){
    console.log("hello JS");
}
greeting()
function greetingName(nama){
    console.log(`hello ${nama}, you are JS programmer`);
}
function say(name){
    return `${name}, S.Kom`
}
greeting()
greetingName("fathir")

let tittlename = say("fathir")
let master = `${tittlename}, M.Kom`
console.log(master);

/** perbedaan == dan === */

let angka1 = 15
let angka2 = "15"

console.log(angka1 == angka2); 
console.log(angka1 === angka2);
