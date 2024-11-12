import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import DateSelect from "../inputs/DateSelect";
import TextArea from "../inputs/TextArea";

const initialWork = {
  id: -1,
  workTitle: "",
  workCity: "",
  workCompany: "",
  workStartDate: { month: 0, year: new Date().getFullYear() },
  workEndDate: { month: 0, year: new Date().getFullYear() },
  workDescription: "",
};

export default function WorkExperienceForm({ data, onSubmit, onDelete }) {
  const [work, setWork] = useState(initialWork);
  const list = data.work || [];

  const changeHandler = (id, value) => {
    setWork({ ...work, [id]: value });
  };

  const openHandler = (object) => {
    setWork(object || initialWork);
  };

  const submitHandler = (newList) => {
    onSubmit("work", newList);
    setWork(initialWork);
  };

  const deleteHandler = (newList) => {
    onDelete("work", newList);
    setWork(initialWork);
  };

  return (
    <FormSection
      className="form-experience-work"
      title="Work Experience"
      buttonTitle="Add work experience"
      elementTitle="workTitle"
      elementSubtitle="$[workStartDate:date] - $[workEndDate:date]"
      list={list}
      current={work}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <div className="form-input-wrapper">
        <Input
          id="workTitle"
          type="text"
          label="Title / Position"
          placeholder="e.g. Front-End Developer"
          value={work.workTitle || ""}
          onChange={changeHandler}
          required
        />

        <Input
          id="workCity"
          type="text"
          label="City / Town"
          placeholder="e.g. London"
          value={work.workCity || ""}
          onChange={changeHandler}
          required
        />
      </div>

      <Input
        id="workCompany"
        type="text"
        label="Company"
        placeholder="e.g. Google"
        value={work.workCompany || ""}
        onChange={changeHandler}
        required
      />

      <div className="form-input-wrapper">
        <DateSelect
          id="workStartDate"
          label="Start date"
          value={work.workStartDate || {}}
          onChange={changeHandler}
          required
        />

        <DateSelect
          id="workEndDate"
          label="End date"
          value={work.workEndDate || {}}
          onChange={changeHandler}
          required
        />
      </div>

      <TextArea
        id="workDescription"
        label="Description"
        value={work.workDescription || ""}
        onChange={changeHandler}
      />
    </FormSection>
  );
}
