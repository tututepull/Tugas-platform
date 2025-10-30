const papan = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "K", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
];

let kingPos = null;
let rooks = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (papan[i][j] === "K") kingPos = [i, j];
    if (papan[i][j] === "R") rooks.push([i, j]);
  }
}

let skak = false;

for (const [rx, ry] of rooks) {
  if (rx === kingPos[0]) { 
    let blocked = false;
    const minY = Math.min(ry, kingPos[1]);
    const maxY = Math.max(ry, kingPos[1]);
    for (let y = minY + 1; y < maxY; y++) {
      if (papan[rx][y] !== ".") blocked = true;
    }
    if (!blocked) skak = true;
  }
  if (ry === kingPos[1]) { 
    let blocked = false;
    const minX = Math.min(rx, kingPos[0]);
    const maxX = Math.max(rx, kingPos[0]);
    for (let x = minX + 1; x < maxX; x++) {
      if (papan[x][ry] !== ".") blocked = true;
    }
    if (!blocked) skak = true;
  }
}

if (skak) {
  console.log("SKAK!");
} else {
  console.log("Aman");
}
