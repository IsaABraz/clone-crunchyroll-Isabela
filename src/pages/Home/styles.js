import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor: "black",
  },

  topo: {
    alignItems: "center",
    justifyContent:"center",
  },

  lupa:{
    position: "absolute",
    top: 4,
    right: 10,
    margin: 2
  },

  tituloSecundarioUm:{
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginHorizontal: 20
  },
  tituloSecundarioDois:{
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 20
  },

  quadrados:{
    alignItems: "center",
    margin: 5, 
    justifyContent:'space around',
    flexDirection: "row",
    alignContent: 'space-around', 
    flexWrap: "wrap",
  },
  serie:{
    fontFamily: "Andale Mono, monospace",
    fontSize:9,
    fontWeight: 'bold',
    color: '#40E0D0',
    position: "relative",
    top: 10,
    right: -5,
    margin: 2
    
  },
});
