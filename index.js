class Die {
  constructor(sides, description) {
    this.sides = sides;
    this.description = description;
  }
}

const allDice = [
  new Die(4, 'Four-sided die, 1d4 rolls 1-4'),
  new Die(6, 'Six-sided die, 1d6 rolls 1-6'),
  new Die(8, 'Eight-sided die, 1d8 rolls 1-8'),
  new Die(10, 'Ten-sided die, 1d10 rolls 1-10'),
  new Die(20, 'Twenty-sided die, 1d20 rolls 1-20'),
  new Die(100, 'One-hundred-sided die, 1d100 rolls 1-100')
];

const allowedSides = allDice.map(die => die.sides);

exports.rollOne = (sides) => {
  if (!allowedSides.includes(sides)) {
    return `You've chosen an invalid number of sides.  Number of sides must be one of the following: ${allowedSides}`
  } else {
    return Math.ceil(Math.random() * sides);
  }
}

exports.rollMany = (dice) => {
  if (typeof(dice) === 'string') {
    const params = dice.split('d');
    return allowedSides.includes(parseInt(params[1])) 
      ? (parseInt(params[0]) * parseInt(params[1]))
      : `Invalid number of sides: ${params[1]}. Number of sides must be one of the following: ${allowedSides}.`;
  } else if (typeof(dice) === 'object') {
    rolls = dice.map(die => {
      const split = die.split('d');
      return [parseInt(split[0]), split[1]];
    });
    let illegalRoll = "";
    let rollTotal = 0;
    rolls.forEach(roll => {
      if (!allowedSides.includes(parseInt(roll[1])) || parseInt(roll[1]) === 'NaN') {
        illegalRoll = roll[1];
      } else {
        for (let i = 0; i < parseInt(roll[0]); i++) {
          rollTotal += Math.ceil(Math.random() * roll[1]);
        }
      }
      return rollTotal;
    })
    
    return illegalRoll
      ? `One of your dice had an invalid number of sides: ${illegalRoll}. Number of sides must be one of the following: ${allowedSides}.`
      : rollTotal;
  }
}

exports.coinFlip = () => {
  return ["heads", "tails"][Math.floor(Math.random() * 2)];
}

exports.allDice = allDice;