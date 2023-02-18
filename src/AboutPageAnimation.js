import React, { useState, useRef, useEffect } from "react";
import "./aboutPageAnimation.css";
import { BUBBLES, SCROLL_SPEED } from "./constants";

const CANVAS_WIDTH = window.innerWidth;

export default function AboutPageAnimation() {
  const renderBubbles = (bubble, index) => <Bubble key={index} {...bubble} />;

  return (
    <div>
      <div className="container-fluid">
        <div className="hurdles hurdles-normal js-hurdles">
          <div className="hurdles-bubbles">{BUBBLES.map(renderBubbles)}</div>
        </div>
      </div>
    </div>
  );
}

const useAnimationFrame = callback => {
  const requestRef = useRef();

  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

function Bubble({ content, color, x, y }) {
  const [position, setPosition] = useState(x);

  useAnimationFrame(() =>
    setPosition(prevPosition => {
      const newPosition = prevPosition - SCROLL_SPEED;

      return newPosition < -10 ? CANVAS_WIDTH : newPosition;
    })
  );

  return (
    <div
      style={{
        transform: `translate(${position}px, ${y}px)`
      }}
      className={`hurdles-node hurdles-node5 hurdles-node hurdles-node--${color}`}
    >
      {content}
    </div>
  );
}