import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  
} from "react-native";

export default class Main extends Component {
render(){
   return(
     <View style = {styles.container}>
        <TextInput style={styles.textInput}></TextInput>
        <Image source={require('../assets/searchicon.png')} style={styles.searchIcon}></Image>
        <TouchableOpacity>
        <Image source={require('../assets/3Dots.svg')} style={styles.dotStyle}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.takeAway}>TakeAway</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.dining}>Dining</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/shake.jpeg')} style={styles.shakeImg}></Image>
        <Text style={styles.shakeText}>Shakes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/fastFood.jpeg')} style={styles.fastFoodImg}></Image>
        <Text style={styles.fastFoodText}>FastFood</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/junkFood.jpeg')} style={styles.junkFoodImg}></Image>
        <Text style={styles.junkFoodText}>JunkFood</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/mainCource.jpeg')} style={styles.mainCourceImg}></Image>
        <Text style={styles.mainCourceTxt}>MainCource</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/staterFoot.jpeg')}style={styles.starterFoodImg}></Image>
        <Text style={styles.starterFoodTxt}>Starter</Text>
        </TouchableOpacity>

        
     </View>


   );
}
}
const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   mainBg:{
     flex:1,
     width:370,
     height:485,
   },
   starterFoodImg:{
     width:95,
     height:160,
     position:'absolute',
     left:120,
     top:215,
     borderRadius:10,

   },
   starterFoodTxt:{
     position:'absolute',
     left:135,
     top:375,
     fontSize:18,
     fontWeight:'bold',


   },
   mainCourceTxt:{
     position:'absolute',
     left:10,
     top:375,
     fontSize:18,
     fontWeight:'bold',

   },
   mainCourceImg:{
     width:95,
     height:160,
     position:'absolute',
     left:10,
     top:215,
     borderRadius:10,

     
   },
   junkFoodText:{
     position:'absolute',
     left:233,
     top:192,
     fontSize:18,
     fontWeight:'bold',

   },
   junkFoodImg:{
     width:95,
     height:160,
     position:'absolute',
     left:230,
     top:30,
     borderRadius:10,

   },

   fastFoodImg:{
     width:95,
     height:160,
     position:'absolute',
     left:120,
     top:30,
     borderRadius:10,

   },
   fastFoodText:{
     position:'absolute',
     left:127,
     top:192,
     fontSize:18,
     fontWeight:'bold',

   },
   shakeImg:{
     width:95,
     height:160,
     position:'absolute',
     left:10,
     top:30,
     borderRadius:10,
   },
   shakeText:{
     position:'absolute',
     left:25,
     top:192,
     fontSize:20,
     fontWeight:'bold',

   },
   takeAway:{
     width:130,
     height:40,
     position:'absolute',
     left:50,
     bottom:35,
     backgroundColor:'red',
     borderRadius:5,
     textAlign:'center',
     paddingTop:10,
     fontWeight:'bold',
     fontSize:17
   },
   dining:{
     width:130,
     height:40,
     position:'absolute',
     left:190,
     bottom:35,
     backgroundColor:'red',
     borderRadius:5,
     textAlign:'center',
     paddingTop:10,
     fontWeight:'bold',
     fontSize:17

   },
   searchIcon:{
      width:20,
      height:20,
      position:'absolute',
      top:64,
      right:305,

   },
   dotStyle:{
      width:25,
      height:25,
      position:'absolute',
      bottom:40,
      right:300,

   },
   textInput:{
     fontSize:30,
   fontFamily:'comic',
   textAlign:'center',
   color:'Black',
   fontWeight:'bold',
   width:290,
   height:25,
   borderWidth:2,
   borderColor:'lightgreen',
   justufyContent:'center',
   marginLeft:35,
   marginTop:60,
   borderRadius:10,
   },




});




