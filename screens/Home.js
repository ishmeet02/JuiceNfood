import * as React from 'react';
import {
Text,
View,
StyleSheet,
ImageBackground,
SafeAreaView,
TouchableOpacity,
Image

 } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
  <View style={styles.container}>
     <SafeAreaView style={styles.droidSafeArea}/>
     <ImageBackground source={require('../assets/backgroundP.jpeg')}style={styles.bgImg}></ImageBackground>
     <Text style={styles.headline}>Juice'N'Food</Text>
     <Image source={require('../assets/fd.png')}style={styles.foodImg}></Image>
     <TouchableOpacity>
     <Text style={styles.faceBook}>Facebook</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.gooGle}>Google</Text>  
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.singin}>SignIn</Text>
     </TouchableOpacity>
     
    
  </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender"
  },
  bgImg:{
    width:335,
    height:540
  },
  headline: {
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:5,
    textDecorationLine:'underline',
    fontSize:30,
    color:"black",
    fontStyle:'italic',
    position:'absolute',
    left:60,
    top:15,
    right:48
  },
  foodImg:{
    width:100,
    height:120,
    position:'absolute',
    top:90,
    bottom:20,
    right:115,
    
  },
  singin:{
    backgroundColor:'blue',
    borderRadius:50,
    width:175,
    height:50,
    textAlign:'center',
    fontSize:30,
    justifyContent:'center',
    color:'lavender',
    paddingTop:4,
    marginLeft:85,
    position:'absolute',
    top:-210,
  },
  
  faceBook:{
    backgroundColor:'blue',
    borderRadius:50,
    width:175,
    height:50,
    textAlign:'center',
    fontSize:30,
    justifyContent:'center',
    color:'lavender',
    paddingTop:4,
    position:'absolute',
    top:-150,
    left:85,
  },
  gooGle:{
    fontSize:30,
    textAlign:'center',
    color:'lavender',
    marginTop:1,
    width:175,
    height:50,
    marginLeft:85,
    backgroundColor:'blue',
    borderRadius:50,
    paddingTop:4,
    position:'absolute',
    top:-90,  
  }, 
});