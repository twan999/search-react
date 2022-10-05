const fetchProducts = (query) => {
    return fetch(`http://localhost:3035/?query=${query}`).then(res => res.json());
}

export default fetchProducts;