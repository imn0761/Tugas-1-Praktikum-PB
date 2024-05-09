import React, { useState } from 'react';
import { Alert, Button, Image, Text, TextInput, View } from "react-native";

const ValidasiPalindrom = () => {
  const [inputText, setInputText] = useState('');
  const [isValidPalindrome, setIsValidPalindrome] = useState(false);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const validatePalindrome = () => {
    const reversedText = inputText.split('').reverse().join('');
    setIsValidPalindrome(inputText === reversedText);
  };

return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop : -250,
    }}>

    <Text style={{
      fontSize : 25,
      fontWeight : 'bold',
      color : 'blue',
    }}>Hallo</Text>

    <Image style = {{
      width : 200,
      height : 200,
    }}
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png'
    }}/>

      <TextInput style = {{
        borderWidth : 1,
        borderColor : 'Black',
        width : 200,
        height : 40,
        padding : 10,
        marginTop : 30,
        marginBottom : 10,
        borderRadius : 10,
      }}
        placeholder="Masukkan Kata"
        value={inputText}
        onChangeText={handleInputChange}
      />

      <Button title="Validate" onPress={validatePalindrome} />
      {isValidPalindrome? (
        <Text style={{
          color : 'green',
          margin : -110,
        }}>Terdeteksi Palindrome!</Text>
      ) : (
        <Text style={{
          color : 'red',
          margin : -110,
        }}>TIDAK Terdeteksi Palindrome!</Text>
      )}
      
    </View>
  );
};
export default ValidasiPalindrom;