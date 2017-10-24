$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gender_bias_challenge.feature");
formatter.feature({
  "line": 1,
  "name": "Assignment 05, Gender Bias Challenge",
  "description": "",
  "id": "assignment-05,-gender-bias-challenge",
  "keyword": "Feature"
});
formatter.before({
  "duration": 75889,
  "status": "passed"
});
formatter.before({
  "duration": 26747,
  "status": "passed"
});
formatter.before({
  "duration": 25193,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Desired output from input without errors",
  "description": "",
  "id": "assignment-05,-gender-bias-challenge;desired-output-from-input-without-errors",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I run the Gender Bias Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see a report that is **close** to this:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "Run#  M : F\r\n   1  1 : 1.00654\r\n   2  1 : 1.00035\r\n   3  1 : 1.00067\r\n   4  1 : 0.99908\r\n   5  1 : 1.00400\r\n   6  1 : 1.00254\r\n   7  1 : 1.00232\r\n   8  1 : 0.99989\r\n   9  1 : 1.00119\r\n  10  1 : 0.99879\r\n"
  }
});
formatter.match({
  "location": "GenderBiasChallengeSteps.iRunTheGenderBiasChallenge()"
});
formatter.result({
  "duration": 88445543,
  "status": "passed"
});
formatter.match({
  "location": "GenderBiasChallengeSteps.iShouldSeeAReportThatIsCloseToThis(String)"
});
formatter.result({
  "duration": 1512171,
  "status": "passed"
});
formatter.after({
  "duration": 19594,
  "status": "passed"
});
formatter.after({
  "duration": 9952,
  "status": "passed"
});
formatter.after({
  "duration": 13062,
  "status": "passed"
});
formatter.uri("go_loop_translation_challenge.feature");
formatter.feature({
  "line": 1,
  "name": "Assignment 05, Go Loop Translation Challenge",
  "description": "",
  "id": "assignment-05,-go-loop-translation-challenge",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17728,
  "status": "passed"
});
formatter.before({
  "duration": 12441,
  "status": "passed"
});
formatter.before({
  "duration": 12130,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Push past upper limit",
  "description": "",
  "id": "assignment-05,-go-loop-translation-challenge;push-past-upper-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the sequence of numbers \"100,-100\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run the Go Loop Translation Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see this output from the Go Loop Translation Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": " HEAL(100): LIFE 100\r\n  DMG(100): LIFE 000\r\nDead now.\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "100,-100",
      "offset": 25
    }
  ],
  "location": "GoLoopTranslationChallengeSteps.theSequenceOfNumbers(String)"
});
formatter.result({
  "duration": 88329,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iRunTheGoLoopTranslationChallenge()"
});
formatter.result({
  "duration": 7189190,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iShouldSeeThisOutputFromTheGoLoopTranslationChallenge(String)"
});
formatter.result({
  "duration": 68735,
  "status": "passed"
});
formatter.after({
  "duration": 11197,
  "status": "passed"
});
formatter.after({
  "duration": 8086,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.before({
  "duration": 16484,
  "status": "passed"
});
formatter.before({
  "duration": 11819,
  "status": "passed"
});
formatter.before({
  "duration": 11197,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Straight to death",
  "description": "",
  "id": "assignment-05,-go-loop-translation-challenge;straight-to-death",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the sequence of numbers \"-100\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I run the Go Loop Translation Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see this output from the Go Loop Translation Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 18,
    "value": "  DMG(100): LIFE 000\r\nDead now.\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "-100",
      "offset": 25
    }
  ],
  "location": "GoLoopTranslationChallengeSteps.theSequenceOfNumbers(String)"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iRunTheGoLoopTranslationChallenge()"
});
formatter.result({
  "duration": 319416,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iShouldSeeThisOutputFromTheGoLoopTranslationChallenge(String)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.after({
  "duration": 7464,
  "status": "passed"
});
formatter.after({
  "duration": 7465,
  "status": "passed"
});
formatter.after({
  "duration": 7464,
  "status": "passed"
});
formatter.before({
  "duration": 16484,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.before({
  "duration": 11819,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Flirting with disaster",
  "description": "",
  "id": "assignment-05,-go-loop-translation-challenge;flirting-with-disaster",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "the sequence of numbers \"-99,1,-1,2,-2,3,-3,-1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I run the Go Loop Translation Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see this output from the Go Loop Translation Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 28,
    "value": "  DMG(099): LIFE 001\r\n HEAL(001): LIFE 002\r\n  DMG(001): LIFE 001\r\n HEAL(002): LIFE 003\r\n  DMG(002): LIFE 001\r\n HEAL(003): LIFE 004\r\n  DMG(003): LIFE 001\r\n  DMG(001): LIFE 000\r\nDead now.\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "-99,1,-1,2,-2,3,-3,-1",
      "offset": 25
    }
  ],
  "location": "GoLoopTranslationChallengeSteps.theSequenceOfNumbers(String)"
});
formatter.result({
  "duration": 66558,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iRunTheGoLoopTranslationChallenge()"
});
formatter.result({
  "duration": 1306899,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iShouldSeeThisOutputFromTheGoLoopTranslationChallenge(String)"
});
formatter.result({
  "duration": 68113,
  "status": "passed"
});
formatter.after({
  "duration": 8709,
  "status": "passed"
});
formatter.after({
  "duration": 7154,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.before({
  "duration": 15551,
  "status": "passed"
});
formatter.before({
  "duration": 18350,
  "status": "passed"
});
formatter.before({
  "duration": 13374,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Yo yo",
  "description": "",
  "id": "assignment-05,-go-loop-translation-challenge;yo-yo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "the sequence of numbers \"-99,200,-99,101,-99,999,-99,-1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I run the Go Loop Translation Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I should see this output from the Go Loop Translation Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 45,
    "value": "  DMG(099): LIFE 001\r\n HEAL(200): LIFE 100\r\n  DMG(099): LIFE 001\r\n HEAL(101): LIFE 100\r\n  DMG(099): LIFE 001\r\n HEAL(999): LIFE 100\r\n  DMG(099): LIFE 001\r\n  DMG(001): LIFE 000\r\nDead now.\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "-99,200,-99,101,-99,999,-99,-1",
      "offset": 25
    }
  ],
  "location": "GoLoopTranslationChallengeSteps.theSequenceOfNumbers(String)"
});
formatter.result({
  "duration": 56294,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iRunTheGoLoopTranslationChallenge()"
});
formatter.result({
  "duration": 928390,
  "status": "passed"
});
formatter.match({
  "location": "GoLoopTranslationChallengeSteps.iShouldSeeThisOutputFromTheGoLoopTranslationChallenge(String)"
});
formatter.result({
  "duration": 62515,
  "status": "passed"
});
formatter.after({
  "duration": 8709,
  "status": "passed"
});
formatter.after({
  "duration": 7154,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.uri("gpa_chart_challenge.feature");
formatter.feature({
  "line": 1,
  "name": "Assignment 05, Gpa Chart Challenge",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16795,
  "status": "passed"
});
formatter.before({
  "duration": 17417,
  "status": "passed"
});
formatter.before({
  "duration": 12130,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "No students",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;no-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user inputs \"0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the program should stop",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 58472,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 5241593,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.theProgramShouldStop()"
});
formatter.result({
  "duration": 15551,
  "status": "passed"
});
formatter.after({
  "duration": 8709,
  "status": "passed"
});
formatter.after({
  "duration": 7775,
  "status": "passed"
});
formatter.after({
  "duration": 7464,
  "status": "passed"
});
formatter.before({
  "duration": 13374,
  "status": "passed"
});
formatter.before({
  "duration": 11508,
  "status": "passed"
});
formatter.before({
  "duration": 11819,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Negative students",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;negative-students",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "the user inputs \"-1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the program should stop",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 47585,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 461240,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.theProgramShouldStop()"
});
formatter.result({
  "duration": 9641,
  "status": "passed"
});
formatter.after({
  "duration": 8086,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.before({
  "duration": 16795,
  "status": "passed"
});
formatter.before({
  "duration": 12130,
  "status": "passed"
});
formatter.before({
  "duration": 12129,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "One student, Honours low end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-honours-low-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the user inputs \"1,3.6\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 17,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,3.6",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 51940,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 1487601,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 68735,
  "status": "passed"
});
formatter.after({
  "duration": 8086,
  "status": "passed"
});
formatter.after({
  "duration": 6843,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.before({
  "duration": 16173,
  "status": "passed"
});
formatter.before({
  "duration": 12129,
  "status": "passed"
});
formatter.before({
  "duration": 11197,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "One student, Honours high end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-honours-high-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "the user inputs \"1,4.0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 29,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,4.0",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 49763,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 1086387,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 53495,
  "status": "passed"
});
formatter.after({
  "duration": 7465,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.after({
  "duration": 7465,
  "status": "passed"
});
formatter.before({
  "duration": 16173,
  "status": "passed"
});
formatter.before({
  "duration": 12441,
  "status": "passed"
});
formatter.before({
  "duration": 11507,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "One student, Pass low end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-pass-low-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "the user inputs \"1,2.0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 42,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :*\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,2.0",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 854989,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 47275,
  "status": "passed"
});
formatter.after({
  "duration": 7776,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.after({
  "duration": 7153,
  "status": "passed"
});
formatter.before({
  "duration": 16173,
  "status": "passed"
});
formatter.before({
  "duration": 11507,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "One student, Pass high end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-pass-high-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "the user inputs \"1,3.5\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 54,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :*\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,3.5",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 50696,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 708811,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.after({
  "duration": 7776,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.after({
  "duration": 7154,
  "status": "passed"
});
formatter.before({
  "duration": 16484,
  "status": "passed"
});
formatter.before({
  "duration": 11508,
  "status": "passed"
});
formatter.before({
  "duration": 10885,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "One student, Fail low end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-fail-low-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "the user inputs \"1,0.0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 67,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,0.0",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 77132,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 704457,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 69046,
  "status": "passed"
});
formatter.after({
  "duration": 8397,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.after({
  "duration": 7464,
  "status": "passed"
});
formatter.before({
  "duration": 17417,
  "status": "passed"
});
formatter.before({
  "duration": 11197,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "One student, Fail high end",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;one-student,-fail-high-end",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "the user inputs \"1,1.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 79,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1,1.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 72778,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 818600,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 52252,
  "status": "passed"
});
formatter.after({
  "duration": 8086,
  "status": "passed"
});
formatter.after({
  "duration": 6531,
  "status": "passed"
});
formatter.after({
  "duration": 6842,
  "status": "passed"
});
formatter.before({
  "duration": 16484,
  "status": "passed"
});
formatter.before({
  "duration": 11508,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Two students, Honours and Pass",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-honours-and-pass",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "the user inputs \"2,3.8,2.5\"",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 92,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :*\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,3.8,2.5",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 574451,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.after({
  "duration": 8086,
  "status": "passed"
});
formatter.after({
  "duration": 6531,
  "status": "passed"
});
formatter.after({
  "duration": 6220,
  "status": "passed"
});
formatter.before({
  "duration": 15862,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.before({
  "duration": 10885,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Two students, Pass and Honours",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-pass-and-honours",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 101,
  "name": "the user inputs \"2,2.1,3.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 104,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :*\r\nFail      :\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,2.1,3.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 52873,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 569164,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 69046,
  "status": "passed"
});
formatter.after({
  "duration": 8087,
  "status": "passed"
});
formatter.after({
  "duration": 6531,
  "status": "passed"
});
formatter.after({
  "duration": 9953,
  "status": "passed"
});
formatter.before({
  "duration": 313817,
  "status": "passed"
});
formatter.before({
  "duration": 262499,
  "status": "passed"
});
formatter.before({
  "duration": 232330,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Two students, Honours and Fail",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-honours-and-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 114,
  "name": "the user inputs \"2,3.8,1.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 117,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,3.8,1.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 54739,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 547081,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 38878,
  "status": "passed"
});
formatter.after({
  "duration": 189722,
  "status": "passed"
});
formatter.after({
  "duration": 132182,
  "status": "passed"
});
formatter.after({
  "duration": 127829,
  "status": "passed"
});
formatter.before({
  "duration": 17729,
  "status": "passed"
});
formatter.before({
  "duration": 17417,
  "status": "passed"
});
formatter.before({
  "duration": 16484,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Two students, Fail and Honours",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-fail-and-honours",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 126,
  "name": "the user inputs \"2,1.7,3.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 129,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,1.7,3.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 59094,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 539928,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 43543,
  "status": "passed"
});
formatter.after({
  "duration": 18972,
  "status": "passed"
});
formatter.after({
  "duration": 12129,
  "status": "passed"
});
formatter.after({
  "duration": 10885,
  "status": "passed"
});
formatter.before({
  "duration": 14929,
  "status": "passed"
});
formatter.before({
  "duration": 9952,
  "status": "passed"
});
formatter.before({
  "duration": 9641,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "Two students, Pass and Fail",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-pass-and-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 139,
  "name": "the user inputs \"2,3.5,1.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 142,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :*\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,3.5,1.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 552057,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 37633,
  "status": "passed"
});
formatter.after({
  "duration": 6220,
  "status": "passed"
});
formatter.after({
  "duration": 5288,
  "status": "passed"
});
formatter.after({
  "duration": 5910,
  "status": "passed"
});
formatter.before({
  "duration": 12130,
  "status": "passed"
});
formatter.before({
  "duration": 10264,
  "status": "passed"
});
formatter.before({
  "duration": 9019,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Two students, Fail and Pass",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;two-students,-fail-and-pass",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 151,
  "name": "the user inputs \"2,1.7,3.0\"",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 154,
    "value": "GPA Distribution\r\n\r\nHonours   :\r\nPass      :*\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2,1.7,3.0",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 41365,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 526865,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.after({
  "duration": 6843,
  "status": "passed"
});
formatter.after({
  "duration": 5598,
  "status": "passed"
});
formatter.after({
  "duration": 5598,
  "status": "passed"
});
formatter.before({
  "duration": 13374,
  "status": "passed"
});
formatter.before({
  "duration": 9330,
  "status": "passed"
});
formatter.before({
  "duration": 9020,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Three students, Honours, Pass and Fail",
  "description": "",
  "id": "assignment-05,-gpa-chart-challenge;three-students,-honours,-pass-and-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 164,
  "name": "the user inputs \"3,3.7,3.5,1.9\"",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I run the Gpa Chart Challenge",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "I should see this output from the Gpa Chart Challenge:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 167,
    "value": "GPA Distribution\r\n\r\nHonours   :*\r\nPass      :*\r\nFail      :*\r\n"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "3,3.7,3.5,1.9",
      "offset": 17
    }
  ],
  "location": "GpaChartChallengeSteps.theUserInputs(String)"
});
formatter.result({
  "duration": 54428,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iRunTheGpaChartChallenge()"
});
formatter.result({
  "duration": 571963,
  "status": "passed"
});
formatter.match({
  "location": "GpaChartChallengeSteps.iShouldSeeThisOutputFromTheGpaChartChallenge(String)"
});
formatter.result({
  "duration": 39499,
  "status": "passed"
});
formatter.after({
  "duration": 6531,
  "status": "passed"
});
formatter.after({
  "duration": 5599,
  "status": "passed"
});
formatter.after({
  "duration": 5599,
  "status": "passed"
});
});