import React from 'react';
import logo from './logo.svg';
import './App.css';

const API = "http://localhost:8000/api/";
const DEFAULT_QUERY = "products"

function App() {
  return (
    <div className="App">
      <h1>TEST ME OUT</h1>
      <FilterableProductTable></FilterableProductTable>
    </div>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    const products = this.state.products;
    const productList = products.map((product, entry) => {
      const id = product._id
      const title = product.title;
      const price = product.price;
      const imageURL = product.imageURL;
      return (
        <li
          key={id}
          className="product"
        >
          <p>{title}</p>
          <p>{price}</p>
          <img src={imageURL}/>
        </li>
      )
    })

    return (
      <ul>{productList}</ul>
    )
  }

  componentDidMount() {
    this.listAllProducts();
  }

  listAllProducts() {
    fetch(API + DEFAULT_QUERY)
      .then(res => {return res.json()})
      .then(myJson => {
        if (myJson.success) {
          this.setState({products: myJson.payload});
        } else {
          console.log('error', myJson.error);
        }
      })
  }
}

export default App;
