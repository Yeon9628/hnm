function getProducts(SearchQuery) {
  return async(dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/Yeon9628/hnm/products?q=${SearchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
  }
}

function getProductDetail(id) {
  return async(dispatch) => {
    let url = `https://my-json-server.typicode.com/Yeon9628/hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  }
}

export const productAction = { getProducts, getProductDetail };