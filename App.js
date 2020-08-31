import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';



export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header/> 
      <Text style={styles.text}>what's up zack?!</Text>
      
      <View style={{ flex: 1, flexBasis: '100%'}}>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexBasis: '50%'
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

class Header extends React.Component {
  render() {
    return (
      <Text style={styles.header}>Better Sweater</Text>
    );
  }
}

// class ExpoCamera extends React.Component {
//   render() {
//     if (hasPermission === false) {
//       return <Text>No access to camera</Text>;
//     }
//     return(
//       <View style={{ flex: 1 }}>
//         <Camera style={{ flex: 1 }} type={type}>
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: 'transparent',
//               flexDirection: 'row',
//             }}>
//             <TouchableOpacity
//               style={{
//                 flex: 0.1,
//                 alignSelf: 'flex-end',
//                 alignItems: 'center',
//               }}
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//                 );
//               }}>
//               <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: 25,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
  },
  header: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontSize: 30,
    fontFamily: 'Avenir-Heavy',
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 20,
  }
});
