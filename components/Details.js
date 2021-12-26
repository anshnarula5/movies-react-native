import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/actions/fetchDetails";

const Details = ({ route }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const { id } = route.params;
  const dispatch = useDispatch();
  const { loading, details } = useSelector((state) => state.movieDetails);
  const trailerHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).searchParams);
          setTrailerUrl(urlParams.get("v"));
        })
    }
  };
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
          <View style={styles.data}>
            <View style={styles.header}>
              <Text style={styles.heading}>
                {details.title || details.name}
              </Text>
              <Text style={styles.text}>{details.release_date} </Text>
            </View>
            <Text style={styles.text}>{details.runtime} m </Text>
            {/* <Text style={styles.text}>{details.original_language} </Text> */}
            <View style = {styles.genres}>
                { details.genres&& details.genres.length > 0 && details.genres.map(genre => (
                  <Text key={Math.random()} style = {styles.genre}>{genre.name}</Text>
              ))}
            </View>
            <Text style={styles.overview}>{details.overview}</Text>
            <View>
              <Text style={styles.rating}>{details.vote_average}/10</Text>
            </View>
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
  overview: {
    color: "white",
    marginVertical: 10,
    fontSize: 15,
  },
  data: {
    paddingHorizontal: 10,
  },
  rating: {
    color: "cyan",
    fontSize: 20,
  },
  header: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  genre: {
    color: "cyan",
    borderColor: "cyan",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal : 10,
    marginRight : 6
  },
  genres: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    
  }
});

export default Details;
