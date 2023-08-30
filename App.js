import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'reflect-metadata'
import express from "express";
import bodyParser from "body-parser"; 

export default function App() {
  const app = express();
  app.use(bodyParser.json());

  app.post("/register", (req, res) => {
    const {email, password} = req.body;
    console.log(email, password)
  });

  app.listen(19006);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
