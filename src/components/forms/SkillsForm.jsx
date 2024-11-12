import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import Select from "../inputs/Select";

const initialSkill = {
  id: -1,
  skillName: "",
  skillLevel: "",
};

export default function SkillsForm({ data, onSubmit, onDelete }) {
  const [skill, setSkill] = useState(initialSkill);
  const list = data.skills || [];

  const changeHandler = (id, value) => {
    setSkill({ ...skill, [id]: value });
  };

  const openHandler = (object) => {
    setSkill(object || initialSkill);
  };

  const submitHandler = (newList) => {
    onSubmit("skills", newList);
    setSkill(initialSkill);
  };

  const deleteHandler = (newList) => {
    onDelete("skills", newList);
    setSkill(initialSkill);
  };

  return (
    <FormSection
      className="form-experience-skills"
      title="Skills"
      buttonTitle="Add skill"
      elementTitle="skillName"
      elementSubtitle="$[skillLevel]"
      list={list}
      current={skill}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <div className="form-input-wrapper">
        <Input
          id="skillName"
          type="text"
          label="Skill"
          placeholder="e.g. Microsoft Excel"
          value={skill.skillName || ""}
          onChange={changeHandler}
          required
        />

        <Select
          id="skillLevel"
          label="Level"
          options={[
            { value: "", label: "Do not show" },
            { value: "advanced", label: "Advanced" },
            { value: "intermediate", label: "Intermediate" },
            { value: "beginner", label: "Beginner" },
          ]}
          value={skill.skillLevel || ""}
        />
      </div>
    </FormSection>
  );
}
