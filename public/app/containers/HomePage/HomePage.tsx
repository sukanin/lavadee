import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class HomePage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>HomePage</p>
        <DefaultButton>I am a button.</DefaultButton>
      </div>
    );
  }
}
