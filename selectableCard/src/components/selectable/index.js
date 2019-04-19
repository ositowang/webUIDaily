import React from 'react';
import Card from '../card';
import './style.scss';

const tagsColor = [
  '#E4572E',
  '#17BEBB',
  '#FFC914',
  '#2E282A',
  '#76B041',
  '#FE4E00',
  '#FF0F80',
];

const Badge = (props) => {
  const { bgColor, tagName } = props;
  return (
    <span className="badge" style={{ backgroundColor: bgColor }}>
      {tagName}
    </span>
  );
};

export default function SelectableCard(props) {
  const { selected, tags, title, children } = props;
  const isSelected = selected ? 'selected' : '';
  const className = 'selectable ' + isSelected;
  const cardTitle = title ? <div className="title">{title}</div> : null;
  return (
    <Card>
      <div className={className} onClick={props.onClick}>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <Badge
              bgColor={tagsColor[index % tagsColor.length]}
              tagName={tag}
            />
          ))}
        </div>
        {cardTitle}
        <div className="check">
          <span className="checkmark">✔</span>
        </div>
        <div className="content"> {children}</div>
      </div>
    </Card>
  );
}
