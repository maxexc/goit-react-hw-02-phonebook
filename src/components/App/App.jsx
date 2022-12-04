import Notification from '../Notification/Notification.jsx'
import Section from 'components/Section/Section.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  FeedbackOptions  from '../Feedback/Feedback.jsx'


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  ratingButtonClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    })); 
    console.log(item);
  };
 
  // ratingButtonClick = () => {this.setState({
  //   good: this.state.good + 33})};

  countTotalFeedback = () => 
  Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = () => 
  Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const positiveFeedback =this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.ratingButtonClick} 
          />
        </Section>

        <Section title="Statistics:">
          {totalFeedback ? ( 
              <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                PositivePercentage=
                {positiveFeedback ? positiveFeedback : 0 }
              />           
            ) : (    
              <Notification  message="There is no one feedback" />      
               )                          
          }          
        </Section>        
      </>
    )
  } 
}


export default App

