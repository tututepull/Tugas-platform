const http = require('http');
const port = 8000;

const motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentina',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  }
];

const server = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    if (req.url == '/') {
        res.write("<h1>Welcome to MotoGP Server</h1>");
    } else if (req.url == '/country') {
        res.write("<h1>Winners by Country</h1>");
        res.write("<ul>");
        motoGP.forEach(race => {
            res.write(`<li>${race.winner.country}: ${race.winner.firstName} ${race.winner.lastName}</li>`);
        });
        res.write("</ul>");
    } else if (req.url == '/winners') {
        res.write("Winners by Country Page<br>");
        const winners = motoGP.map(s => s.winner.country);
        const uniqueWinners = [...new Set(winners)];
        res.write("<ul>");
        uniqueWinners.forEach(country => {
            res.write(`<li>${country}</li>`);
        });
        res.write("</ul>");
    } else if (req.url == '/name') {
        res.write("name page<br>");
        const name = motoGP.map(s => s.winner.firstName + " " + s.winner.lastName);
        res.write("<ul>");
        name.forEach(fullName => {
            res.write(`<li>${fullName}</li>`);
        });
        res.write("</ul>");
    } else {
        res.write("<h1>404 not found</h1>");
    }
    res.end();
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});