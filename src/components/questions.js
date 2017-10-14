import React, { Component } from 'react';
import Question from './question';

const jsonData = {"quiz" : {
    "quiz1" : {
      "question1" : {
        "correctoption" : "Australia",
        "options" : {
          "option1" : "Nigeria",
          "option2" : "India",
          "option3" : "Australia",
          "option4" : "United States"
        },
        "question" : "Which country is home to the kangaroo?"
      },
      "question2" : {
        "correctoption" : "Pisa",
        "options" : {
            "option1" : "Pisa",
            "option2" : "Rome",
            "option3" : "Venice",
            "option4" : "Milan"
          },
        "question" : "Which Italian city is famous for its leaning tower?"
      },
      "question3" : {
        "correctoption" : "Egypt",
        "options" : {
            "option1" : "England",
            "option2" : "Denmark",
            "option3" : "Russia",
            "option4" : "Egypt"
          },
        "question" : "Pharaoh is the title given to the rulers of which ancient county?"
      },
      "question4" : {
        "correctoption" : "Cricket",
        "options" : {
            "option1" : "Hockey",
            "option2" : "Cricket",
            "option3" : "Volleyball",
            "option4" : "none of the above"
          },
        "question" : "Which sport used the word ‘home run’, long before baseball used it?"
      },
      "question5" : {
        "correctoption" : "China",
        "options" : {
            "option1" : "India",
            "option2" : "China",
            "option3" : "Brazil",
            "option4" : "England"
          },
          "question" : "Which country hosted the 2008 Olympic Games?"
      },
    }
  }
  }

class Questions extends Component {
    constructor(props) {
        super(props);
        this.qno = 0;
        this.score = 0;
    }
    state = {
        question : "",
        options : "",
        correctoption : "",
        countCheck : 0,
        score: ""
    }
    componentDidMount = () => {
        this.qno = this.qno;
        //this.qno++;
     
        const jdata = jsonData.quiz.quiz1;
        const arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
        let question = arrnew[this.qno].question;
        let options = arrnew[this.qno].options;
        let correctoption = arrnew[this.qno].correctoption;
        this.setState(()=> ({
            question : question,
            options : options,
            correctoption : correctoption,
            countCheck : 0
        }));
    }
    handleOptionClick = (v) => {
        //If Correct option clicked
        if (v === this.state.correctoption && this.qno < 5) {
            this.qno = this.qno;
            this.score = this.score;
            this.qno++;
            this.score++;
        
            
            const jdata = jsonData.quiz.quiz1;
            const arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
            // Stopping clicking beyond question lengths
                if(this.qno < arrnew.length) { 
                let question = arrnew[this.qno].question;
                let options = arrnew[this.qno].options;
                let correctoption = arrnew[this.qno].correctoption;
                const count = this.state.countCheck + 1
                this.setState(()=> ({
                    question : question,
                    options : options,
                    correctoption : correctoption,
                    countCheck : count
                }));
                console.log(count);
                } else {
                this.setState(()=> ({
                    question : '',
                    options : '',
                    correctoption : '',
                    countCheck : 0,
                    score: `Your score is ${this.score}`
                }));
                }
        } else {
            if(this.qno <= 3 ){
                this.handleWrong();
            } else {
                this.qno++;
                this.setState(()=> ({
                    question : '',
                    options : '',
                    correctoption : '',
                    countCheck : 0,
                    score: `Your score is ${this.score}`
                }));
            }
        }
    };
    
    //Handling the wrong guesses
    handleWrong = () => {
        this.qno = this.qno;
        this.score = this.score;
        this.qno++;
    
        
        const jdata = jsonData.quiz.quiz1;
        const arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
        let question = arrnew[this.qno].question;
        
        let options = arrnew[this.qno].options;
        let correctoption = arrnew[this.qno].correctoption;
        this.setState(()=> ({
            question : question,
            options : options,
            correctoption : correctoption,
            countCheck : 0
        }));
    };

    //Back button settings
    handleBack = () => {
        if(this.qno > 0 && this.qno <= 5){
          this.qno = this.qno;
          this.qno--;
          const jdata = jsonData.quiz.quiz1;
          const arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
          let question = arrnew[this.qno].question;
          let options = arrnew[this.qno].options;
          let correctoption = arrnew[this.qno].correctoption;
          this.setState(()=> ({
              question : question,
              options : options,
              correctoption : correctoption,
              countCheck : 0,
              score: undefined
          }));
        }
    };
    
    //Resetting the Quiz 

    handleReset = () => {
        this.qno = this.qno;
        this.qno = 0;
        this.score = this.score;
        this.score = 0;
     
        const jdata = jsonData.quiz.quiz1;
        const arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
        let question = arrnew[this.qno].question;
        let options = arrnew[this.qno].options;
        let correctoption = arrnew[this.qno].correctoption;
        this.setState(()=> ({
            question : question,
            options : options,
            correctoption : correctoption,
            countCheck : 0,
            score: undefined
        }));
    }

    render(props) {
        return (
            <div>
                <Question 
                    question={this.state.question} 
                    options={this.state.options}
                    correctoption={this.state.correctoption}
                    score={this.state.score}
                    handleOptionClick={this.handleOptionClick}
                    handleBack={this.handleBack}
                    handleReset={this.handleReset}
                 />
            </div>
        )
    }
}
   
export default Questions;
