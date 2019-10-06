import React from 'react';

import ArticleRow from './ArticleRow';

const ArticlesTable = () => {
  const articleRows = [];
  const articlesList = [
    {
      articleTitle: 'GDP Is Not a Measure of Human Well-Being',
      articleURL: ''
    },
    {
      articleTitle: 'Melinda Gates Q&A: A Billion Dollars for Gender Equality',
      articleURL: ''
    },
    {
      articleTitle: 'Where Online Learning Goes Next',
      articleURL: ''
    },
    {
      articleTitle: 'Who Supports Diversity Policies? It Depends on the Policy',
      articleURL: ''
    },
    {
      articleTitle: '5 Things Leaders Do That Stifle Innovation',
      articleURL: ''
    },
    {
      articleTitle: 'Closing the Gender Wealth Gap',
      articleURL: ''
    }
  ];

  articlesList.forEach(article => {
    articleRows.push(
      <ArticleRow title={article.articleTitle} link={article.articleURL} />
    );
  });

  return (
    <div class='articleTable'>
      <table>
        <thead>
          <th>Articles</th>
        </thead>
        <tbody>{articleRows}</tbody>
      </table>
    </div>
  );
};

export default ArticlesTable;
