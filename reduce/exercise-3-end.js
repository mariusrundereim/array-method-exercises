/*
Exercise 3: Turn an array of values into a set of object keys

Store a team's score in an object, using the team's name as the key. Only
store the score if they were a winner ('isWinner').

An array of teams ('teams') has been provided for it. Each item is an object
with the the team's name ('name'), the team's score ('score') and if they
were a winner ('isWinner')

Tip: Set the initial value as an empty object {}

Tip: Use square brackets to set the teams name

Tip: Use 'toLowerCase()' when setting the team's key

*/

const teams = [
  {
    name: "Hawks",
    score: 60,
    isWinner: false,
  },
  {
    name: "Dolphins",
    score: 50,
    isWinner: true,
  },
  {
    name: "Falcons",
    score: 90,
    isWinner: true,
  },
  {
    name: "Turtles",
    score: 5,
    isWinner: false,
  },
  {
    name: "Seaguls",
    score: 190,
    isWinner: true,
  },
  {
    name: "Penguins",
    score: 904,
    isWinner: true,
  },
  {
    name: "Foxes",
    score: 45,
    isWinner: false,
  },
];

const initialValue = {};
// const winningTeams = teams.reduce((total, winningTeam) => {
//   total += teams[winningTeam.toLowercase()];

//   if (isWinner === true) {
//     return true;
//   }
//   return isWinner;
// }, initialValue);

const cnFunc = (acc, team) => {
  if (team.isWinner) {
    acc[team.name.toLowerCase()] = team.score;
  }
  console.log(acc);
  return acc;
};

const winningTeams = teams.reduce(cnFunc, initialValue);

// console.log(winningTeams);
