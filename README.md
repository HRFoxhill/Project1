# Project1
This is the first project for CodingBootCamp

#Project Description:
Our goal is to create a website that provides the user with a quiz that takes questions and outputs a character from the Marvel universe
that is populated based on the answers and their correlated score that will pull character fields from the Marvel API and gify as well as matching them the movie that character would star in from OMBD.

#Outline of functionality##

User Input Validation - Labstack will be used to validate that data entered into fields is valid. (Nic will do this part)

#Question outline -
// we will use arrays to define questions and the correlating scores associated with each character should an answer be chosen. 
// the answers will add or remove from a score log that after the final question will be the score used to correlate the character the user will receive as their results. 
// we will have 20 question in the array with 4-6 answers each, each answer will have a score (positive or negative) assocaited with all of the possible characters who could be chosen. 
// at the end of the quiz there will be a total score for each character which will then be sorted top to bottom. 
The top character will = an attribute (exp. your strength)
The bottom character will = an attribute ( exp. your weakness)
## to start we will seek to simply identify the top character that you are. 

# User Validation of Information #
We will gather fields and validate them:
- Name
- Age (18+)
- 

#New Technology#
Ink CSS Framework Alternative
<!-- script for INK -->
<script type="text/javascript" src="http://fastly.ink.sapo.pt/3.1.10/js/ink-all.js"></script>
<script type="text/javascript" src="http://fastly.ink.sapo.pt/3.1.10/js/autoload.js"></script>
optional - CAPTCHA

20 characters, 20 questions, 4 answers per question

var Characters = [
    'Thor',
    'Wolverine',
    'Black Panther', 
    'DareDevil',
    'Storm',
    'Falcon',
    'Deadpool',jj
    'Rogue',
    'Phoenix', 
    'Iron Man',
    'Hulk',
    'Groot',
    'Rocket Raccoon', 
    'Magneto', 
    'Loki',
    'Red Skull', // add space on it
    'Star-Lord',
    'Doctor Doom', // correct to Doctor for API search purpose
    'Captain America',
    'Vision',
    'Doctor Strange' // correct to Doctor for API search purpose
]


Technology, Magic/Mystical, Brute Strength, Normal


var Questions = [
    'What is your favorite color?',
    'If you were a tree, what tree would you be?',
    'What is your favorite weapon?',
    'Which Vehicle would you choose?',
    'What would you do if you caught someone stealing?',
    'What is your personality?',
    'Who would you work with?',
    'Which superpower is the coolest?',
    'What is your spirit animal?',
    'Where would you live?',
    'Where would you vacation?',
    'What are you afraid of?',
    'How long is your hair?',
    'What is your relationship with your parents?',
    'Who is your sidekick?',
    'Who would you be a sidekick to?',
    'What do you do in your freetime?',
    'How many licks does it take to get the center of a lollipop?',
    'What hogwarts house do you below too?',
    'What time do you wake up in the morning?'
]



