import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      {
        track: {
          track_name: "abc"
        }
      },
      {
        track: {
          track_name: "123"
        }
      },
      {
        track: {
          track_name: "a4l"
        }
      }
    ],
    heading: "Top 10 Tracks"
  };
  render() {
    return;
    <Context.Provider value={this.state}>
      {this.props.childern}
    </Context.Provider>;
  }
}
export const Consumer = Context.Consumer;
