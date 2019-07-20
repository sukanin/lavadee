import React, { FunctionComponent } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

export const Footer: FunctionComponent = () => (
  <div className="footer-container">
    {'© LaVaDee 2019. '}
    <Link href="https://github.com/sukanin/lavadee">Get in touch!</Link>
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/sukanin">Sukanin{'<@sukanin>'}</Link>
  </div>
);
