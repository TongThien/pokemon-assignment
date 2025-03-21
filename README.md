# Pokémon API Services

## 📌 Project Overview
This project is a web application that fetches Pokémon data from the [PokéAPI](https://pokeapi.co/). It allows users to browse a list of Pokémon, view animated sprites (GIFs), and filter Pokémon by type. The app includes pagination for better user experience.

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TypeScript
- **Backend Services:** PokéAPI (third-party API)
- **Styling:** Tailwind CSS
- **Data Fetching:** Fetch API with TypeScript generics

## 🚀 Features
- Fetch and display Pokémon with animated GIFs
- Filter Pokémon by multiple types
- Pagination for better navigation
- API error handling for robust data fetching

## ⏳ Estimated Completion Time
- **Setup & API Integration:** 20 minutes
- **Filtering & Pagination:** 1 hours
- **UI Implementation:** 30 minutes
- **Total Estimated Time:** ~2 hours

##📌 API Endpoints Used
- https://pokeapi.co/api/v2/pokemon?limit={PAGE_SIZE}&offset={OFFSET} – Fetch paginated Pokémon list
- https://pokeapi.co/api/v2/type/{type} – Fetch Pokémon by type
- https://pokeapi.co/api/v2/pokemon/{name} – Fetch Pokémon details and GIF
