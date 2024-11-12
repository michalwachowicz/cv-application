import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import DateSelect from "../inputs/DateSelect";
import TextArea from "../inputs/TextArea";

const initialTraining = {
  id: -1,
  trainingName: "",
  trainingProvider: "",
  trainingDate: { month: 0, year: new Date().getFullYear() },
  trainingDescription: "",
};

export default function TrainingsForm({ data, onSubmit, onDelete }) {
  const [training, setTraining] = useState(initialTraining);
  const list = data.trainings || [];

  const changeHandler = (id, value) => {
    setTraining({ ...training, [id]: value });
  };

  const openHandler = (object) => {
    setTraining(object || initialTraining);
  };

  const submitHandler = (newList) => {
    onSubmit("trainings", newList);
    setTraining(initialTraining);
  };

  const deleteHandler = (newList) => {
    onDelete("trainings", newList);
    setTraining(initialTraining);
  };

  return (
    <FormSection
      className="form-experience-trainings"
      title="Trainings, courses, certificates"
      buttonTitle="Add training / course / certificate"
      elementTitle="trainingName"
      elementSubtitle="$[trainingDate:date]"
      list={list}
      current={training}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <div className="form-input-wrapper">
        <Input
          id="trainingName"
          type="text"
          label="Name"
          placeholder="e.g. Data Structures and Algorithms in JavaScript"
          value={training.trainingName || ""}
          onChange={changeHandler}
          required
        />

        <Input
          id="trainingProvider"
          type="text"
          label="Provider"
          placeholder="e.g. FreeCodeCamp"
          value={training.trainingProvider || ""}
          onChange={changeHandler}
          required
        />
      </div>

      <DateSelect
        id="trainingDate"
        label="Date"
        value={training.trainingDate || {}}
        onChange={changeHandler}
        required
      />

      <TextArea
        id="trainingDescription"
        label="Description"
        value={training.trainingDescription || ""}
        onChange={changeHandler}
      />
    </FormSection>
  );
}
