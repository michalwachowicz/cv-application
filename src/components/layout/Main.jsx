import React from "react";
import PreviewButton from "../buttons/PreviewButton";

const Main = React.forwardRef(
  ({ activePage, pages, previewOpened, onPreviewOpen }, ref) => {
    const { title } = pages[activePage];

    return (
      <main className="card card-main" ref={ref}>
        <header className="card-header">
          <h2 className="card-title">{title}</h2>
          <PreviewButton opened={previewOpened} onOpen={onPreviewOpen} />
        </header>
      </main>
    );
  }
);

export default Main;
