import React from 'react';

const CategoryRow = ({ categoryName }) => {
  return (
    <tr>
      <th class='categoryRow'>{categoryName}</th>
    </tr>
  );
};

export default CategoryRow;
