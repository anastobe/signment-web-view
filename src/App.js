import 'react-native-gesture-handler'
import React, { useState ,useEffect} from 'react'

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  ActivityIndicator
} from 'react-native'

import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'

const App = () => {  
  
  return (
        <>
         <Provider store={store}>
           <MainNavigation />
         </Provider>
        </>

  )
}

export default App






























// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Text, View, StyleSheet, BackHandler, Alert, TouchableOpacity } from "react-native";
// import WebView from "react-native-webview";

// const App = () => {

//   const[backButtonEnabled, setbackButtonEnabled] = useState("")

//   useEffect(()=>{
//         BackHandler.addEventListener('hardwareBackPress', backHandler);
//         BackHandler.removeEventListener('hardwareBackPress', backHandler);
//   },[])


//   const backHandler = () => {
//           if(backButtonEnabled) {
//               refs[WEBVIEW_REF].goBack();
//               return true;
//           }
//       }

//       const WebPage = () =>{
//         return(
//           <View style={{ width: '100%', height: '100%' }}  >
//           <WebView source={{ uri: 'https://www.theassignmentwriting.com/' }}   />
//           </View>
//         )
//       }


//   return (
//   <View>
//     <TouchableOpacity onPress={WebPage} >
//       <Text>go for site</Text>
//     </TouchableOpacity>
//       {/* <WebView source={{ uri: 'https://www.theassignmentwriting.com/' }}   /> */}
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "bold"
//   }
// });

// export default App;













// import 'react-native-gesture-handler'
// import React,{useEffect , useRef, useState } from 'react'
// // import MainNavigation from './navigation/navigation'
// import { Provider } from 'react-redux'
// import { store } from './stores'
// import { Text, View, BackHandler, Alert, StyleSheet } from 'react-native'
// import { WebView } from 'react-native-webview';
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const App = ({navigation}) => {

//   const[view, setview] = useState(true)

//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert("Hold on!", "Are you sure you want to go back?", [
//         {
//           text: "Cancel",
//           onPress: () =>  setview(!view)

          
//         //   <View style={{ width: '100%', height: '100%' }}  >
//         //   <WebView source={{ uri: 'https://www.google.co.uk/' }}   />
//         //  </View>
//         ,

//           style: "cancel"
//         },
//         { text: "YES", onPress: () => BackHandler.exitApp() }
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       "hardwareBackPress",
//       backAction
//     );

//     return () => backHandler.remove();
//   }, []);


//   // const backPage = () =>{
//   //   <View style={{ width: '100%', height: '100%' }}  >
//   //   <WebView source={{ uri: 'https://www.google.co.uk/' }}   />
//   //  </View>
//   // }


//   return (

// view ?
//     <View style={{ width: '100%', height: '100%' }}  >
//        <WebView source={{ uri: 'https://www.theassignmentwriting.com/' }}   />
//       </View>
  
//       : 
//       <View>
//       <Text>anas</Text>
//       </View>
  
//   )
// }


// export default App    