# Code Quiz Challenge

## Purpose
As an aspiring full-stack web developer, use this code quiz challenge to prepare for coding assessments often required for the interview process. The timed quiz, comprised of multiple-choice questions, can keep your score from each attempt for you to monitor your improvement or compare your progress with your peers. 

[Deployed coding quiz application](https://grace-anderson.github.io/code-quiz/)


## Usage
The user can click through this interactive coding quiz, entering initials to save the their score before resetting and starting over

On the quiz home page, the user starts by clicking the "Start Quiz" button. This click event initiates a 75 second timer, which starts reducing by 1 second increments, and presents the first of fifteen multi-choice questions.
- A correct answer displays a "correct" message
- An incorrect answer displays an "incorrect" message and reduces the timer by ten seconds. 
- The quiz challenge ends when the timer reaches 0 or when all questions are answered

When the quiz ends, the user is presented with the remaining time, their score, and a field in which to enter their initials. After submitting their initials, the user is presented with the high scores page which lists user initials with their scores, ordered from the highest to the lowest score. The high score page can also be accessed from the quiz home page. From the high score page, the user can choose to return to the quiz home page or clear the high scores.

The application code is available on [GitHub](https://github.com/grace-anderson/code-quiz). 


### Instructions

#### 1. Click Generate Password
Click the **Start Quiz** button to start the quiz. 

=> The application will show the first multi-choice question and start a 75 second time, which will reduce by 1 second until 0 is reached (page top-right).

#### 2. Answer the first multi-choice question
Choose one answer from the multiple choices presented.

=> If your choice is **correct**, a green "correct" message will quickly display (800 ms)
=> if your choice is **incorrect**, a red "incorrect" message will quickly display (800 ms) AND 10 seconds will be deducted from the timer

=> If the timer is greater than 0, the next question will display

#### 3. Continue to answer each multi-choice question
Continue to choose an answer for each multi-choice question

=> The quiz challenge will end when the timer reaches 0 OR when all questions are answered. 

#### 4. View score and enter initials 
=> After the quiz ends, the your score will display. 

Enter your initials and click **Submit**. 

### 5. View high scores
=> After clicking submit, the High Scores page displays listing scores from highest to lowest including the score of the quiz you just completed.

From the High Scores page, you can choose to **Clear High Scores** or **Go Back** to the quiz home page. You can also click the **High Scores** link on the home page (top left) to view the High Scores page

## Features

The Code Quiz Challenge
- can be repeated as many times as the user wants
- Provides the user with an efficient "one click" method to answer multi-choice questions, as one click of the chosen answer both triggers correct/incorrect feedback and opens the next question. 
- Motivates the user to choose correct answers by penalising incorrect answers with a 10 second time deduction
- Enables a user to time themselves completing the coding multi-choice questions
- Saves high scores locally so that the user can track their progress or compare with peers
- Gives the user control over whether to keep or discard the high scores

  
## Tests

1. When the application opens, I am presented with a page that displays without error and matches the mock up gif image below
2. When I click the **Start Quiz** button, the first question appears
3. When I click the **Start Quiz** button, the timer (top right of page) starts at 75 seconds and reduces in 1 second increments
4. Choosing a correct answer triggers a green "correct" message and opens the next question. The timer continues to reduce in 1 second increments.
5. When the timer reaches 0 before all questions are answered, a heading "You ran out of time!" displays with the final score.
6. When I answer all questions before the timer reaches 0, a heading "All done!" displays with the final score.
7. When I enter my initials and then click **Submit**, the High Scores page opens.
8. The High Scores listed include my initials and score from the previous game, and other initials with their scores if these are locally saved. The scores are ordered numerically from highest to lowest.
9. When on the Home Scores page, if I click **Clear High Scores** all the initials and scores are deleted from local storage and do not display on the page. 
10. When on the Home Scores page, if I click **Go Back** the Coding Quiz Challenge home page opens 
11. When on the Coding Quiz challenge home page, if I click the High Scores link the High Scores page opens.

## Challenges and Further Work

### Tracking functions and keeping organised
This is the most complex web application I've made, and found it challenging tracking all the functions and code components, and keeping the code organised. I "over commented" to help keep track of what the code is doing. I also used numbering to help remember the order the functions were called. Several times I broke the application and couldn't find the problem, so I became more rigorous about making back up copies and commiting changes using git. 

## Mock-Up

The gif demonstrates the coding quiz challenge application's appearance and functionality

![A user answers the coding quiz challenge questions, saving or resetting the high scores.](./assets/Coding-Quiz-Challenge.gif)
