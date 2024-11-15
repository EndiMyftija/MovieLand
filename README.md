# MovieLand

MovieLand is a React-based web application that allows users to search for movies and view detailed information about them. The app utilizes The Movie Database (TMDb) API to retrieve movie data, including titles, overviews, posters, and more. The application displays this information dynamically as users search for movies.

## Features
- **Search for movies**: Users can search for movies by title.
- **Display movie information**: For each movie, the app shows the title, overview, poster image, release date, and average rating.
- **Responsive design**: The app is designed to work on both desktop and mobile devices.
  
## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TMDb API**: Provides data about movies, including descriptions, images, ratings, and more.
- **CSS**: For styling the application.

## Setup

1. Clone the repository:

    ```bash
    git clone git@github.com:EndiMyftija/MovieLand.git
    ```

2. Install dependencies:

    Navigate to the project folder and run the following command to install all the required dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    To run the app locally, use the following command:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:5173`.


## How It Works

- The app uses the **TMDb API** to fetch movie data when a user enters a movie name into the search input.
- Upon search, the app makes an HTTP request to the TMDb API to get a list of movies matching the search query.
- The app then displays the movie information, including the title, description, poster, and release date.

## Folder Structure

- `src/`
  - `App.js`: Main React component that handles movie search and display.
  - `Movie.js`: Component for displaying individual movie information.
  - `App.css`: CSS for styling the application.
  - `search.svg`: Search icon used in the search bar.
