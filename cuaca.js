const lahan = [
  ["subur", "subur", "kering", "subur"],
  ["subur", "kering", "kering", "tandus"],
  ["subur", "subur", "subur", "kering"],
  ["kering", "tandus", "kering", "tandus"]
];

const cuaca = {
  temperature: 27, 
  humidity: 60,   
  windSpeed: 10    
};

for (let i = 0; i < lahan.length; i++) {
  let totalPetak = lahan[i].length;
  let suburCount = 0;

  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      suburCount++;
    }
  }

  const persenSubur = (suburCount / totalPetak) * 100;

  if (persenSubur < 50) {
    for (let j = 0; j < lahan[i].length; j++) {
      lahan[i][j] = "kering";
    }
  }
}

let totalSubur = 0;
for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      totalSubur++;
    }
  }
}

let cuacaCocok = true;

if (cuaca.temperature < 20 || cuaca.temperature > 30 ||
    cuaca.humidity <= 50 || cuaca.windSpeed >= 15) {
  cuacaCocok = false;
}

console.log("=== HASIL PENGELOLAAN LAHAN ===");
console.log("Total petak subur:", totalSubur);
console.log("Total petak yang ditanami:", cuacaCocok ? totalSubur : 0);

if (!cuacaCocok) {
  console.log("Cuaca tidak cocok untuk bercocok tanam");
} else {
  console.log("Cuaca cocok untuk bercocok tanam");
}
