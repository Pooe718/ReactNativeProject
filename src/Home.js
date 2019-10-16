import React, {Component} from 'react';
import {
    Button,
    Text,
    View,
    Alert,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import styles from './assets/styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {CartConsumer} from "./AppProvider";

export default class HomeScreen extends Component {
    // constructor(props) {
    //   super(props);
    //   this.onPress = this.onPress.bind(this);
    // }
    state = {data: [], loading: true, cart: 0};

    // get product
    async componentDidMount() {
        try {
            //Assign the promise unresolved first then get the data using the json method.
            const productApiCall = await fetch(
                'http://192.168.16.9/scraper/public/index.php',
            );
            const product = await productApiCall.json();
            this.setState({data: product, loading: false});
        } catch (err) {
            console.log('Error fetching data-----------', err);
        }
    }

    render() {
        const {data, loading} = this.state;
        console.log(loading, data);
        if (!loading) {
            return (
                <View style={styles.container}>

                    <CartConsumer>
                        {({AddP}) =>
                            <SectionGrid
                                itemDimension={150}
                                sections={[
                                    {
                                        title: 'Set',
                                        data: data.slice(0, 5),
                                    },
                                    {
                                        title: 'Áo',
                                        data: data.slice(5, 10),
                                    },
                                    {
                                        title: 'Quần',
                                        data: data.slice(10, 15),
                                    },
                                ]}
                                style={styles.gridView}
                                renderItem={({item, section, index}) => (
                                    <View
                                        style={[styles.itemContainer, {backgroundColor: item.code}]}>
                                        <Image
                                            style={{width: '100%', height: 280}}
                                            source={{uri: item.featuredImg}}
                                        />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPrice}>{item.price}</Text>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => AddP(item)}>
                                            <Text style={{color: 'white'}}>
                                                BUY NOW
                                            </Text>
                                            <Icon
                                                style={{
                                                    fontSize: 30,
                                                    marginTop: 10,
                                                    bottom: -10,
                                                    position: 'absolute',
                                                    left: 30,
                                                    top: -2,
                                                }}
                                                name="cart"
                                                color="white"
                                            />
                                        </TouchableOpacity>
                                        <View style={styles.heartIcon}>
                                            <Icon
                                                style={{fontSize:20}}
                                                name="heart"
                                                color="#f66"
                                            />
                                        </View>
                                    </View>
                                )}
                                renderSectionHeader={({section}) => (
                                    <View style={styles.title}>
                                        <View style={styles.headT}/>
                                        <Text style={styles.sectionHeader}>{section.title}</Text>
                                        <Image source={require('./assets/slide_logo_4.jpg')} style={{height: 200, width:"100%"}} />
                                        <View style={styles.tailT}/>
                                    </View>
                                )}
                            />
                        }
                    </CartConsumer>
                    <View style={styles.footer}>
                        <View style={styles.footButton}>
                            <TouchableOpacity
                                style={styles.buttonf}
                                onPres={()=>this.goHome()}
                            >
                                <Text style={{color: 'white'}}>
                                    <IconF
                                        style={styles.cartIcon}
                                        name="home"
                                        color="#517fa4"
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
                                        color="#517fa4"
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        } else {
            return <ActivityIndicator/>;
        }
    }



    goCart() {
        this.props.navigation.navigate('Cart');
    }

    goHome() {
        this.props.navigation.navigate('Home');
    }

}
