import React from 'react';
import './Card.css';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`card ${props.className ?? ''}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
