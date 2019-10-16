import React, {createContext} from 'react';
const GlobalContext = createContext({
  carts: [],
  updateCarts: () => {},
});
export class CartProvider extends React.Component {
  updateCarts = newCarst => {
    this.setState({carts: newCarst});
  };

  state = {
    carts: [],
    updateCarts: this.updateCarts,
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
