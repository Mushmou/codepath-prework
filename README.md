# Pre-work - Light and Sound Memory Game

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Noah Jacinto

Time spent: 15 hours spent in total

Link to project: https://lightandsound-game.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] List anything else that you can get done to improve the app!
* Transition from colored buttons to images
## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
! [X] https://recordit.co/mzIxcC6mnj (Overview of game)
! [X] https://recordit.co/K8RmUxDqyU (Loss condition)
! [X] https://recordit.co/2I0rddmcse (Win condition)
! [X] https://recordit.co/QfF1dly6LC (Clue Hold Time changes)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* https://www.w3schools.com/
* https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://glitch.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

* When coding the Light and Sound Memory Game pre-work I noticed a major challenge of giving up too easily when working. The reason why I felt like giving up easily, is because I did not understand javascript, html and css, however I found it interesting the more I was able to continue throughout the prework, which kept me going. I kept running into small roadblocks like redesigning the buttons or figuring out how to make a secret pattern every time the game started but I persevered by reading documentation on google, w3schools, books, etc. For example I read through w3schools, when designing the buttons to learn that you can change certain sections of our css file to modify the background image when a specific button is activated. Additionally,  a similar situation occurred when figuring out how to develop a secret random pattern when the game started. I read through w3schools and html websites to figure out how to make a separate function, use arrays, and while loops to generate a random pattern. I solved this by using a while loop to iterate through the n length of the pattern, generating a random number between 1 - nth largest button for each pattern. These two challenges were important to me because it taught me new skills in html, css and javascript along with how to solve these multiple roadblocks by using resources across the internet to finish the pre-work. Overall I enjoyed working on the Light and Sound Memory game because it taught me to keep continuing although it may be difficult. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

* After completing my submission I have only a few questions. By working through the pre-work I noticed that under the description there are a few technologies covered like React, Node, Express and MongoDB. I would love to know more about these technologies progressing through web development, and how they would apply into the real world. Why are these technologies useful to web development compared to html, css and javascript? How would they work when working on other projects? Additionally, I noticed that people will be working in different areas and would like to know what is the difference between Fullstack developers, Backend Developers and Frontend Developers? Will people be separated into different areas of web development? I would love to know some answers to these questions.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

* If I had a few more hours to work on this project I would spend time consolidating my functions, adding a timer, adding features when the player should / shouldn’t click buttons, a game song, and multiplayer capability. By consolidating my functions I would attempt to fix areas where there is repetition and unneeded parts within my code to make it much more readable for other programmers and to improve the time/space complexity of the code. Doing this would improve the overall foundation of the code to add new features. After finishing the first stable version of the light and sound memory game, I asked a few friends to try out the game and noticed certain issues such as clicking when you are not supposed to and spamming buttons. I would like to shine light to those issues by implementing a feature that prevents users from clicking when they are not supposed to in order to make the game much smoother for user experience. Additionally to make the game much smoother, I would like to be more creative and add a theme song for the game which would make the game much more exciting along with the ability to have a multiplayer capability. To implement the song I would implement an audio file containing the song and play it when the game starts. Overall, if I were to continue working on this project I would attempt to add these features to the light and sound memory game.

## Interview Recording URL Link

[Noah Jacinto 5-Minute Interview Recording](https://youtu.be/sMM0PJ0okro)

## License

    Copyright Noah Jacinto
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
