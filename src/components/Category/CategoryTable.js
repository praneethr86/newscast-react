import React from 'react';

import CategoryRow from './CategoryRow';
import WebsiteRow from '../Websites/WebsiteRow';

const CategoryTable = ({ categories }) => {
  const rows = [];
  let lastCategory = null;

  categories.forEach(category => {
    if (category.categoryName !== lastCategory) {
      rows.push(
        <CategoryRow
          categoryName={category.categoryName}
          key={category.categoryName}
        />
      );
    }
    rows.push(
      <WebsiteRow
        websiteName={category.websiteName}
        key={category.websiteName}
      />
    );
    lastCategory = category.categoryName;
  });

  return (
    <div class='newscategory'>
      <table class='categorytable'>
        <thead>
          <tr>
            <th>Pick Your News</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
