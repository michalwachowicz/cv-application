import React from "react";
import PreviewButton from "../buttons/PreviewButton";
import PersonalForm from "../forms/PersonalForm";
import ExperienceForm from "../forms/ExperienceForm";
import DownloadCV from "./DownloadCV";

const Main = React.forwardRef(
  (
    {
      data,
      activePage,
      pages,
      previewOpened,
      onInputChange,
      onPreviewOpen,
      onPreviousPage,
      onNextPage,
      onDelete,
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

        {activePage === 1 && (
          <ExperienceForm
            data={data}
            onBack={onPreviousPage}
            onNext={onNextPage}
            onChange={onInputChange}
            onDelete={onDelete}
          />
        )}

        {activePage === 2 && <DownloadCV data={data} onBack={onPreviousPage} />}
      </main>
    );
  }
);

export default Main;
