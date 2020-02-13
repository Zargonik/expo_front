import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const mainRouter = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Main} />
      </Stack.Navigator>
  )
}

const rootRouter = {
  main: mainRouter(),
}

export default rootRouter;