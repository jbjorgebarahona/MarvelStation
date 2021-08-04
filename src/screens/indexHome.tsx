import * as React from "react";
import { View, Button, Linking } from "react-native";
import { RootStackParams } from "../routes/StackNavigation";
import { StackScreenProps } from "@react-navigation/stack";



interface Props extends StackScreenProps<RootStackParams, "IndexHome"> {}
const IndexHome = ({ navigation }: Props) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

/*

*/ 

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#3F3E3E'}}>
    
        <Button
        title="Heores"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      
      <View style={{ marginVertical: 8 }} />
      <Button title="Tienda" onPress={ async () => {await Linking.openURL('https://laughing-mahavira-71c3e2.netlify.app')
}} />
      
    </View>
  );
};

export default IndexHome;
