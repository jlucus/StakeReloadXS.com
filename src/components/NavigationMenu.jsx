import * as React from 'react';
import { useState } from 'react';

function NavigationMenu() {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const handleClick = () => {
    if (collapseMenu) {
      setCollapseMenu(false);
    } else {
      setCollapseMenu(true);
    }
  };

  return (
    <div>
      <h1>Stake Reload XS</h1>
      <p>2025 © All Rights Reserved | StakeReloadXS</p>
      <button onClick={handleClick}>Toggle Menu</button>
      {collapseMenu ? (
        <div id="collapseMenu">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      ) : (
        <div id="toggleOpen">
          <h4>Toggle Menu</h4>
        </div>
      )}
    </div>
  );
}

export default NavigationMenu;