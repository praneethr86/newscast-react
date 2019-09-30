import React from 'react';
import './App.css';

import NewsTable from './components/NewsTable';

const App = () => {
  const NEWSLIST = [
    { categoryName: 'Editorials', websiteName: 'Hindu Editorial' },
    { categoryName: 'Editorials', websiteName: 'Hindu Lead Opinion' },
    { categoryName: 'Editorials', websiteName: 'Economic Times' },
    { categoryName: 'Editorials', websiteName: 'Indian Express Editorial' },
    { categoryName: 'Editorials', websiteName: 'Indian Express Columns' },
    { categoryName: 'Editorials', websiteName: 'Hindu Business Line' },
    { categoryName: 'Editorials', websiteName: 'The Guardian' },
    { categoryName: 'Editorials', websiteName: 'LiveMint' },
    { categoryName: 'Magazines', websiteName: 'Harvard Business Review' },
    { categoryName: 'Magazines', websiteName: 'Project Syndicate' },
    { categoryName: 'Magazines', websiteName: 'The Economist' },
    { categoryName: 'Magazines', websiteName: 'The Atlantic' },
    { categoryName: 'Magazines', websiteName: 'The NewYorker' },
    { categoryName: 'Magazines', websiteName: 'Frontline by Hindu' },
    { categoryName: 'Magazines', websiteName: 'LongReads' },
    { categoryName: 'Magazines', websiteName: 'The Hindu Explains' },
    { categoryName: 'SciTech', websiteName: 'TechCrunch' },
    { categoryName: 'SciTech', websiteName: 'The Next Web' },
    { categoryName: 'SciTech', websiteName: 'ReadWrite' },
    { categoryName: 'SciTech', websiteName: 'Scientific American' },
    { categoryName: 'Sports', websiteName: 'ESPN F1' },
    { categoryName: 'Sports', websiteName: 'Autosport F1' },
    { categoryName: 'Sports', websiteName: 'Premier League News' }
  ];

  return (
    <section className='container'>
      <NewsTable categories={NEWSLIST} />
    </section>
  );
};

export default App;
