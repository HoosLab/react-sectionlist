import React, {Component} from 'react';
import './ReactSectionList.css';

export default class extends Component {
  render() {
    const {
      className,
      style,
      renderItem,
      renderSectionHeader,
      sections,
      keyExtractor
    } = this.props;

    let _className = 'sectionlist-container';
    if (className) {
      _className += ' ' + className;
    }

    return (
      <div className={_className} style={style}>
        {
          sections.map((section, index) => {
            return (
              <div className="section-container" key={keyExtractor(section, index)}>
                <div className="section-header">
                  {renderSectionHeader(section)}
                </div>
                <div className="section-item-container">
                {
                  section.data.map((item, index) =>
                    <div className="section-item" key={index}>
                      {renderItem(item, index)}
                    </div>
                  )
                }
                </div>
                { section.description &&
                  <div className="section-description">
                    {section.description}
                  </div>
                }
              </div>
            );
          })
        }
      </div>
    )
  }
}
