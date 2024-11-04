import React from "react";

export default function Main({ activePage, pages }) {
  const { title } = pages[activePage];

  return (
    <main className="main">
      <h2 className="main-title">{title}</h2>
    </main>
  );
}
