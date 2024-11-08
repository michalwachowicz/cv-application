import React from "react";
import PreviewButton from "../buttons/PreviewButton";
import PersonalForm from "../forms/PersonalForm";

const Main = React.forwardRef(
  (
    {
      data,
      activePage,
      pages,
      previewOpened,
      onInputChange,
      onPreviewOpen,
      onNextPage,
    },
    ref
  ) => {
    const { title } = pages[activePage];

    return (
      <main className="card card-main" ref={ref}>
        <header className="card-header">
          <h2 className="card-title">{title}</h2>
          <PreviewButton opened={previewOpened} onOpen={onPreviewOpen} />
        </header>

        {activePage === 0 && (
          <PersonalForm
            data={data}
            onChange={onInputChange}
            onNext={onNextPage}
          />
        )}
      </main>
    );
  }
);

export default Main;
