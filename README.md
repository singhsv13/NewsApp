# News App

## Overview

The News App is a web application that provides users with the latest news articles. It allows users to filter news articles by category, switch between Dark and Light Modes for comfortable reading, and provides pagination to browse through multiple articles. This app is built using React and integrates with the News API to fetch real-time news data.

![News App Screenshot](app-screenshot.png)

## Features

- **News Categories:** Users can filter news articles by category, including All, Entertainment, Sports, Technology, and Health.

- **Pagination:** The app offers easy navigation with "Previous" and "Next" buttons to view more news articles.

- **Dark and Light Mode:** Users can switch between different color themes for the user interface to optimize their reading experience.

- **Detailed News Cards:** News articles are displayed in attractive cards, showing the article title, author, and a link to access the full news story. The card text color adapts to the selected mode for readability.


## Technologies Used

- React: A popular JavaScript library for building user interfaces.

- News API: The app integrates with the News API to fetch real-time news data.

- HTML and CSS: Standard web technologies for structuring and styling the app.

## How to Get Started

Follow these steps to set up and run the News App locally:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/news-app.git
    cd news-app
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Obtain an API Key:**

    To fetch news data, you'll need an API key from [News API](https://newsapi.org/). Sign up and obtain your API key.

4. **Set Your API Key:**

    Create a `.env` file in the root directory of the project and add your API key as follows:

    ```env
    REACT_APP_NEWS_API_KEY=your-api-key
    ```

5. **Run the App:**

    ```bash
    npm start
    ```

    This will start the development server and open the app in your default web browser. You can access the app at [http://localhost:5173](http://localhost:5173).

## Usage

- Select a news category to filter articles.
- Navigate through articles using the "Previous" and "Next" buttons.
- Toggle between Dark and Light Modes for a preferred viewing experience.

## Credits

- [React](https://reactjs.org/)
- [News API](https://newsapi.org/)

## License

Free to Use. 
