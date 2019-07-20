import React, { FunctionComponent } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

export const Footer: FunctionComponent = () => (
  <div className="footer-container">
    {'© Awesome App 2016. '}
    <Link href="https://github.com/guzmonne/office-ui-layout/tree/01-blank-project">Get in touch!</Link>
    {' -- Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/sukanin">Sukanin {'<@sukanin>'}</Link>
  </div>
);
