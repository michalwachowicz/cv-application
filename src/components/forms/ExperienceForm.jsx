import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import HobbiesForm from "./HobbiesForm";
import TrainingsForm from "./TrainingsForm";
import SkillsForm from "./SkillsForm";
import LanguagesForm from "./LanguagesForm";
import TextArea from "../inputs/TextArea";

export default function ExperienceForm({
  data,
  onBack,
  onNext,
  onChange,
  onDelete,
}) {
  return (
    <div className="form form-experience">
      <div className="form-experience-wrapper">
        <WorkExperienceForm
          data={data}
          onSubmit={onChange}
          onDelete={onDelete}
        />
        <EducationForm data={data} onSubmit={onChange} onDelete={onDelete} />
        <TrainingsForm data={data} onSubmit={onChange} onDelete={onDelete} />
        <SkillsForm data={data} onSubmit={onChange} onDelete={onDelete} />
        <LanguagesForm data={data} onSubmit={onChange} onDelete={onDelete} />
        <HobbiesForm data={data} onSubmit={onChange} onDelete={onDelete} />

        <TextArea
          id="description"
          label="Description"
          value={data.description || ""}
          onChange={onChange}
        />
      </div>
      <div className="form-experience-btns">
        <button
          type="button"
          className="btn btn-action btn-action-neutral"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-action btn-action-positive"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
