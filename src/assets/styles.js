import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  containerFluid: {
    flex: 1,
    backgroundColor: 'rgb(0, 168, 118)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridView: {
    marginTop: 30,
  },
  title:{
    position: 'relative',
  },
  headT:{
    position: 'absolute',
    width: '45%',
    height: 1,
    top: 20,
    borderWidth: 1,
    borderColor: '#544e4e',
  },
  tailT:{
    position: 'absolute',
    width: '45%',
    height: 1,
    right: 0,
    top: 20,
    borderWidth: 1,
    borderColor: '#544e4e',
  },
  container: {
    flex: 1,
},
  footer: {
    width: '100%',
    borderWidth:1,
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    justifyContent: "center",
  },
  footButton:{
    width: '34%',
    backgroundColor: 'rgb(255, 180, 115)',
  },

  sectionHeader: {
    textAlign: 'center',
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    color: '#544e4e',
  },
  itemContainer: {
    alignItems: 'center',
    position: 'relative',
    // marginBottom: 60,
  },
  itemName: {
    textAlign: 'center',
  },
  itemPrice:{
    textAlign: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(57, 230, 57)',
    padding: 10,
  },
  buttonf:{
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 180, 115)',
    padding: 10,
  },
  cartIcon:{
    fontSize:30,
    marginLeft: 10,
    color: 'white',
    fontStyle: "italic",
  },
  buyIcon:{
    fontSize:30,
    position: 'absolute',
    bottom: -10,
  },
  heartIcon: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
})
