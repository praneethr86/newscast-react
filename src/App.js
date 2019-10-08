import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import NewsTable from './components/NewsTable';

const App = () => {
  const NEWSLIST = [
    {
      categoryName: 'Editorials',
      websiteName: 'Hindu Editorial',
      websiteURL: 'https://www.thehindu.com/opinion/editorial/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'Hindu Lead Opinion',
      websiteURL: 'https://www.thehindu.com/opinion/lead/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'Economic Times',
      websiteURL: 'https://economictimes.indiatimes.com/blogs/et-editorials/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'Indian Express Editorial',
      websiteURL: 'https://indianexpress.com/section/opinion/editorials/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'Indian Express Columns',
      websiteURL: 'https://indianexpress.com/section/opinion/columns/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'Hindu Business Line',
      websiteURL: 'https://www.thehindubusinessline.com/opinion/editorial/'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'The Guardian',
      websiteURL: 'https://www.theguardian.com/profile/editorial'
    },
    {
      categoryName: 'Editorials',
      websiteName: 'LiveMint',
      websiteURL: 'https://www.livemint.com/opinion'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'Harvard Business Review',
      websiteURL: 'https://hbr.org/the-latest'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'Project Syndicate',
      websiteURL: 'https://www.project-syndicate.org/'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'The Economist',
      websiteURL: 'https://www.economist.com/latest/'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'The Atlantic',
      websiteURL: 'https://www.theatlantic.com/latest/'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'The NewYorker',
      websiteURL: 'https://www.newyorker.com/latest/news'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'Frontline by Hindu',
      websiteURL: 'https://frontline.thehindu.com/the-nation/'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'LongReads',
      websiteURL: 'https://longreads.com/blog/'
    },
    {
      categoryName: 'Magazines',
      websiteName: 'The Hindu Explains',
      websiteURL: 'https://www.thehindu.com/topic/The_Hindu_Explains/'
    },
    {
      categoryName: 'SciTech',
      websiteName: 'TechCrunch',
      websiteURL: 'https://techcrunch.com/startups/'
    },
    {
      categoryName: 'SciTech',
      websiteName: 'The Next Web',
      websiteURL: 'https://thenextweb.com/latest/'
    },
    {
      categoryName: 'SciTech',
      websiteName: 'ReadWrite',
      websiteURL: 'https://readwrite.com/'
    },
    {
      categoryName: 'SciTech',
      websiteName: 'Scientific American',
      websiteURL: 'https://www.scientificamerican.com/section/lateststories/'
    },
    {
      categoryName: 'Sports',
      websiteName: 'ESPN F1',
      websiteURL: 'https://www.espn.in/f1/'
    },
    {
      categoryName: 'Sports',
      websiteName: 'Autosport F1',
      websiteURL: 'https://www.autosport.com/f1'
    },
    {
      categoryName: 'Sports',
      websiteName: 'Premier League News',
      websiteURL: 'https://www.premierleague.com/news'
    }
  ];

  return (
    <Provider store={store}>
      <section className='container'>
        <NewsTable categories={NEWSLIST} />
      </section>
    </Provider>
  );
};

export default App;
