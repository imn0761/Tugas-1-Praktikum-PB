import { useEffect, useState } from 'react';
import {Button, FlatList, Image, Text, View, ScrollView, SafeAreaView} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Honda CIVIC Turbo Type-R',
        price: 1500,
        photo:
          'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1684329145/moas/news/1684329151_honda-civic-type-r-6-hatchback-sport-nyaris-sempurna.png',
      },
      {
        id: 2,
        name: 'Mazda Miata MX-5',
        price: 1000,
        photo:
          'https://lh6.googleusercontent.com/PTS9uKHRefFYPfNyhc7qzoBEzHR79PQX86X_nt-xEbwYyOGTOaHx_DQ0eLM0bvjqH-kfcIh6XIXQIduXZAGnJqVpnTVgQ3m19N0ZJGxLo0g-Mrz2BmVg-XDnqL7WtVxjeY8BDOU4KnFTDGfkbweK1uw',
      },
      {
        id: 3,
        name: 'Toyota Supra',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtL3NE1qw9CsOuFkX9iIiVFFzb7nC-eN1QdIGcGT-Qxg&s',
      },
      {
        id: 4,
        name: 'Toyota Supra',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtL3NE1qw9CsOuFkX9iIiVFFzb7nC-eN1QdIGcGT-Qxg&s',
      },
      {
        id: 5,
        name: 'Mazda Miata MX-5',
        price: 1000,
        photo:
          'https://lh6.googleusercontent.com/PTS9uKHRefFYPfNyhc7qzoBEzHR79PQX86X_nt-xEbwYyOGTOaHx_DQ0eLM0bvjqH-kfcIh6XIXQIduXZAGnJqVpnTVgQ3m19N0ZJGxLo0g-Mrz2BmVg-XDnqL7WtVxjeY8BDOU4KnFTDGfkbweK1uw',
      },
      {
        id: 6,
        name: 'Honda CIVIC Turbo Type-R',
        price: 1500,
        photo:
          'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1684329145/moas/news/1684329151_honda-civic-type-r-6-hatchback-sport-nyaris-sempurna.png',
      },
      {
        id: 7,
        name: 'Honda CIVIC Turbo Type-R',
        price: 1500,
        photo:
          'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1684329145/moas/news/1684329151_honda-civic-type-r-6-hatchback-sport-nyaris-sempurna.png',
      },
      {
        id: 8,
        name: 'Mazda Miata MX-5',
        price: 1000,
        photo:
          'https://lh6.googleusercontent.com/PTS9uKHRefFYPfNyhc7qzoBEzHR79PQX86X_nt-xEbwYyOGTOaHx_DQ0eLM0bvjqH-kfcIh6XIXQIduXZAGnJqVpnTVgQ3m19N0ZJGxLo0g-Mrz2BmVg-XDnqL7WtVxjeY8BDOU4KnFTDGfkbweK1uw',
      },
      {
        id: 9,
        name: 'Toyota Supra',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtL3NE1qw9CsOuFkX9iIiVFFzb7nC-eN1QdIGcGT-Qxg&s',
      },
      {
        id: 10,
        name: 'Toyota Supra',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtL3NE1qw9CsOuFkX9iIiVFFzb7nC-eN1QdIGcGT-Qxg&s',
      },
      {
        id: 11,
        name: 'Mazda Miata MX-5',
        price: 1000,
        photo:
          'https://lh6.googleusercontent.com/PTS9uKHRefFYPfNyhc7qzoBEzHR79PQX86X_nt-xEbwYyOGTOaHx_DQ0eLM0bvjqH-kfcIh6XIXQIduXZAGnJqVpnTVgQ3m19N0ZJGxLo0g-Mrz2BmVg-XDnqL7WtVxjeY8BDOU4KnFTDGfkbweK1uw',
      },
      {
        id: 12,
        name: 'Honda CIVIC Turbo Type-R',
        price: 1500,
        photo:
          'https://res.cloudinary.com/mufautoshow/image/upload/f_auto,f_auto/w_1200/v1684329145/moas/news/1684329151_honda-civic-type-r-6-hatchback-sport-nyaris-sempurna.png',
      },
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <FlatList
          data={products}
          numColumns={3}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Narin's Store
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                maxWidth: '40%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 100, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;