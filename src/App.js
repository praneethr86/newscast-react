import React from 'react';
import './App.css';

const App = () => {
  const NEWSLIST = [
    { category: 'Editorials', website: 'Hindu Editorial' },
    { category: 'Editorials', website: 'Hindu Lead Opinion' },
    { category: 'Editorials', website: 'Economic Times' },
    { category: 'Editorials', website: 'Indian Express Editorial' },
    { category: 'Editorials', website: 'Indian Express Columns' },
    { category: 'Editorials', website: 'Hindu Business Line' },
    { category: 'Editorials', website: 'The Guardian' },
    { category: 'Editorials', website: 'LiveMint' },
    { category: 'Magazines', website: 'Harvard Business Review' },
    { category: 'Magazines', website: 'Project Syndicate' },
    { category: 'Magazines', website: 'The Economist' },
    { category: 'Magazines', website: 'The Atlantic' },
    { category: 'Magazines', website: 'The NewYorker' },
    { category: 'Magazines', website: 'Frontline by Hindu' },
    { category: 'Magazines', website: 'LongReads' },
    { category: 'Magazines', website: 'The Hindu Explains' },
    { category: 'SciTech', website: 'TechCrunch' },
    { category: 'SciTech', website: 'The Next Web' },
    { category: 'SciTech', website: 'ReadWrite' },
    { category: 'SciTech', website: 'Scientific American' },
    { category: 'Sports', website: 'ESPN F1' },
    { category: 'Sports', website: 'Autosport F1' },
    { category: 'Sports', website: 'Premier League News' }
  ];

  return <NewsTable newslist={newslist} />;
};

export default App;
