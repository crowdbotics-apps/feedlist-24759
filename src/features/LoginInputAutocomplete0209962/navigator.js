import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SlideMenuIcon } from "../../navigator/slideMenuIcon"
import Blank from "./screens/index"
const Stack = createStackNavigator()
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Blank"}
        component={Blank}
        options={({ navigation }) => ({
          headerLeft: () => <SlideMenuIcon navigation={navigation} />,
          headerTitle: ""
        })}
      />
    </Stack.Navigator>
  )
}
