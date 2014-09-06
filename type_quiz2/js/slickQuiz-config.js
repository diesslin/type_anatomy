// Build div that hold background image <div class="letters" id="letter(num)"></div>
var letters = "<div class=\"letters\" id=\"letter";
var lettersEnd = "\"></div>";

// Answers for multiple choice
var answers = [
    "Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body width", "Bowl", "Bracket", "Cap Height", "Character", "Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head", "Serif", "Joint", "Leg", "Ligature", "Link/Neck", "Loop", "Overhang", "Serif", "Shoulder", "Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex"
];

var num = Math.floor(Math.random() * answers.length);

// Build the quiz here
var quizJSON = {
    "info": {
        "name":    "Type Quiz",
        "main":    "<p>Think you understand the type anatomy?</p>",
        "results": "<h5>Want to learn more?</h5><p>go to <a href=\"http://diesslin.tk/type_anatomy/\">Type Anatomy</a>, to learn all the terms on the type anatomy.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": letters.concat('1').concat(lettersEnd),
            "a": [
                {"option": answers[0], "correct": true},
                {"option": answers[10], "correct": false},
                {"option": answers[14], "correct": false},
                {"option": answers[20], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": letters.concat('2').concat(lettersEnd),
            "a": [
                {"option": answers[1], "correct": true},
                {"option": answers[9], "correct": false},
                {"option": answers[11], "correct": false},
                {"option": answers[13], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": letters.concat('3').concat(lettersEnd),
            "a": [
                {"option": answers[2], "correct": true},
                {"option": answers[4], "correct": false},
                {"option": answers[7], "correct": false},
                {"option": answers[18], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 4
            "q": letters.concat('4').concat(lettersEnd),
            "a": [
                {"option": answers[3], "correct": true},
                {"option": answers[2], "correct": false},
                {"option": answers[10], "correct": false},
                {"option": answers[19], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 5
            "q": letters.concat('5').concat(lettersEnd),
            "a": [
                {"option": answers[4], "correct": true},
                {"option": answers[10], "correct": false},
                {"option": answers[14], "correct": false},
                {"option": answers[20], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        } // no comma here
    ]
};