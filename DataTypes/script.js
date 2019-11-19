var johnsTeamScores = johnGame1 + johnGame2 + johnGame3;
var mikesTeamScores = mikesGame1 + mikesGame2 + mikesGame3;

var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;

var mikesGame1 = 116;
var mikesGame2 = 94;
var mikesGame3 = 123;

var mikeAverage = mikesTeamScores / 3;
var johnAverage = johnsTeamScores / 3;

if (mikeAverage > johnAverage) {
  console.log(
    "Mikes's team has the higher average!" + mikeAverage + 'on average'
  );
} else {
  console.log(
    "John's team has the higher average! They scored " +
      johnAverage +
      'on average'
  );
}
