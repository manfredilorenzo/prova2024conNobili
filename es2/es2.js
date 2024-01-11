const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question("Inserisci username: \n", username => {
    readline.question("Inserisci password: \n", pass => {
        console.log("username: " + username);
        console.log("pass: " + pass);

        // fetch 

        fetch("https://ws.progettimolinari.it/credential/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                key: token
            },
            body: JSON.stringify({
                username: username,
                password: pass
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        readline.close();
    })
})
