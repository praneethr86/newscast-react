import React from 'react';
import CategoryTable from './Category/CategoryTable';
// import Searchbar from './Searchbar';
import ArticlesTable from './Articles/ArticlesTable';
import ContentTable from './Articles/ContentTable';

const NewsTable = ({ categories }) => {
  return (
    <div class='container'>
      <CategoryTable categories={categories} />
      <div class='details'>
        <ArticlesTable />
        <ContentTable />
      </div>
    </div>
  );
};

export default NewsTable;
