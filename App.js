import react from 'react';
import {View, Text, Image, TextInput, Button, ScrollView, Linking} from 'react-native';


const contactme = "https://instagram.com/amarafief?igshid=MzMyNGUyNmU2YQ==";
const erp = "http://softegra.id:8008/erp/#/dashboard"; 
const compro = "https://www.braincodesolution.com/#/";


const Porto = () => {
  return (
    <ScrollView>
    <View 
      style={{ 
        padding: 70, 
        alignItems:'center',
        backgroundColor: '#fefefe'
        }}>
    <Image
        style={{
          width:150, 
          height:150,
          borderRadius:100
          }}
    source={require('./assets/aa.jpeg')}/>
    <Text 
        style={{
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: 'black', 
          marginTop: 10, 
          fontSize:20
      }}>Afief Amar Purnomo</Text>
    <View>
    <Text 
        style={{ 
          textAlign: 'center', 
          color: '#808080', 
          marginTop: 10, 
          fontSize: 15
      }}>Saya Afief Amar Purnomo. Siswa SMK Telkom Purwokerto dari jurusan Rekayasa Perangkat Lunak, saya spesialisasi "Backend engineer".</Text>
    <View 
        style={{
          marginTop:5, 
          alignItems:'center'
          }}>
    <Button title="Contact Me" color="#071952" onPress={()=> Linking .openURL(contactme)}/></View>
    <View>
    <Text 
        style={{
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: 'black', 
          marginTop: 10, 
          fontSize:15
      }}>My Recent Project</Text>
    <Image 
        style={{
          width:300, 
          height:150, 
          marginTop:10
          }}
        source={require('./assets/dashboard_laundry.png')}/>
    <Text 
        style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          color: 'black', 
          marginTop: 10, 
          fontSize:15
      }}>Ciss Laundry</Text>
    <Text 
        style={{
          textAlign: 'left', 
          color: '#808080', 
          fontSize:13
      }}>Web Project</Text>
    <View 
        style={{
          marginTop:-36, 
          marginLeft:180,
          }}>
      <Button title="Learn More" color="#071952"
      />
      </View>
    <View>
      <Image 
        style={{
          width:300, 
          height:150, 
          marginTop:15
          }}
        source={require('./assets/erp.png')}/>
      <Text 
        style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          color: 'black', 
          marginTop: 10, 
          fontSize:15
      }}>ERP Finance</Text>
      <Text 
        style={{
          textAlign: 'left', 
          color: '#808080', 
          fontSize:13
      }}>Web Project</Text>
      <View 
        style={{
          marginTop:-36, 
          marginLeft:180,
          }}>
      <Button title="Learn More" color="#071952" onPress={()=> Linking .openURL(erp)}
      />
           </View>
          </View>
    <View>
      <Image 
        style={{
          width:300, 
          height:150, 
          marginTop:15
          }}
        source={require('./assets/compro.png')}/>
      <Text 
        style={{
          fontWeight: 'bold', 
          textAlign: 'left', 
          color: 'black', 
          marginTop: 10, 
          fontSize:15
      }}>Compro</Text>
      <Text 
        style={{
          textAlign: 'left', 
          color: '#808080', 
          fontSize:13
      }}>Web Project</Text>
    </View>
    <View 
        style={{
          marginTop:-36, 
          marginLeft:180,
          }}>
      <Button title="Learn More" color="#071952" onPress={()=> Linking .openURL(compro)}
      />
           </View>
        </View>
      </View>
    </View>
    </ScrollView>

  );
};

export default Porto;