import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 3, rows = 3;

exports default class MoviePoster extends Components {
  static propTypes = {
    movie: PropType.objects.isRequired,
    onOpen: Protypes.func.isRequired,
  }

  render() {
    const {movie: movie: { title, genre, poster }, onOpen } = this.props;
    return (
      <TouchableOpacity style={style.container} onPress={() => onOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image}/>
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.genre} numberOfLines={1}{genre}></Text>
      </TouchableOpacity>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 -20)/ rows -10,
    width: (width - 10) / cols - 10,
  },
  imageConatiner: {
    flex: 1,
  }
  image: {
    boderRadius: 10,
    ...StyleSheet.absouleFillObject,
  },
  title: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});