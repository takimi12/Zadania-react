const newObject = {
    prop1: "lorem",
    prop2: 1231203
};

const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(newObject),
    headers: {
        'Content-Type': 'application/json'
    }
});


const partialUpdate = {
    prop1: "updated lorem"
};

const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(partialUpdate),
    headers: {
        'Content-Type': 'application/json'
    }
});