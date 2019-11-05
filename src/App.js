import React from "react";
import "./App.css";

const App = props => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const headerItems = ["HOME", "ABOUT ME", "PROJECTS", "CONTACT"];

// the static letter style
// we add the animation delay to this object for each letter below
const LETTER_STYLE = {
  animationName: "bob",
  animationDuration: "1s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite"
};

// this value is multiplied by each letter's index
// larger values mean more 'cycles' of animation per word
const ANIMATION_DELAY_SEPARATION = 0.1;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverWord: null
    };
  }
  mouseEnterHandler = word => {
    this.setState({ hoverWord: word });
  };
  mouseLeaveHandler = () => {
    this.setState({ hoverWord: null });
  };
  render() {
    const { hoverWord } = this.state;
    return (
      <div className="header-nav">
        {headerItems.map(item => {
          return (
            <div
              key={item}
              className="header-nav-item"
              onMouseEnter={() => this.mouseEnterHandler(item)}
              onMouseLeave={() => this.mouseLeaveHandler()}
            >
              {item.split("").map((letter, i) => {
                if (letter.trim()) {
                  let letterStyle = {};
                  if (hoverWord === item) {
                    letterStyle = {
                      ...LETTER_STYLE,
                      animationDelay: `${ANIMATION_DELAY_SEPARATION * i}s`
                    };
                  }
                  return (
                    <div
                      key={letter + i}
                      style={letterStyle}
                      className="header-nav-item-letter"
                    >
                      {letter}
                    </div>
                  );
                }
                return letter;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
