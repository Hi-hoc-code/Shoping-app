import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
const dataNew = [
  {
    id: '1',
    name: 'Blouse',
    image: require('../assets/image/anh1.png'),
    price: '17$',
  },
  {
    id: '2',
    name: 'T-Shirt Sailing',
    image: require('../assets/image/anh2.png'),
    price: '09$',

  },
  {
    id: '3',
    name: 'Blouse',
    image: require('../assets/image/anh1.png'),
    price: '17$',
  },
  {
    id: '4',
    name: 'T-Shirt Sailing',
    image: require('../assets/image/anh2.png'),
    price: '09$',
  },
  {
    id: '5',
    name: 'Blouse',
    image: require('../assets/image/anh1.png'),
    price: '17$',
  },
];
const dataSale = [
  {
    id: '1',
    name: 'Blouse',
    image: require('../assets/image/sale1.png'),
    price: '09$',
  },
  {
    id: '2',
    name: 'T-Shirt Sailing',
    image: require('../assets/image/sale2.png'),
    price: '09$',

  },
  {
    id: '3',
    name: 'Blouse',
    image: require('../assets/image/sale3.png'),
    price: '17$',
  },
  {
    id: '4',
    name: 'T-Shirt Sailing',
    image: require('../assets/image/sale1.png'),
    price: '09$',
  },
  {
    id: '5',
    name: 'Blouse',
    image: require('../assets/image/sale2.png'),
    price: '17$',
  },
];
const Item = ({ name, image, price }) => (
  <View style={styles.item}>
    <Image
      style={{ width: '100%', }}
      source={image}
    />
    <View style={{ width: '100%' }}>
      <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ textAlign: 'left', fontSize: 14, color: 'red', fontWeight: 'bold' }}>{price}</Text>
    </View>
  </View>
);
const ItemSale = ({ name, image, price }) => (
  <View style={styles.item}>
    <Image
      style={{ width: '100%', position: 'relative' }}
      source={image}
    />
    <Image source={require('../assets/image/saleImage.png')}
      style={{ position: 'absolute', top: 10, left: 20, width: 50 }} />
    <View style={{ width: '100%' }}>
      <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ textAlign: 'left', fontSize: 14, color: 'red', fontWeight: 'bold' }}>{price}</Text>
    </View>
  </View>
);
const MainScreens = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={styles.banner}
            source={require('../assets/image/banner.png')} />
          <Text style={styles.textSale}>Fashion {'\n'}sale</Text>
          <TouchableOpacity style={styles.btnCheck}><Text style={styles.textCheck}>Check</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'column', flex: 1, marginTop: 30 }}>
            <Text style={{ fontSize: 34, color: '#333', fontWeight: 'bold' }}>NEW</Text>
            <Text style={{ color: '#9B9B9B' }}>You’ve never seen it before!</Text>
          </View>
          <Text style={{ color: '#222222', fontSize: 14 }}>View all</Text>
        </View>
        <FlatList
          horizontal
          data={dataNew}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Item name={item.name} image={item.image} price={item.price} />}
          keyExtractor={item => item.id}
          style={{ marginTop: 20 }}
        />
        <View style={{justifyContent:'center', alignItems:'center'}}><View style={{ width: 290, backgroundColor: '#333', height: 0.5, marginVertical: 10 }}></View></View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={{ fontSize: 34, color: '#333', fontWeight: 'bold' }}>SALE</Text>
            <Text style={{ color: '#9B9B9B' }}>Super summer sale</Text>
          </View>
          <Text style={{ color: '#222222', fontSize: 14 }}>View all</Text>
        </View>
        <FlatList
          horizontal
          data={dataSale}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ItemSale name={item.name} image={item.image} price={item.price} />}
          keyExtractor={item => item.id}
          style={{ marginTop: 20 }}
        />
      </ScrollView>
    </View>
  )
}

export default MainScreens

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 600,
    position: 'relative',
  },
  textSale: {
    position: 'absolute',
    left: 15,
    bottom: 130,
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold'
  },
  btnCheck: {
    width: 160,
    height: 50,
    backgroundColor: '#DB3022',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    bottom: 70,
    borderColor: '#ff7066',
    borderWidth: 0.5
  },
  textCheck: {
    fontSize: 14,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  item: {
    backgroundColor: '#FEFEFE',
    width: 180,
    height: 230,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5
  },

})