import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */ import LoginInputAutocomplete0209962 from "../features/LoginInputAutocomplete0209962/navigator"

const AppNavigator = {
  LoginInputAutocomplete0209962: { screen: LoginInputAutocomplete0209962 },

  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator
  },

  {
    contentComponent: SideMenu
  }
)

const AppContainer = createAppContainer(DrawerAppNavigator)

export default AppContainer
