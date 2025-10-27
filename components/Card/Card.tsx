import React from 'react';
import { View, Text, Image } from 'react-native';
import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import styles from './styles';

type CardProps = {
  img: string;
  title: string;
  artist?: string;
  style?: StyleProp<ViewStyle>;           // container only
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  artistStyle?: StyleProp<TextStyle>;
};

function Card({ style, imageStyle, titleStyle, artistStyle, img, title, artist }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      <Image source={{ uri: img }} style={[styles.cardImage, imageStyle]} />
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, titleStyle]}>{title}</Text>
        {artist && <Text style={[styles.cardArtist, artistStyle]}>{artist}</Text>}
      </View>
    </View>
  );
}

export default Card;