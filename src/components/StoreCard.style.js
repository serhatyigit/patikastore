import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 4,
    borderRadius: 10,
    width: 165,
  },
  productImage: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  productTitle: {
    maxWidth: Dimensions.get('window').width / 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  productPrice: {
    color: '#444',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
