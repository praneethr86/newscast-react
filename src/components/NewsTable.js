import React from 'react';
import CategoryTable from './Category/CategoryTable';
import Searchbar from './Searchbar';
import ContentTable from './Articles/ContentTable';

const NewsTable = ({ categories }) => {
  return (
    <div class='container'>
      <Searchbar />
      <CategoryTable categories={categories} />
      <ContentTable />
    </div>
  );
};

export default NewsTable;
