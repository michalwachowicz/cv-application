import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";
import Select from "../inputs/Select";

const initialLanguage = {
  id: -1,
  langaugeName: "",
  languageLevel: "",
};

export default function LanguagesForm({ data, onSubmit, onDelete }) {
  const [language, setLanguage] = useState(initialLanguage);
  const list = data.languages || [];

  const changeHandler = (id, value) => {
    setLanguage({ ...language, [id]: value });
  };

  const openHandler = (object) => {
    setLanguage(object || initialLanguage);
  };

  const submitHandler = (newList) => {
    onSubmit("languages", newList);
    setLanguage(initialLanguage);
  };

  const deleteHandler = (newList) => {
    onDelete("languages", newList);
    setLanguage(initialLanguage);
  };

  return (
    <FormSection
      className="form-experience-languages"
      title="Languages"
      buttonTitle="Add language"
      elementTitle="languageName"
      elementSubtitle="$[languageLevel]"
      list={list}
      current={language}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <div className="form-input-wrapper">
        <Input
          id="languageName"
          type="text"
          label="Language"
          placeholder="e.g. English"
          value={language.langaugeName || ""}
          onChange={changeHandler}
          required
        />

        <Select
          id="languageLevel"
          label="Level"
          options={[
            { value: "", label: "Do not show" },
            { value: "native", label: "Native" },
            { value: "fluent", label: "Fluent" },
            { value: "advanced", label: "Advanced" },
            { value: "intermediate", label: "Intermediate" },
            { value: "beginner", label: "Beginner" },
          ]}
          value={language.languageLevel || ""}
        />
      </div>
    </FormSection>
  );
}
