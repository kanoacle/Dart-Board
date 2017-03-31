# Dart-Board
a TDD dartboard

You've just recently been hired to calculate scores for a Dart Board game

Scoring Specs

0 points: radius above 10
5 points: radius between 5 and 10 inclusive
10 points: radius less than 5
Some specifications to follow

An empty collection should return -1.
If all radiuses are less than 5, award 100 BONUS POINTS!
A collection of scores can be of any length.
scores can be of any number between 1 and 20.
Write a function that accepts a collection of number values and returns a total score using the above specification.

Examples:

scoreThrows( [1, 5, 11] ) => returns 15 
scoreThrows( [15, 20, 30] ) => returns 0
scoreThrows( [1, 2, 1, 4, 4, 2] ) => returns 160
Additional Requirements

Create a Git Repository for this challenge
commit often and have your commit messages be descriptive
Write tests for your function using the Mocha and Chai Libraries.
Provide test for all cases. Handle unexpected inputs, invalid arguments, etc.
