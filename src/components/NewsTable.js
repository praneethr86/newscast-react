import React from 'react';
import CategoryTable from './Category/CategoryTable';
import Searchbar from './Searchbar';

const NewsTable = ({ categories }) => {
  return (
    <div>
      <Searchbar />
      <CategoryTable categories={categories} />
    </div>
  );
};

export default NewsTable;
