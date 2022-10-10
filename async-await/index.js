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

const fetchJson = (url) => fetch(url).then((res) => res.json())

const fetchProduct = (id) =>
  fetchJson(`https://api.escuelajs.co/api/v1/products/${id}`)

const getProduct = (id) => fetchProduct(id)

async function handleChange(e) {
  const id = e.target.value
  const product = await getProduct(id)

  renderProduct(product)
}
