# HOLDNote

A React-based cryptocurrency portfolio tracker designed to help users manage their investments efficiently. The application allows users to track purchased and watchlist coins, calculate profit and loss for individual positions as well as for each cryptocurrency as a whole, create notes, and plan future trading strategies.

The project uses local storage to keep all data private and accessible only to the user, with no external account or server required.

🚀 Demo:

## 🖥 Desktop Screenshots
![alt text](/src/screenshots/coin-page.png)
![alt text](/src/screenshots/search.png)
![alt text](/src/screenshots/add-coin-pos.png)
## 📱 Mobile Screenshots
![alt text](/src/screenshots/mob-home.png)
![alt text](/src/screenshots/mob-coin-page.png)
![alt text](/src/screenshots/mob-note-page.png)
![alt text](/src/screenshots/mob-add-pos.png)

## Features

- Browse and search cryptocurrencies
- Track purchased and watchlist coins
- Add, edit, and remove purchase positions
- Calculate profit and loss for individual positions and each cryptocurrency
- Create notes and trading plans
- Save all data locally
- Responsive design for desktop and mobile devices

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Technical Highlights

- Integration with CoinGecko and Binance APIs
- Custom API layer with centralized error handling
- Promise race/all strategy for optimized API requests
- Debounced search to reduce unnecessary API calls
- Automatic market data refresh every minute
- Global state management with Zustand
- Theme persistence using local storage
- Custom React hooks for reusable business logic
- Client-side routing with React Router
- Comprehensive try/catch error handling to prevent application crashes
- Modular project architecture with a clear separation of components, hooks, stores, utilities, and API services.

## Installation

1. Clone the repository

```bash
git clone https://github.com/frzea/HOLDNote.git
```

2. Navigate to the project directory

```bash
cd HOLDNote
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```