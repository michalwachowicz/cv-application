import React, { useState } from "react";
import FormSection from "./FormSection";
import Input from "../inputs/Input";

const initialHobby = {
  id: -1,
  hobby: "",
};

export default function HobbiesForm({ data, onSubmit, onDelete }) {
  const [hobby, setHobby] = useState(initialHobby);
  const list = data.hobbies || [];

  const changeHandler = (id, value) => {
    setHobby({ ...hobby, [id]: value });
  };

  const openHandler = (object) => {
    setHobby(object || initialHobby);
  };

  const submitHandler = (newList) => {
    onSubmit("hobbies", newList);
    setHobby(initialHobby);
  };

  const deleteHandler = (ref, newList) => {
    onDelete("hobbies", newList, ref);
    setHobby(initialHobby);
  };

  return (
    <FormSection
      className="form-experience-hobbies"
      title="Hobbies"
      buttonTitle="Add hobby"
      elementTitle="hobby"
      list={list}
      current={hobby}
      onOpen={openHandler}
      onSubmit={submitHandler}
      onDelete={deleteHandler}
    >
      <Input
        id="hobby"
        type="text"
        label="Hobby"
        placeholder="e.g. Cooking"
        value={hobby.hobby || ""}
        onChange={changeHandler}
        required
      />
    </FormSection>
  );
}
