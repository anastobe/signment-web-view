import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState,useRef  } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Alert
} from 'react-native'
import { WebView } from "react-native-webview";



export default function Home({navigation}) {

  const webViewRef = useRef(null)

    useEffect(() => {
    const backAction = () => {

      webViewRef.current.goBack();
      
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


    return (
      <>
        <WebView ref={webViewRef} source={{ uri: 'https://www.theassignmentwriting.com/' }}  />
      </>

  )
}


const styles = StyleSheet.create({
  navbar: {
    height: 40,
    width: "100%",
    flexDirection: "row-reverse",
    paddingTop: 6,
    backgroundColor: "#fefefe",
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  back: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  forward: {
    width: 50,
    height: 50,
  },
});











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


















// import React, { useEffect, useState,useRef  } from 'react'
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   StyleSheet,
//   BackHandler,
//   Alert
// } from 'react-native'
// import WebView from "react-native-webview";

// const Home = ({navigation}) => {

//   const webViewRef = useRef(null)

//   // const gobackk = () => {
//   //   webViewRef.current.goBack();
//   // };

//   useEffect(() => {
//     const backAction = () => {

//       BackHandler.webViewRef.current.goBack();
      
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       "hardwareBackPress",
//       backAction
//     );

//     return () => backHandler.remove();
//   }, []);





//     return (
//     <>

//    <WebView
//     ref={webViewRef} 
//      source={{ uri: 'https://www.theassignmentwriting.com/' }}  />

//     </>
//   )
// }

// export default Home


