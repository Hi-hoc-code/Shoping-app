import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Alert, ScrollView } from 'react-native'
import React from 'react'


const optionWomen = [
  {
    id: '1',
    title: 'New',
    image: require('../assets/image/imgNew1.png'),
  },
  {
    id: '2',
    title: 'Clothes',
    image: require('../assets/image/imageClothes.png'),
  },
  {
    id: '3',
    title: 'Shoes',
    image: require('../assets/image/imgShoes.png'),
  },
  {
    id: '4',
    title: 'Accesories',
    image: require('../assets/image/imgAccesories.png'),
  },
]
const Item = ({ id, title, image }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => actionOnRow(id)}>
      <View style={{ backgroundColor: "#fff", width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#333', fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <Image source={image} style={{ width: '50%', height: '100%' }} />
    </TouchableOpacity >
  );
};
const actionOnRow = (id) => {
  Alert.alert('Selected Item ID:', id);
}
const WomenScreens = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity style={[styles.btnEvents, { alignItems: 'center' }]}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', }}>SUMMER SALES</Text>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>Up to 50% off</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={optionWomen}
          renderItem={({ item }) => <Item title={item.title} image={item.image} id={item.id} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  )
}

export default WomenScreens

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10
  },
  btnEvents: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 110,
    backgroundColor: '#DB3022',
    borderRadius: 8,
    marginTop: 15
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 110,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 8
  }
})