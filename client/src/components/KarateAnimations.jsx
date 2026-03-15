import React from 'react';

const BaseFigure = ({ className = '', variant = '' }) => (
  <svg className={`karate-figure ${variant} ${className}`.trim()} viewBox="0 0 120 200" aria-hidden="true">
    <circle className="bg-ring" cx="60" cy="100" r="90" />
    <circle className="head" cx="60" cy="25" r="15" />
    <rect className="belt" x="45" y="95" width="30" height="6" rx="2" />
    <line className="body-line" x1="60" y1="40" x2="60" y2="110" />
    <g className="leftArm body-line">
      <line x1="60" y1="55" x2="30" y2="85" />
      <line x1="30" y1="85" x2="25" y2="105" />
    </g>
    <g className="rightArm body-line punch-arm">
      <line x1="60" y1="55" x2="90" y2="80" />
      <line x1="90" y1="80" x2="95" y2="100" />
    </g>
    <g className="leftLeg body-line">
      <line x1="60" y1="110" x2="40" y2="150" />
      <line x1="40" y1="150" x2="38" y2="180" />
    </g>
    <g className="rightLeg body-line kick-leg">
      <line x1="60" y1="110" x2="80" y2="150" />
      <line x1="80" y1="150" x2="82" y2="182" />
    </g>
    <line className="body-line" x1="60" y1="70" x2="60" y2="90" strokeDasharray="4 3" />
    <line className="body-line" x1="56" y1="74" x2="64" y2="74" strokeDasharray="3 3" />
  </svg>
);

export const FrontKickFigure = (props) => <BaseFigure variant="front-kick" {...props} />;
export const PunchFigure = (props) => <BaseFigure variant="punch" {...props} />;
export const RoundhouseFigure = (props) => <BaseFigure variant="roundhouse" {...props} />;
export const KataFigure = (props) => <BaseFigure variant="kata" {...props} />;

const KarateAnimations = { FrontKickFigure, PunchFigure, RoundhouseFigure, KataFigure };
export default KarateAnimations;
