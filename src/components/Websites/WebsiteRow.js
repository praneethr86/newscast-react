import React from 'react';

const WebsiteRow = ({ websiteName }) => {
  return (
    <tr>
      <td class='websiteRow'>{websiteName}</td>
    </tr>
  );
};

export default WebsiteRow;
