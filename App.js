import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Entry from './entry';
import DistrictWise from './components/district';
const Stack = createStackNavigator();
function App() {
   return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Entry" component={Entry} options={{ title: "Covid19 India",
                      headerTitleAlign:"center",
                      headerStyle: {
                      backgroundColor: '#000000',
                      },
          headerTintColor: '#4169e1',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}} />
         <Stack.Screen name="DistrictWise" component={DistrictWise} options={({ route }) => ({ title: route.params.data,headerTitleAlign:"center" ,
         headerStyle: {
                      backgroundColor: '#000000',
                      },
                      cardStyle:{backgroundColor:'black'},
          headerTintColor: '#4169e1'})} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
