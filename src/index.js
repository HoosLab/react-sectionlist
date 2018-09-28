import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ReactSectionList } from './lib';

class App extends React.Component {
  renderSectionHeader = item => <div>{item.title}</div>
  renderItem = (item, index) => <div>{item}</div>
  keyExtractor = (item, index) => item.title + index;

  render() {
    const sections = [
      {
        title: 'User',
        data: [
          <div className="section-item-title">
            Edit Profile
          </div>
        ]
      },
      {
        title: 'Accessability',
        data: [
          <div className="section-item-title">
            Mode
          </div>,
          <div className="section-item-title">
            Language
          </div>
        ],
        description: `This section describes user accessability.`
      },
      {
        title: 'Others',
        data: [
          <div className="section-item-title">
            About
          </div>,
          <div className="section-item-title">
            Ask
          </div>,
          <div className="section-item-title">
            Open Source
          </div>,
        ]
      }
    ];

    return (
      <ReactSectionList
        keyExtractor={this.keyExtractor}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
