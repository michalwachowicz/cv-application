import React from "react";
import Input from "../inputs/Input";
import PhotoInput from "../inputs/PhotoInput";
import Select from "../inputs/Select";

export default function PersonalForm({ data, onChange, onNext }) {
  return (
    <form className="form form-personal" onSubmit={onNext}>
      <div className="form-personal-wrapper">
        <PhotoInput image={data.image || null} onChange={onChange} />

        <div className="form-personal-wrapper-inputs">
          <Input
            id="firstName"
            type="text"
            label="First Name"
            value={data.firstName || ""}
            onChange={onChange}
            required
          />
          <Input
            id="lastName"
            type="text"
            label="Last Name"
            value={data.lastName || ""}
            onChange={onChange}
            required
          />

          <Input
            id="email"
            type="email"
            label="Email Address"
            value={data.email || ""}
            onChange={onChange}
            required
          />
          <Input
            id="phone"
            type="tel"
            label="Telephone Number"
            value={data.phone || ""}
            onChange={onChange}
          />

          <Input
            id="birthdate"
            type="date"
            label="Date of Birth"
            value={data.birthdate || ""}
            onChange={onChange}
          />
          <Select
            id="gender"
            label="Gender"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Non-Binary", label: "Non-Binary" },
            ]}
            value={data.gender || ""}
            onChange={onChange}
            required
          />

          <Input
            id="country"
            type="text"
            label="Country"
            value={data.country || ""}
            onChange={onChange}
          />
          <Input
            id="city"
            type="text"
            label="City / Town"
            value={data.city || ""}
            onChange={onChange}
          />

          <Input
            id="linkedin"
            type="text"
            label="LinkedIn"
            value={data.linkedin || ""}
            onChange={onChange}
          />
          <Input
            id="website"
            type="text"
            label="Website"
            value={data.website || ""}
            onChange={onChange}
          />
        </div>
      </div>

      <button className="btn btn-action btn-action-positive" type="submit">
        Next
      </button>
    </form>
  );
}
