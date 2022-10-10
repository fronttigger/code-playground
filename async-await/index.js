function renderProduct(product) {
  const $result = document.querySelector('#result')

  $result.replaceChildren()
  $result.insertAdjacentHTML(
    'beforeend',
    `
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <p><img src="${product.images[0]}" style="width: 300px" /></p>
    `
  )
}

document.querySelector('#selector').addEventListener('change', handleChange)

async function getProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const json = await res.json()

  return json
}

async function handleChange(e) {
  const id = e.target.value
  const product = await getProduct(id)

  renderProduct(product)
}
