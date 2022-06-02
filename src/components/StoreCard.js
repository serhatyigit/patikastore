import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './StoreCard.style';

const StoreCard = item => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          style={styles.productImage}
          source={{uri: item.item.item.imgURL}}
        />
      </View>
      <Text style={styles.productTitle}>{item.item.item.title}</Text>
      <Text style={styles.productPrice}>{item.item.item.price}</Text>
    </View>
  );
};

export default StoreCard;
