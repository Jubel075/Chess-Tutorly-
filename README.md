# Chess Opening Tutor

Interactive web app for learning chess openings with step-by-step visual guidance.

## Quick Start

```bash
git clone https://github.com/yourusername/chess-opening-tutor.git
cd chess-opening-tutor
npm install
npm install chess.js react-chessboard
npm run dev
```

Open `http://localhost:5173`

## Features

- 7 popular chess openings with move-by-move explanations
- Interactive chessboard with auto-play mode
- Progress tracking and quizzes
- Search and filter openings
- Mobile responsive

## Tech Stack

- React 18.2.0
- Vite 7.1.10
- React Router 6.8.0
- chess.js + react-chessboard

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run tests
```

## Project Structure

```
src/
├─ components/
│  ├─ OpeningSelector.jsx   # Home page
│  └─ OpeningDetail.jsx      # Opening tutorial page
├─ data/
│  └─ openings.js            # Opening data
├─ App.jsx                   # Routes
└─ main.jsx                  # Entry point
```

## License

MIT