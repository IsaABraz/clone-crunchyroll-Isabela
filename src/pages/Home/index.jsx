import React from "react";
import { Text, View, Button, Image} from "react-native";
import { styles } from "./styles";
import { Octicons, Entypo } from '@expo/vector-icons'; 


export default function Home( {navigation}) {
    return (
  
      <View style={styles.container}>
        <View style={{flex:1}}>

          <View style={{width: "100%", height: 40,  backgroundColor: "black", flexDirection: "row"}} >
              <Image source={ require("../../../assets/crunchyroll-logo.png")}
              style={{width:110, height:20, margin: 7}}/> 
               <Text style={styles.lupa}> <Octicons  name="search" size={15} color="#191919"/> </Text>
          </View>
            <Text style={styles.tituloSecundarioUm}>MAIS POPULARES</Text>
            <View style={styles.quadrados}>
              
              {/* PRIMEIRO ANIME DA LISTA DE POLULARES */}
                <View style={{ width: 120, height: 230, backgroundColor: "#2F4F4F", marginHorizontal: 5}}>
                    <Image
                      source={{ uri:"https://media.fstatic.com/F_UtZCky1tcUpWM2XlaY_mejxm0=/210x312/smart/media/movies/covers/2019/11/mqupeeot6k731.jpg"}}
                      style={{width:"100%", height:200, marginTop: -10, marginLeft: 0.19}}
                      resizeMode="contain"
                      />
                    <Text  style={{
                            marginTop:-12, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginTop: -5,
                            marginHorizontal: 3}}>
                      
                      One Piece</Text>
                    <View style={{flexDirection: "row"}}>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={{position: "absolute",
                                    top: 5,
                                    right: 2,
                                    margin: 2}} >
                        <Entypo name="dots-three-vertical" size={13} color="#fff" />
                      </Text>
                    </View>
                </View>

                {/* SEGUNDO ANIME DA LISTA DE POPULARES */}
                
                <View style={{ width: 120, height: 230, backgroundColor: "#2F4F4F", marginHorizontal: 3}}>
                  <Image
                    source={{ uri:"https://animesonehd.xyz/wp-content/uploads/2021/10/Sekai-Saikou-no-Ansatsusha-Isekai-Kizoku-ni-Tensei-suru-online-em-HD-animesonehd-animes-em-HD.jpg"}}
                    style={{width:"100%", height:180, marginTop: 0, marginLeft: 0.19}}
                    resizeMode="stretch"
                    />
                    <Text style={{
                            marginTop:5, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginHorizontal: 3}}>
                         The World's Finest...</Text>

                    <View style={{flexDirection: "row"}}>
                    <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={{position: "absolute",
                                    top: 5,
                                    right: 2,
                                    margin: 2}} >
                        <Entypo name="dots-three-vertical" size={13} color="#fff" />
                      </Text>
                    </View>
                </View>


                {/* TERCEIRO ANIME DA LISTA DE POPULARES */}
                <View style={{ width: 90, height: 230, backgroundColor: "#2F4F4F", marginLeft: 5, marginRight: -1}} >
                    <Image
                      source={{ uri:"https://i1.wp.com/www.otakupt.com/wp-content/uploads/2021/04/The-Faraway-Paladin-anime-visual.jpg?resize=696%2C983&ssl=1"}}
                      style={{width:"100%", height:180, marginTop: 0, marginLeft: 0.19}}
                    />
                     <Text style={{
                            marginTop:5, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginHorizontal: 3}}>
                              The Faraway</Text>
                    <View style={{flexDirection: "row"}}>
                      <Text style={styles.serie}>SÉRIE</Text>
        
                    </View>
                 
                </View>
              
            </View>

            <Text style={styles.tituloSecundarioDois}>RECÉM ATUALIZADOS</Text>
            <View style={styles.quadrados}>

              {/* PRIMEIRO ANIME DA LISTA DE RECEM ATUALIZADOS */}
                <View style={{ width: 120, height: 230, backgroundColor: "#2F4F4F", marginHorizontal: 5}} >
                    <Image
                      source={{ uri:"https://blogs.opovo.com.br/bancadoanime/wp-content/uploads/sites/59/2017/09/mahou-tsukai-no-yome-visual-300x423.jpg"}}
                      style={{width:"101%", height:180, marginTop: -1, marginLeft: -0.7}}
                    />
                      <Text  style={{
                            marginTop:6, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginHorizontal: 3}}>

                        The Ancient Magus's...
                      </Text>
                    <View style={{flexDirection: "row"}}>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={{position: "absolute",
                                    top: 5,
                                    right: 2,
                                    margin: 2}} >
                        <Entypo name="dots-three-vertical" size={13} color="#fff" />
                      </Text>
                    </View>
                </View>

              {/* SEGUNDO ANIME DA LISTA RECEM ATUALIZADO */}

              <View style={{ width: 120, height: 230, backgroundColor: "#2F4F4F", marginHorizontal: 3}}>
                    <Image
                      source={{ uri:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21727-kJN6hKKfcUHa.jpg"}}
                      style={{width:"100%", height:180, marginTop: 1, marginLeft: 0.19}}
                    />
                   <Text  style={{
                            marginTop:5, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginHorizontal: 3}}>
                              
                        Aware! Meisaku-kun
                      </Text>
                    <View style={{flexDirection: "row"}}>
                    <Text style={{ fontSize:10.5,
                              fontWeight: 'bold',
                              color: '#40E0D0',
                              position: "relative",
                              top: 10,
                              right: -5,
                              margin: 0}}>
                                SÉRIE</Text>
                      <Text style={{position: "absolute",
                                    color: '#40E0D0',
                                    top: 5,
                                    right: 2,
                                    margin: 2}} >
                        <Entypo name="dots-three-vertical" size={13} color="#fff" />
                      </Text>
                    </View>
                </View>


              {/* TERCEIRO ANIME DA LISTA RECEM ATUALIZADO */}
              
               <View style={{ width: 90, height: 230, backgroundColor: "#2F4F4F",  marginLeft: 5, marginRight: -1}}>
                    <Image
                      source={{ uri:"https://ramenparados.com/wp-content/uploads/2021/08/d6a57b8582326acf7004b4c22e5058841628190582_main-min-1.png"}}
                      style={{width:"100%", height:180, marginTop: 0, marginLeft: 0}}
                    />
                    <Text  style={{
                            marginTop:6, 
                            fontSize:10.5,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginHorizontal: 3}}>
                              
                        SAKUGAN
                      </Text>
                    <View style={{flexDirection: "row"}}>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={{position: "absolute",
                                    top: 5,
                                    right: 2,
                                    margin: 2}} >
                      </Text>
                    </View>
                 
                </View>
              
          </View>


          
        </View>


      </View>
    );
  }
