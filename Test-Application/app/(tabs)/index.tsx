import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProductCatalogScreen from './src/screens/ProductCatalogScreen';
import OrderManagementScreen from './src/screens/OrderManagementScreen';

const Stack = createStackNavigator();
const AuthContext = createContext<{ isAuthenticated: boolean; login: () => void }>({ 
  isAuthenticated: false, 
  login: () => {} 
});

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="ProductCatalog" component={ProductCatalogScreen} />
              <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;