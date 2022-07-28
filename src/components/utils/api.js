const config ={
  baseUrl:'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  }
}
function processRequest(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
export function getIngredients() {
  return fetch(`${config.baseUrl}/ingredients`).then(processRequest);
}
export function createOrder(id) {
  return fetch(`${config.baseUrl}/orders`, {
    method:'POST',
    headers: config.headers,
    body:JSON.stringify({
      ingredients:id
    })
  })
  .then(processRequest)
}