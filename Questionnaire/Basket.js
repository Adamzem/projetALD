import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native'
import { SimpleSurvey } from 'react-native-simple-survey'
import { COLORS } from '../Res/Colors'

const GREEN = '#4056f4'
const PURPLE = '#ce2d4f'

const survey = [
  {
    questionType: 'Info',
    questionText:
      'Bienvenue, ce questionnaire consiste à vous connaitre un peu plus. '
  },
  {
    questionType: 'TextInput',
    questionText: 'Quel est ton poste ?',
    placeholderText: ''
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Vous etes droitier ou gaucher?',
    options: [
      {
        optionText: 'Droitier',
        value: 'instrumentoui'
      },
      {
        optionText: 'Gaucher',
        value: 'instrumentnon'
      }
    ]
  },
  {
    questionType: 'NumericInput',
    questionText: 'Votre jeu de tete sur 10 ?',
    defaultValue: ''
  },
  {
    questionType: 'TextInput',
    questionText: 'Votre poids ?',
    placeholderText: ''
  },
  {
    questionType: 'TextInput',
    questionText: 'Votre taille ?',
    placeholderText: ''
  },
  {
    questionType: 'NumericInput',
    questionText: 'Nom d\nannées de pratique ?',
    defaultValue: ''
  },
  {
    questionType: 'TextInput',
    questionText: 'Le nombre de récompenses acquises ?',
    placeholderText: 'médailles, trophées etc ...'
  }
]

export default class SurveyScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
        headerLeft: null
      },
      headerTintColor: '#fff',
      headerTitle: 'Questionnaire de compétences',
      headerTitleStyle: {
        flex: 1
      }
    }
  }

  constructor (props) {
    super(props)
    this.state = { backgroundColor: PURPLE, answersSoFar: '' }
  }

  onSurveyFinished (answers) {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */

    const infoQuestionsRemoved = [...answers]

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {}
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value
    }

    this.props.navigation.navigate('SurveyCompleted', {
      surveyAnswers: answersAsObj
    })
  }

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  onAnswerSubmitted (answer) {
    this.setState({
      answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2)
    })
    switch (answer.questionId) {
      case 'favoriteColor': {
        if (COLORS.includes(answer.value.toLowerCase())) {
          this.setState({ backgroundColor: answer.value.toLowerCase() })
        }
        break
      }
      default:
        break
    }
  }

  renderPreviousButton (onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Précédent'}
        />
      </View>
    )
  }

  renderNextButton (onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Suivant'}
        />
      </View>
    )
  }

  renderFinishedButton (onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          title={'Terminer'}
          onPress={() => this.props.navigation.navigate('Menu')}
          disabled={!enabled}
          color={GREEN}
        />
      </View>
    )
  }

  renderButton (data, index, isSelected, onPress) {
    return (
      <View
        key={`selection_button_view_${index}`}
        style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
      >
        <Button
          title={data.optionText}
          onPress={onPress}
          color={isSelected ? GREEN : PURPLE}
          style={isSelected ? { fontWeight: 'bold' } : {}}
          key={`button_${index}`}
        />
      </View>
    )
  }

  renderQuestionText (questionText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    )
  }

  renderTextBox (onChange, value, placeholder, onBlur) {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChange(text)}
          numberOfLines={1}
          underlineColorAndroid={'white'}
          placeholder={placeholder}
          placeholderTextColor={'rgba(184,184,184,1)'}
          value={value}
          multiline
          onBlur={onBlur}
          blurOnSubmit
          returnKeyType='done'
        />
      </View>
    )
  }

  renderNumericInput (onChange, value, placeholder, onBlur) {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={text => {
          onChange(text)
        }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={'numeric'}
        onBlur={onBlur}
        maxLength={3}
      />
    )
  }

  renderInfoText (infoText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    )
  }

  render () {
    return (
      <View
        style={[
          styles.background,
          { backgroundColor: this.state.backgroundColor }
        ]}
      >
        <View style={styles.container}>
          <SimpleSurvey
            ref={s => {
              this.surveyRef = s
            }}
            survey={survey}
            renderSelector={this.renderButton.bind(this)}
            containerStyle={styles.surveyContainer}
            selectionGroupContainerStyle={styles.selectionGroupContainer}
            navButtonContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
            renderPrevious={this.renderPreviousButton.bind(this)}
            renderNext={this.renderNextButton.bind(this)}
            renderFinished={this.renderFinishedButton.bind(this)}
            renderQuestionText={this.renderQuestionText}
            onSurveyFinished={answers => this.onSurveyFinished(answers)}
            onAnswerSubmitted={answer => this.onAnswerSubmitted(answer)}
            renderTextInput={this.renderTextBox}
            renderNumericInput={this.renderNumericInput}
            renderInfo={this.renderInfoText}
          />
        </View>

        <ScrollView style={styles.answersContainer}>
          <Text style={{ textAlign: 'center' }}></Text>
          <Text>{this.state.answersSoFar}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',

    elevation: 20,
    borderRadius: 10,
    flex: 1
  },
  answersContainer: {
    width: '90%',
    maxHeight: '20%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#4056f4',
    elevation: 20,
    borderRadius: 10
  },
  surveyContainer: {
    width: 'auto',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end'
  },
  background: {
    flex: 1,
    minHeight: 800,
    maxHeight: 800,
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,

    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10
  }
})
