import React, {Component, createContext} from 'react'

const Context = createContext({
    cart: [],
    total: 0,
    AddItem: () => {
    },
    RemoveItem: () => {
    },
    IncTotal: () =>{
    },
    AddP: ()=>{
    },
});

export class AppProvider extends Component {
    AddItem = item => {
        //bug
        if(this.state.cart.indexOf(item) != -1) {
            this.state.cart[this.state.cart.indexOf(item)]['quantity'] += 1;
        }
        else
        {
            item['quantity'] = 1;
            this.setState({cart: this.state.cart.concat(item)});
            console.log('error',this.state.cart);
        }

        let old_total = this.state.total;
        let price = item.price;
        price.substring(price.length-1);
        price = price.replace(",", "");
        price = parseInt(price);
        console.log("price "+price, "quantity "+item.quantity);
        old_total += price;
        this.setState({
            total: old_total
        })
        old_total = 0;
        price = 0;


    }
    RemoveItem = item => {
        console.log("errors");
        this.setState({cart: this.state.cart.filter(old_it => old_it !== item)});
        console.log(item.id);
        let price = item.price;
        price.substring(price.length-1);
        price = price.replace(",", "");
        price = parseInt(price);
        let upTotal = this.state.total - (price * item.quantity);
        this.setState({
            total: upTotal,
        })
    }
    IncTotal = (item, qtt) => {
        let price = item.price;
        price.substring(price.length-1);
        price = price.replace(",", "");
        price = parseInt(price);
        let old_price = this.state.total - (price * item.quantity);
        let Uptotal = old_price + (price * qtt);
        this.setState({
            total: Uptotal,
        })
    }
    AddP = item => {
        this.AddItem(item);
    }

    state = {
        cart: [],
        total: 0,
        AddItem: this.AddItem,
        RemoveItem: this.RemoveItem,
        IncTotal: this.IncTotal,
        AddP: this.AddP,
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }


}

export const CartConsumer = Context.Consumer;

