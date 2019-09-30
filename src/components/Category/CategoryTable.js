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
    <table>
      <thead>
        <tr>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default CategoryTable;
