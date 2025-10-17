const openings = [
  {
    id: "italian-game",
    name: "Italian Game",
    category: "King's Pawn",
    difficulty: "Beginner",
    popularity: 95,
    description: "One of the oldest recorded openings, leading to open tactical play and quick development.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4"],
    explanation: [
      "White plays 1.e4 to control the center and open lines for the pieces",
      "Black mirrors with 1...e5, establishing central presence",
      "2.Nf3 develops the knight while attacking the e5 pawn",
      "2...Nc6 defends e5 and develops a piece",
      "3.Bc4 aims at the weak f7 square, the Achilles heel of Black's position"
    ],
    tips: [
      "Control the center early",
      "Target f7 - it's only defended by the king",
      "Castle early for king safety",
      "Don't move the same piece twice in the opening"
    ],
    famousGames: [
      { player: "Paul Morphy", year: 1858, result: "won with brilliant sacrifices" }
    ],
    nextMoves: ["Develop knights before bishops", "Castle kingside quickly"],
    quiz: [
      {
        question: "What is White's main target in the Italian Game?",
        options: ["f7 square", "d5 square", "h7 square", "a7 square"],
        correct: 0
      }
    ]
  },
  {
    id: "ruy-lopez",
    name: "Ruy Lopez",
    category: "King's Pawn",
    difficulty: "Intermediate",
    popularity: 90,
    description: "Named after 16th-century Spanish bishop, this strategic opening emphasizes long-term pressure.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
    explanation: [
      "1.e4 stakes a claim in the center",
      "1...e5 equalizes central control",
      "2.Nf3 develops with a threat",
      "2...Nc6 defends and develops",
      "3.Bb5 pins the knight, putting pressure on e5 indirectly"
    ],
    tips: [
      "The pin creates long-term pressure",
      "Don't take on c6 too early",
      "Prepare d4 to challenge the center",
      "This opening emphasizes positional play"
    ],
    famousGames: [
      { player: "Bobby Fischer", year: 1972, result: "World Championship win" }
    ],
    nextMoves: ["a6 forces bishop decision", "Castle and prepare d4"],
    quiz: [
      {
        question: "Why is Bb5 strong in the Ruy Lopez?",
        options: ["It pins the knight to the king", "It attacks the queen", "It defends e4", "It prepares castling"],
        correct: 0
      }
    ]
  },
  {
    id: "sicilian-defense",
    name: "Sicilian Defense",
    category: "King's Pawn",
    difficulty: "Advanced",
    popularity: 85,
    description: "Black's most ambitious response to e4, fighting for initiative from move one.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4"],
    explanation: [
      "1.e4 opens the game",
      "1...c5 attacks d4 from the side - asymmetrical play begins",
      "2.Nf3 develops and prepares d4",
      "2...d6 supports a future ...Nf6 and guards e5",
      "3.d4 White pushes for central control",
      "3...cxd4 Black accepts the challenge",
      "4.Nxd4 The knight recaptures with a strong central post"
    ],
    tips: [
      "Leads to sharp, unbalanced positions",
      "Black often gets queenside pawn majority",
      "Requires precise move order knowledge",
      "Great for players who like attacking chess"
    ],
    famousGames: [
      { player: "Garry Kasparov", year: 1985, result: "defeated Anatoly Karpov" }
    ],
    nextMoves: ["Develop quickly", "Look for central breaks with ...d5 or ...e5"],
    quiz: [
      {
        question: "What makes the Sicilian Defense unique?",
        options: ["Symmetrical structure", "Asymmetrical pawn structure", "Early queen development", "Fianchetto setup"],
        correct: 1
      }
    ]
  },
  {
    id: "french-defense",
    name: "French Defense",
    category: "King's Pawn",
    difficulty: "Intermediate",
    popularity: 70,
    description: "A solid, strategic defense creating a strong pawn chain and counterplay.",
    moves: ["e4", "e6", "d4", "d5"],
    explanation: [
      "1.e4 White's most popular first move",
      "1...e6 prepares ...d5 while keeping flexibility",
      "2.d4 White grabs maximum center space",
      "2...d5 Black strikes at e4 immediately"
    ],
    tips: [
      "Black gets a solid pawn structure",
      "The light-squared bishop can be problematic",
      "Plan to play ...c5 to challenge the center",
      "Excellent against aggressive e4 players"
    ],
    famousGames: [
      { player: "Mikhail Botvinnik", year: 1946, result: "won World Championship" }
    ],
    nextMoves: ["Develop the dark-squared bishop outside the pawn chain"],
    quiz: [
      {
        question: "What is Black's main positional challenge in the French?",
        options: ["Weak king", "Bad light-squared bishop", "Exposed queen", "Lack of space"],
        correct: 1
      }
    ]
  },
  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    category: "Queen's Pawn",
    difficulty: "Beginner",
    popularity: 88,
    description: "Not a true gambit! White offers a pawn to dominate the center, usually regaining it.",
    moves: ["d4", "d5", "c4"],
    explanation: [
      "1.d4 establishes central control",
      "1...d5 Black mirrors the approach",
      "2.c4 White 'offers' the c-pawn to undermine d5"
    ],
    tips: [
      "Not a real gambit - the pawn can be regained",
      "Leads to strategic, positional play",
      "Popular at all levels from beginner to world champions",
      "Featured in the famous Netflix series!"
    ],
    famousGames: [
      { player: "Anatoly Karpov", year: 1978, result: "World Championship games" }
    ],
    nextMoves: ["If Black takes on c4, White recovers it easily with e3 and Bxc4"],
    quiz: [
      {
        question: "Why isn't the Queen's Gambit a true gambit?",
        options: ["Black can't take the pawn", "White easily regains the pawn", "It loses material", "The queen is exposed"],
        correct: 1
      }
    ]
  },
  {
    id: "caro-kann",
    name: "Caro-Kann Defense",
    category: "King's Pawn",
    difficulty: "Intermediate",
    popularity: 75,
    description: "A solid defense that keeps the light-squared bishop active, favored by positional players.",
    moves: ["e4", "c6", "d4", "d5"],
    explanation: [
      "1.e4 the classical center grab",
      "1...c6 prepares ...d5 while keeping the bishop free",
      "2.d4 White takes maximum space",
      "2...d5 Black challenges immediately"
    ],
    tips: [
      "Similar to French but the light-squared bishop is better",
      "Solid and safe - good for positional players",
      "Less tactical than other e4 defenses",
      "Black often gets a good endgame"
    ],
    famousGames: [
      { player: "Anatoly Karpov", year: 1987, result: "used extensively in world championship" }
    ],
    nextMoves: ["Develop solidly with ...Bf5 or ...Nf6"],
    quiz: [
      {
        question: "How does Caro-Kann differ from French Defense?",
        options: ["Pawn on c6 instead of e6", "Pawn on c5 instead of e6", "No pawn moves", "Queen moves early"],
        correct: 0
      }
    ]
  },
  {
    id: "london-system",
    name: "London System",
    category: "Queen's Pawn",
    difficulty: "Beginner",
    popularity: 80,
    description: "A reliable, straightforward system where White develops the same way regardless of Black's moves.",
    moves: ["d4", "Nf6", "Nf3", "d5", "Bf4"],
    explanation: [
      "1.d4 controls the center",
      "1...Nf6 Black develops naturally",
      "2.Nf3 White develops",
      "2...d5 Black stakes central ground",
      "3.Bf4 The hallmark of the London - developing the bishop outside the pawn chain"
    ],
    tips: [
      "Very systematic - easy to learn",
      "White uses the same setup every game",
      "Solid and safe for beginners",
      "Currently popular at the highest levels"
    ],
    famousGames: [
      { player: "Magnus Carlsen", year: 2020, result: "uses regularly in rapid chess" }
    ],
    nextMoves: ["Continue with e3, Bd3, Nbd2, and castle"],
    quiz: [
      {
        question: "What makes the London System beginner-friendly?",
        options: ["Random moves", "Same setup every game", "Aggressive tactics", "Queen moves first"],
        correct: 1
      }
    ]
  }
];

export default openings;
