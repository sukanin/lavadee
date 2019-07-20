import React, { FunctionComponent } from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export const NavBar: FunctionComponent = () => (
  <div className="NavBar">
    <div className="logo ms-font-xl">
      <strong>LaVaDee</strong>
    </div>
    <div className="searchbox">
      <SearchBox labelText="Search" />
    </div>
  </div>
);
