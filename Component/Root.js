import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../candidat/Home'
import AboutCandidat from '../candidat/AboutCandidat'
import SignUp from '../Register/SignUp'
import Menu from '../candidat/Menu'
import Assistance from '../candidat/Assistance'
import FilePicker from '../Component/FIlePicker'
import SurveyScreen from '../Questionnaire/SurveyScreenChanteur'
import Survey from '../Questionnaire/Survey'
import Humoriste from '../Questionnaire/Humoriste'
import Comédien from '../Questionnaire/Comédien'
import Mannequin from '../Questionnaire/Mannequin'
import Télé from '../Questionnaire/Télé-réalité'
import Football from '../Questionnaire/Football'
import Basket from '../Questionnaire/Basket'
import Login from '../Register/Login'
// import Channel from '../Chat/ChannelScreen'
import HomeChat from '../Chat/HomeChat'
import Messages from '../Chat/Messages'
import inscription from '../agents/inscription'
import connexion from '../agents/connexion'
import AboutAgent from '../agents/AboutAgent'
import Card from '../agents/Card'
// import ForgotPass from '../Register/ForgotPass'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  AboutCandidat: {
    screen: AboutCandidat
  },
  SignUp: {
    screen: SignUp
  },
  Menu: {
    screen: Menu
  },
  FilePicker: {
    screen: FilePicker
  },

  Assistance: {
    screen: Assistance
  },
  SurveyScreen: {
    screen: SurveyScreen
  },
  Survey: {
    screen: Survey
  },
  Humoriste: {
    screen: Humoriste
  },
  Comédien: {
    screen: Comédien
  },
  Mannequin: {
    screen: Mannequin
  },
  Télé: {
    screen: Télé
  },
  Football: {
    screen: Football
  },
  Basket: {
    screen: Basket
  },
  Login: {
    screen: Login
  },
  HomeChat: {
    screen: HomeChat
  },
  Messages: {
    screen: Messages
  },
  inscription: {
    screen: inscription
  },
  connexion: {
    screen: connexion
  },
  AboutAgent: {
    screen: AboutAgent
  },
  Card: {
    screen: Card
  }
  // ForgotPass: {
  //   screen: ForgotPass
  // }
})

export default createAppContainer(RootStack)
