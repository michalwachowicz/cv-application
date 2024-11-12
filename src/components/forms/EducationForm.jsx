import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import DateSelect from "../inputs/DateSelect";

const initialEducation = {
  id: -1,
  educationStudies: "",
  educationCity: "",
  educationInstitution: "",
  educationStartDate: { month: 0, year: new Date().getFullYear() },
  educationEndDate: { month: 0, year: new Date().getFullYear() },
};

export default function EducationForm({ data, onSubmit, onDelete }) {
  const [education, setEducation] = useState(initialEducation);
  const list = data.education || [];

  const changeHandler = (id, value) => {
    setEducation({ ...education, [id]: value });
  };

  const openHandler = (object) => {
    setEducation(object || initialEducation);
  };

  const submitHandler = (newList) => {
    onSubmit("education", newList);
    setEducation(initialEducation);
  };

  const deleteHandler = (newList) => {
    onDelete("education", newList);
    setEducation(initialEducation);
  };

  return (
    <FormSection
      className="form-experience-education"
      title="Education"
      buttonTitle="Add education"
      elementTitle="educationStudies"
      elementSubtitle="$[educationStartDate:date] - $[educationEndDate:date]"
      list={list}
      current={education}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <div className="form-input-wrapper">
        <Input
          id="workStudies"
          type="text"
          label="Studies"
          placeholder="e.g. Bachelor of Science"
          value={education.educationStudies || ""}
          onChange={changeHandler}
          required
        />

        <Input
          id="educationCity"
          type="text"
          label="City / Town"
          placeholder="e.g. London"
          value={education.educationCity || ""}
          onChange={changeHandler}
          required
        />
      </div>

      <Input
        id="educationInstitution"
        type="text"
        label="Institution"
        placeholder="e.g. Massachusetts Institute of Technology"
        value={education.educationInstitution || ""}
        onChange={changeHandler}
        required
      />

      <div className="form-input-wrapper">
        <DateSelect
          id="educationStartDate"
          label="Start date"
          value={education.educationStartDate || {}}
          onChange={changeHandler}
          required
        />

        <DateSelect
          id="educationEndDate"
          label="End date"
          value={education.educationEndDate || {}}
          onChange={changeHandler}
          required
        />
      </div>
    </FormSection>
  );
}
