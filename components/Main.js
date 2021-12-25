import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/fetchMovies";

const Item = ({ title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Main = () => {
  const { loading, movies } = useSelector((state) => state.movieList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const renderItem = ({ item }) => (
    <ImageBackground
      source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
      style={styles.image}
      imageStyle= {{opacity:0.8 }}
    >
      <Item title={item.title || item.name} />
        <Text>Hi</Text>
    </ImageBackground>
  );

  return loading || movies.length === 0 ? (
    <Text>...loading</Text>
  ) : (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
 
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    color: "white",
    top: 80,
    fontSize: 30,
    padding: 10,
  },
  image: {
    flex: 1,
    marginBottom: 5,
    justifyContent: "center",
    height: 250,
  },
});

export default Main;
