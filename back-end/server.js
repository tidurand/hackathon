// const http = require('http');
const axios = require("axios");

//$axios.setHeader('accept-encoding', '*');

// const server = http.createServer((req, res) => {
//     res.end('Voila la bonne reponse du serveur !');
// });

//     const htp = axios.create({
//         baseURL: "https://api.starton.io/v2",
//         headers: {
//             "x-api-key": 'sk_live_4908153b-3fc0-401e-89d2-e9998666a7fd',
//         },
//     })
//     const respo = await htp.get('/smart-contract-template')
//     console.log(respo);

// server.listen(process.env.PORT || 2000);

// getRequest();


const http = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        'content-type': 'application/json',
        "x-api-key": 'sk_live_aa85b83d-45c2-4df7-8e20-39529724a94b',
        'Accept-Encoding': '' ///////// tout ca pour cette merde!!!!
    },
})
http.get('/smart-contract-template').then(response => {
    console.log(response.data)
})

