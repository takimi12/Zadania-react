const response = await fetch(url, {method: 'DELETE'});
const data = await response.json()
console.log(data)
/// JSON SERVER PRZY DELETE ZWRACA REKORD, KTÓRY ZOSTAŁ USUNIETY
