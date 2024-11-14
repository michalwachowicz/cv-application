import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import DateSelect from "../inputs/DateSelect";
import TextArea from "../inputs/TextArea";
import Checkbox from "../inputs/Checkbox";

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
  const [workEndDate, setWorkEndDate] = useState(initialWork.workEndDate);
  const [stillWorking, setStillWorking] = useState(false);

  const list = data.work || [];

  const changeHandler = (id, value) => {
    setWork({ ...work, [id]: value });
    if (id === "workEndDate") setWorkEndDate(value);
  };

  const openHandler = (object) => {
    const workObject = object || initialWork;
    const isNow = workObject.workEndDate === "Now";

    setWork(object || initialWork);
    setWorkEndDate(isNow ? initialWork.workEndDate : workObject.workEndDate);
    setStillWorking(isNow);
  };

  const submitHandler = (newList) => {
    onSubmit("work", newList);
    setWork(initialWork);
  };

  const deleteHandler = (ref, newList) => {
    onDelete("work", newList, ref);
    setWork(initialWork);
  };

  const stillWorkingHandler = () => {
    setWork({
      ...work,
      workEndDate: stillWorking ? workEndDate : "Now",
    });
    setStillWorking(!stillWorking);
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

      <div className="form-input-wrapper-date">
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
            value={workEndDate || {}}
            onChange={changeHandler}
            disabled={stillWorking}
            required
          />
        </div>

        <Checkbox
          id="workStillWorking"
          label="Still working?"
          checked={stillWorking}
          onSwitch={stillWorkingHandler}
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
