const newObject = {
    prop1: "lorem",
    props2:1231203
}


const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(newObject),
    headers:{
        'Content-Type': 'application/json'
    }
});

// jeśli się doda, otrzymujemy status 200
// JSON Serwer nie sprawdza formatu dodawanych formatów

