# newscast-react

Fun project to build a react web version of newscast-cli app.

# Todo

## Step 1

- Start with 'Thinking in React' post and divide all UI elements into component hierarchy
- Write the boilerplate to setup the mock with mock data
- add styling with sass - try out mixins and utilities
- Setup redux store
- Write one action-reducer combo - to fetch hindu editorials (start small)
- Hook it all up and make it work
- keep it a single page application and play with state of components

## step 2

- Add couple more news sources in different submenus
- Write tests with Jest

## step 3

- add all the rest of the sources
- give full test coverage etc...like any other open source project

## step 4

- Make the UI responsive
- deploy on heroku
- and we are done !

# Development tracker:

## dummy data

[
{category: "Editorials", website: "Hindu Editorial"},
{category: "Editorials", website: "Hindu Lead Opinion"},
{category: "Editorials", website: "Economic Times"},
{category: "Editorials", website: "Indian Express Editorial"},
{category: "Editorials", website: "Indian Express Columns"},
{category: "Editorials", website: "Hindu Business Line"},
{category: "Editorials", website: "The Guardian"},
{category: "Editorials", website: "LiveMint"},
{category: "Magazines", website: "Harvard Business Review"},
{category: "Magazines", website: "Project Syndicate"},
{category: "Magazines", website: "The Economist"},
{category: "Magazines", website: "The Atlantic"},
{category: "Magazines", website: "The NewYorker"},
{category: "Magazines", website: "Frontline by Hindu"},
{category: "Magazines", website: "LongReads"},
{category: "Magazines", website: "The Hindu Explains"},
{category: "SciTech", website: "TechCrunch"},
{category: "SciTech", website: "The Next Web"},
{category: "SciTech", website: "ReadWrite"},
{category: "SciTech", website: "Scientific American"},
{category: "Sports", website: "ESPN F1"},
{category: "Sports", website: "Autosport F1"},
{category: "Sports", website: "Premier League News"}
]

## Component Hierarchy:

- NewsTable

  - Search Bar
  - Category Table

    - Category Row
      - WebsiteTable
        - WebsiteRow

  - Articles Table
    - ArticleRow
  - Content Table

## Explore

- Usage of React Router
- Usage of packaging - webpack

## Next Steps

- Upon click of news site, should hit a route which takes you to corresponding cheerio loader and scraper (react-router-dom)
- Get list of URLs and title, and set state (redux)
- Re-render the Articles Table (action)
- Upon click of article, should hit a route to scraping news article content (react-router-dom)
- get content and set to state (redux)
- re-render the content table (action)
