import React, { Component } from 'react';
import { Content } from '../../components/Content/Content';
import { Footer } from '../../components/Footer/Footer';
import { NavBar } from '../../components/NavBar/NavBar';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';

type AppState = {
  isOpen: boolean;
};

export class App extends Component<any, AppState> {
  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.close();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <div className="body">
          <div className="content">
            <Content />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
