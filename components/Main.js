import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchAction,
  fetchComedy,
  fetchDocumentaries,
  fetchHorror,
  fetchMovies,
  fetchRomance,
  fetchTop,
  fetchTrending,
} from "../redux/actions/fetchMovies";
import requests from "../request";
import Row from "./Row";

const Item = ({ title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Main = () => {
  const navigation = useNavigation()
  const { loading: trendingLoading, trending } = useSelector(
    (state) => state.trending
  );
  const { loading: topLoading, top } = useSelector((state) => state.top);
  const { loading: actionLoading, action } = useSelector(
    (state) => state.action
  );
  const { loading: comedyLoading, comedy } = useSelector(
    (state) => state.comedy
  );
  const { loading: horrorLoading, horror } = useSelector(
    (state) => state.horror
  );
  const { loading: romanceLoading, romance } = useSelector(
    (state) => state.romance
  );
  const { loading: documentaryLoading, documentary } = useSelector(
    (state) => state.documentary
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTrending());
  //   dispatch(fetchTop());
  //   dispatch(fetchAction());
  //   dispatch(fetchComedy());
  //   dispatch(fetchHorror());
  //   dispatch(fetchRomance());
  //   dispatch(fetchDocumentaries());
  // }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("List", {url : requests.fetchTrending})} style={styles.header}><Text style={styles.title}>Trending</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchTrending} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchTopRated})} style={styles.header}><Text style={styles.title}>Top Rated</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchTopRated} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchActionMovies})} style={styles.header}><Text style={styles.title}>Action </Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchActionMovies} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchComedyMovies})} style={styles.header}><Text style={styles.title}>Comedy</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* { <Row url={requests.fetchComedyMovies} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchHorrorMovies})} style={styles.header}><Text style={styles.title}>Horror</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchHorrorMovies} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchRomanceMovies})} style={styles.header}><Text style={styles.title}>Romance</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchRomanceMovies} />} */}
      <TouchableOpacity  onPress={() => navigation.navigate("List", {url : requests.fetchDocumentaries})} style={styles.header}><Text style={styles.title}>Documentaries</Text>
        <Text style = {styles.button}>></Text>
      </TouchableOpacity>
      {/* {<Row url={requests.fetchDocumentaries} />} */}
    </ScrollView>
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
    fontSize: 20,
    padding: 10,
  },
  image: {
    flex: 1,
    marginBottom: 5,
    justifyContent: "center",
    height: 250,
  },
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical : 10
  },
  button: {
    color: "cyan",
    fontSize: 30,
    paddingHorizontal : 15
  }
});

export default Main;

// const navigation = useNavigation()
//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate("Details", {id : item.id})} style={styles.container}>
//       <ImageBackground
//       source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
//       style={styles.image}
//       imageStyle={{ opacity: 0.8 }}
//     >
//         <Item title={item.title || item.name} />
//     </ImageBackground>
//     </TouchableOpacity>
//   );

// loading || movies.length === 0 ? (
//   <Text>...loading</Text>
// ) : (
//   <FlatList
//     data={movies}
//     renderItem={renderItem}
//     keyExtractor={(item) => item.id}
//   />
// );
