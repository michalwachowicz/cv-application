import React from "react";
import PreviewButton from "../buttons/PreviewButton";

export default function Main({
  activePage,
  pages,
  previewOpened,
  onPreviewOpen,
}) {
  const { title } = pages[activePage];

  return (
    <main className="main">
      <header className="main-header">
        <h2 className="main-title">{title}</h2>
        <PreviewButton opened={previewOpened} onOpen={onPreviewOpen} />
      </header>
    </main>
  );
}
