import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/Collapse.css";

function Collapse({ titre, contenu }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='collapse'>
      <button onClick={toggleCollapse} className='buttonCollapse'>
        <div className='elementButtonCollapse'>
          {titre}
          <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
        </div>
      </button>
      {!collapsed && (
        <div className='contenu'>
          {contenu}
        </div>
      )}
    </div>
  );
}

export default Collapse;