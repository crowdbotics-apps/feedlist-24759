import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_232_5}>
        <View style={styles.View_232_6}>
          <Text style={styles.Text_232_6}>
            Gerencie com eficiência suas atividades diárias.
          </Text>
        </View>
        <View style={styles.View_232_7}>
          <Text style={styles.Text_232_7}>Bem-vindo ao FeedList</Text>
        </View>
      </View>
      <View style={styles.View_232_8}>
        <View style={styles.View_232_9}>
          <View style={styles.View_232_10}>
            <View style={styles.View_232_11}>
              <Text style={styles.Text_232_11}>retornar</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1355/4efe/f869d9fcb364895df07e2e11bfd67c5c"
            }}
            style={styles.ImageBackground_232_12}
          />
        </View>
      </View>
      <View style={styles.View_232_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6811/d719/59ef4460581d2c7b1e4bb38c3ba4d53d"
          }}
          style={styles.ImageBackground_232_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29ba/4541/60bce9a3518adb28546decb998936852"
          }}
          style={styles.ImageBackground_232_25}
        />
      </View>
      <View style={styles.View_232_29}>
        <View style={styles.View_232_30}>
          <View style={styles.View_232_31}>
            <View style={styles.View_232_32} />
          </View>
          <View style={styles.View_232_33}>
            <View style={styles.View_232_34}>
              <Text style={styles.Text_232_34}>ENTRAR</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_232_35}>
        <View style={styles.View_232_36}>
          <View style={styles.View_232_37}>
            <View style={styles.View_232_38} />
          </View>
          <View style={styles.View_232_39}>
            <View style={styles.View_232_40}>
              <Text style={styles.Text_232_40}>CADASTRAR-SE</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_232_41} />
      <View style={styles.View_232_42}>
        <Text style={styles.Text_232_42}>ESQUECI A SENHA</Text>
      </View>
      <View style={styles.View_232_43}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9e/959d/2c69f7b05ecf24c930fb2434c5a6455e"
          }}
          style={styles.ImageBackground_232_44}
        />
        <View style={styles.View_232_45}>
          <Text style={styles.Text_232_45}>E-mail </Text>
        </View>
      </View>
      <View style={styles.View_232_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9e/959d/2c69f7b05ecf24c930fb2434c5a6455e"
          }}
          style={styles.ImageBackground_232_47}
        />
        <View style={styles.View_232_48}>
          <Text style={styles.Text_232_48}>Senha</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3513/6de9/436e5d10a6d2598e775d6885b4a5ace4"
          }}
          style={styles.ImageBackground_232_49}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_232_5: {
    width: 623,
    minWidth: 623,
    height: 111,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 601
  },
  View_232_6: {
    width: 623,
    minWidth: 623,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 73
  },
  Text_232_6: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.6,
    textTransform: "none"
  },
  View_232_7: {
    width: 382,
    minWidth: 382,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_232_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.76,
    textTransform: "none"
  },
  View_232_8: {
    width: 98,
    minWidth: 98,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 86,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_9: {
    width: 98,
    height: 84,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_10: {
    width: 98,
    height: 34,
    top: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_11: {
    width: 98,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_232_11: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.4000000000000001,
    textTransform: "none"
  },
  ImageBackground_232_12: {
    width: 21.90453338623047,
    height: 34.20001220703125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38
  },
  View_232_15: {
    width: 123.27018737792969,
    minWidth: 123.27018737792969,
    height: 111.80401611328125,
    minHeight: 111.80401611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 419,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_232_16: {
    width: 123.27018737792969,
    height: 111.80401611328125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_232_25: {
    width: 16.17376708984375,
    height: 3.78192138671875,
    top: 68.5118408203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.2578125
  },
  View_232_29: {
    width: 664,
    minWidth: 664,
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 1090,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_30: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_31: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_32: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(4, 212, 225, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_232_33: {
    width: 664,
    height: 28,
    top: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_34: {
    width: 664,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_232_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_232_35: {
    width: 664,
    minWidth: 664,
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 1192,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_36: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_37: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_38: {
    width: 664,
    height: 82,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(4, 212, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_232_39: {
    width: 664,
    height: 28,
    top: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_40: {
    width: 664,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_232_40: {
    color: "rgba(4, 212, 225, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_232_41: {
    width: 270,
    height: 28,
    top: 1042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 431,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_232_42: {
    width: 270,
    top: 1022,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 424
  },
  Text_232_42: {
    color: "rgba(82, 84, 87, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.6599999999999999,
    textTransform: "none"
  },
  View_232_43: {
    width: 664,
    minWidth: 664,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 810,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_232_44: {
    width: 664,
    height: 0,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_232_45: {
    width: 300.1643981933594,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2
  },
  Text_232_45: {
    color: "rgba(152, 152, 152, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_232_46: {
    width: 664,
    minWidth: 664,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 958,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_232_47: {
    width: 664,
    height: 0,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_232_48: {
    width: 92.98021697998047,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2
  },
  Text_232_48: {
    color: "rgba(152, 152, 152, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_232_49: {
    width: 38.4049072265625,
    height: 28.66682243347168,
    top: 2.96630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 616
  },
  View_2: { height: 1500 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
