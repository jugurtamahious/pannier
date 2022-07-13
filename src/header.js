import React from "react";
export default class Header extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-primary"
                  type="button"
                  onClick={() => {
                    this.props.pageChanges("SignIn");
                    console.log("click moin fort chien");
                  }}
                >
                  SignIn({this.props.cart.length})
                </button>

                <a
                  className="button is-light"
                  type="button"
                  onClick={() => {
                    this.props.pageChanges("Card");
                  }}
                >
                  accueil
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
