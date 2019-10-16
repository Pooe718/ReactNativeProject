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
    marginTop: 10,
  },
  title:{
    position: 'relative',
  },
  headT:{
    position: 'absolute',
    width: '45%',
    top: 12,
    borderWidth: 2,
    borderColor: 'rgb(221, 155, 164)\'',
  },
  tailT:{
    position: 'absolute',
    width: '45%',
    right: 0,
    top: 12,
    borderWidth: 2,
    borderColor: 'rgb(221, 155, 164)\'',
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
    width: '50%',
    backgroundColor: 'rgb(221, 155, 164)',
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
    backgroundColor: 'rgb(67, 148, 0);',
    padding: 10,
  },
  buttonf:{
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 155, 164)',
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
