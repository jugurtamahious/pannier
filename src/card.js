import React from "react";

const image_url = "https://bulma.io/images/placeholders/96x96.png";

export default class Card extends React.Component {
  state = {
    lastepage: "",
  };
  constructor(props) {
    super(props);
  }

  render() {
    let products = this.props.products;
    products = Array.from(products);

    return products.map((product) => {
      return (
        <div className="card mr-3" key={product.id}>
          <div className="card-image">
            <figure className="image is-3by2">
              <img
                src={product.images.photos[0]}
                alt={image_url}
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={product.images.photos[1]}
                    alt={image_url}
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">jhon smith</p>
              </div>
            </div>

            <div className="content">
              <p>{product.title}</p>
              <h2>{product.price} </h2>
              <button
                className="button is-primary"
                type="button"
                onClick={() => {
                  this.props.addToCart(product);
                }}
              >
                pannier
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}
