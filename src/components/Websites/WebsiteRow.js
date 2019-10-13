import React from 'react';

const WebsiteRow = ({ websiteName, onWebsiteClick }) => {
  return (
    <tr>
      <td class='websiteRow' onclick={onWebsiteClick}>
        {websiteName}
      </td>
    </tr>
  );
};

export default WebsiteRow;
