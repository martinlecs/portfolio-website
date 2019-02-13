import React, { Component, createContext } from 'react';

export const DrawerContext = createContext({ open: false });

// This actually isn't essential. Can pass directly to DrawerContext.Provider
export class MyProvider extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <DrawerContext.Provider
        value={{
          state: this.state,
          toggleDrawer: () => {
            this.setState(state => ({ open: !state.open }));
          }
        }}
      >
        {this.props.children}
      </DrawerContext.Provider>
    );
  }
}
