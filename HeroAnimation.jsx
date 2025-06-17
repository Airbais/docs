import React from "react";
import "./HeroAnimation.css";

const HeroAnimation = () => (
  <div className="hero-container">
    {/* Background shapes */}
    <div className="bg-shape bg-shape-1"></div>
    <div className="bg-shape bg-shape-2"></div>
    <div className="bg-shape bg-shape-3"></div>

    {/* Central AI brain network */}
    <div className="ai-brain">
      <div className="brain-container">
        <div className="brain-core"></div>
        {/* Network nodes */}
        <div className="node node-1"></div>
        <div className="node node-2"></div>
        <div className="node node-3"></div>
        <div className="node node-4"></div>
        <div className="node node-5"></div>
        <div className="node node-6"></div>
        <div className="node node-7"></div>
        <div className="node node-8"></div>
        {/* Connections */}
        <div className="connection conn-1"></div>
        <div className="connection conn-2"></div>
        <div className="connection conn-3"></div>
        <div className="connection conn-4"></div>
        <div className="connection conn-5"></div>
        <div className="connection conn-6"></div>
      </div>
    </div>
  </div>
);

export default HeroAnimation;
