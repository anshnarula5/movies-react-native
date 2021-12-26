import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/actions/fetchDetails";

const Details = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { loading, details } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id, dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.text}>...LOADING</Text>
      ) : (
        <>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
            }}
            style={styles.image}
          />
          <View >
            <Text style={styles.heading}>{details.title || details.name}</Text>
            <Text style={styles.details}>{details.overview}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    marginBottom: 20,
    justifyContent: "center",
    height: 250,
  },
  heading: {
    color: "white",
    fontSize: 30,
  },
  details: {
    color: "white",
    marginVertical: 10,
    fontSize: 20,
  },
});

export default Details;
