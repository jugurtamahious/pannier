import { render } from "@testing-library/react";
import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Card from "./card";
import Panier from "./pannier";
import Header from "./header";
const image_url = "https://bulma.io/images/bulma-logo.png";

class App extends React.Component {
  state = {
    activepage: "Card",
    products: "",
    cart: [],
    tab: [],
    local: 0,
  };
  constructor(props) {
    super(props);
    this.pageChanges = this.pageChanges.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount(product) {
    this.addToCart(product);
  }

  pageChanges(page) {
    this.setState(() => {
      return {
        activepage: page,
      };
    });
  }
  componentDidMount() {
    return fetch(
      `https://otakod.es/hetic/ecommerce-api/products?search=goku&limit=5&page=5`
    )
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        console.log(products.products);
        this.setState({
          products: products.products,
        });
      });
  }
  deleteFromCart(product) {
    let tab = this.state.tab;
    tab.shift(product);
    this.setState(() => {
      // nouvelle technique

      return {
        cart: tab,
        local: tab,
      };
    });

    localStorage.setItem("Product", JSON.stringify(this.state.local));
    let toto = JSON.parse(localStorage.getItem("Product"));
    console.log(toto);
  }
  addToCart(product) {
    let tab = [];
    console.log(tab);

    tab.push(product);

    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.push(product);
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      this.setState(() => {
        return {
          cart: New_data,
          local: New_data,
        };
      });
      console.log(New_data);
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      localStorage.setItem("Product : ", JSON.stringify(tab));

      this.setState(() => {
        return {
          cart: New_data,
          local: New_data,
        };
      });
    }
  }

  /* Click_Buy_Stockage(product){

    let tab = []
    console.log(tab)

    tab.push(product)

    if(JSON.parse(localStorage.getItem('Product : ')) !== null){
        let New_data = JSON.parse(localStorage.getItem('Product : '))
        New_data.push(product)
        localStorage.setItem('Product : ', JSON.stringify(New_data))
        console.log(New_data)

    }

    if(JSON.parse(localStorage.getItem('Product : ')) === null){
        localStorage.setItem('Product : ',JSON.stringify(tab));
    }
} */

  render() {
    return (
      <>
        <Header pageChanges={this.pageChanges} cart={this.state.cart} />
        <div className="card_container is-flex-wrap-nowrap">
          {this.state.activepage === "Card" && (
            <Card products={this.state.products} addToCart={this.addToCart} />
          )}
          {this.state.activepage === "SignIn" && (
            <Panier
              cart={this.state.cart}
              addToCart={this.addToCart}
              deleteFromCart={this.deleteFromCart}
              local={this.state.local}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
