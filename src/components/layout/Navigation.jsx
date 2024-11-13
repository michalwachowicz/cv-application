import React from "react";

function NavigationItem({ active, title }) {
  return (
    <li className={`nav-list-item ${active ? "nav-list-item-active" : ""}`}>
      <div className="nav-list-item-title">
        <span className="nav-list-item-title-text">{title}</span>
      </div>
    </li>
  );
}

export default function Navigation({ activePage, pages }) {
  return (
    <nav className="nav">
      <ol className="nav-list">
        {pages.map(({ id, title }) => (
          <NavigationItem key={id} active={activePage === id} title={title} />
        ))}
      </ol>
    </nav>
  );
}
