import React, { Component } from 'react';
import InitialScreen from './components/initial-screen';
import ColorButtons from './components/color-buttons';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pages: [<InitialScreen />, <ColorButtons />, <div>Close</div>],
      currentPageIndex: 0
    };
  }

  getPrevSlide() {
    const { currentPageIndex } = this.state;
    this.setState({ currentPageIndex: currentPageIndex - 1 });
  }

  getNextSlide() {
    const { currentPageIndex } = this.state;
    this.setState({ currentPageIndex: currentPageIndex + 1 });
  }

  setSlide(i) {
    this.setState({ currentPageIndex: i });
  }

  render() {
    const { pages, currentPageIndex } = this.state;
    const isLastSlide = (currentPageIndex === pages.length - 1);
    const isFirstSlide = (currentPageIndex === 0);

    return (
      <div className="app">
        <div className="arrow-container">
          <div className={`arrow left ${isFirstSlide ? 'hidden' : ''}`} onClick={this.getPrevSlide.bind(this)}></div>
        </div>

        <div className="app-body">

          <div className="content">
            {pages[currentPageIndex]}
          </div>

          <div className="slides-links">
            {pages.map((el, i) => <div key={i} className={`link ${i === currentPageIndex? 'selected' : ''}`} onClick={this.setSlide.bind(this, i)}>{i + 1}</div>)}
          </div>
          
        </div>
        <div className="arrow-container">
          <div className={`arrow ${isLastSlide ? 'hidden' : ''}`} onClick={this.getNextSlide.bind(this)}></div>
        </div>
      </div>
    );
  }
}

export default App;
