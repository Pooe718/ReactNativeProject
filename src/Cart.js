import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext();
import {Button, Text, View, TouchableOpacity, Image, FlatList, TextInput, Modal, TouchableHighlight} from 'react-native';
import styles from './assets/styles';
import {CartConsumer} from "./AppProvider";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import NumericInput from 'react-native-numeric-input'


function Item({item}) {
    let quantity = {quantity: item.quantity};
    return (
        <View style={{
            borderBottomWidth: 2,
            borderBottomColor: '#ccc',
            flex: 2,
            flexDirection: "row",
            marginTop: 20,
            position: 'relative',
        }}>
            <Image
                style={{width: '16%', height: 80, marginBottom: 10}}
                source={{uri: item.featuredImg}}
            />
            <View style={{marginLeft: 20, marginRight: 100, width: 150}}>
                <Text style={{}}>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
            <CartConsumer>
                {({IncTotal})=>
                    <View style={{position: "absolute", right: 0}}>

                    <NumericInput
                        value={item.quantity}
                        totalWidth={100}
                        totalHeight={20}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        iconSize={25}
                        step={1.5}
                        valueType='integer'
                        onChange={(value)=> IncTotal(item, value)}
                        rounded
                        textColor='#B0228C'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#EA3788'
                        leftButtonBackgroundColor='#E56B70'/>
                    </View>
                }
            </CartConsumer>
            <CartConsumer>{({RemoveItem}) =>
                <TouchableOpacity style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    bottom: 4,
                    right: 6,
                    borderWidth: 1,
                    borderRadius: 30,
                    borderColor: "#f66",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                                  onPress={() => {
                                      RemoveItem(item)
                                  }}
                >
                    <Icon
                        style={{fontSize: 22}}
                        name="close"
                        color="#f66"
                    />
                </TouchableOpacity>
            }</CartConsumer>
        </View>
    );
}

export default class CartScreen extends Component {
    state = {
        total: 0,
        modalVisible: false,
        name: '',
        phoneNumber: 0
    }
    submitOrder(name, phone, cart)
    {
        fetch('http://192.168.16.9/scraper/public/order', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                cart: cart,
            }),
        }).then(function (response){
                alert("ok");
                console.log(response);
                return response.status;
            }

        );

    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={{width: 240, textAlign: 'center'}}>
                    <Text style={{
                        borderBottomWidth: 2,
                        borderBottomColor: '#ccc',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 36,
                        marginTop: 0
                    }}>Shopping Cart</Text>
                </View>
                <CartConsumer>
                    {(context) =>
                        <View style={{flex: 1}}>
                            <View style={{}}>
                                <FlatList
                                    style={{margin: 12, marginBottom: 0, position: "relative"}}
                                    data={context.cart}
                                    renderItem={({item}) => <Item item={item}/>}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    }
                </CartConsumer>
                <CartConsumer>
                    {(context) =>
                        <View style={{flexDirection: "row", position: "absolute", bottom: 52, width: "100%"}}>
                            <TouchableOpacity
                                style={{
                                    width: "50%",
                                    backgroundColor: "rgb(0, 187, 63)",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onPress={() => {
                                    this.setState({modalVisible: true});
                                }}>
                                <Text style={{color: 'white', marginBottom: 10, marginTop: 10}}>
                                    Payment
                                </Text>
                            </TouchableOpacity>
                            <View style={{width: "50%", justifyContent: 'center'}}>
                                <Text style={{marginLeft: 10, fontStyle: "italic"}}>Total
                                    Price: {context.total} vnđ</Text>
                            </View>
                        </View>
                    }
                </CartConsumer>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Payment Canceled !!');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={name => this.setState({name: name})}
                                placeholder='Name'
                            />
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={phone => this.setState({phoneNumber: phone})}
                                placeholder='Phone number'
                            />
                            <CartConsumer>
                                {(context) =>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "rgb(0, 187, 63)",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        onPress={() => {
                                            console.log({context});
                                            this.submitOrder(this.state.name, this.state.phoneNumber, context.cart)
                                        }}>
                                        <Text style={{color: 'white', marginBottom: 10, marginTop: 10}}>
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </CartConsumer>
                        </View>
                    </View>
                </Modal>
                <View style={styles.footer}>
                    <View style={styles.footButton}>
                        <TouchableOpacity
                            style={styles.buttonf}
                            onPress={() => this.goHome()}>
                            <Text style={{color: 'white'}}>
                                <IconF
                                    style={styles.cartIcon}
                                    name="home"
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footButton}>
                        <TouchableOpacity
                            style={styles.buttonf}
                            onPress={() => this.onPress(item.name)}>
                            <Text style={{color: 'white'}}>
                                <Icon
                                    style={styles.cartIcon}
                                    name="navicon"
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footButton}>
                        <TouchableOpacity
                            style={styles.buttonf}
                            onPress={() => this.goCart()}>
                            <Text style={{color: 'white'}}>
                                <Icon
                                    style={styles.cartIcon}
                                    name="cart"
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    goCart() {
        this.props.navigation.navigate('Cart');
    }

    goHome() {
        this.props.navigation.navigate('Home');
    }
}
export {}
