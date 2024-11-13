import React, { useLayoutEffect, useState } from "react";
import formatText from "../../utils/objectTextFormatter";

const A4_WIDTH = 1190;

const PreviewDocument = React.forwardRef(({ data, className = "" }, ref) => {
  const [width, setWidth] = useState(0);

  const personalSection = [
    { id: "email", label: "E-mail Address" },
    { id: "phone", label: "Telephone Number" },
    { id: "birthdate", label: "Date of Birth" },
    { id: "gender", label: "Gender" },
    { id: "city", label: "City / Town" },
    { id: "country", label: "Country" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "website", label: "Website" },
  ];

  const getWidth = (originalWidth) => (originalWidth / A4_WIDTH) * width;

  useLayoutEffect(() => {
    const updateSize = () =>
      setWidth(ref.current ? ref.current.offsetWidth : 0);
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`preview ${className}`}
      style={{ fontSize: `${getWidth(20)}px` }}
    >
      <div
        className="preview-wrapper"
        style={{
          padding: `${getWidth(48)}px ${getWidth(64)}px`,
          gap: `${getWidth(64)}px`,
        }}
      >
        <div
          className="preview-side"
          style={{
            flexBasis: `${getWidth(310)}px`,
          }}
        >
          {data.image && (
            <img
              className="preview-image"
              src={data.image}
              alt=""
              width={getWidth(310)}
              height={getWidth(310)}
            />
          )}
          <div
            className="preview-side-info"
            style={{
              gap: `${getWidth(32)}px`,
              marginTop: `${getWidth(40)}px`,
            }}
          >
            <hr className="preview-hr" />

            <div
              className="preview-side-section"
              style={{ gap: `${getWidth(16)}px` }}
            >
              <h2
                className="preview-title"
                style={{ fontSize: `${getWidth(28)}px` }}
              >
                Personal Information
              </h2>

              {personalSection.map(
                (item) =>
                  data[item.id] && (
                    <div key={item.id}>
                      <h3>{item.label}</h3>
                      <div
                        style={{
                          marginTop: `${getWidth(4)}px`,
                        }}
                      >
                        {data[item.id]}
                      </div>
                    </div>
                  )
              )}
            </div>

            {((data.skills && data.skills.length > 0) ||
              (data.languages && data.languages.length > 0) ||
              (data.hobbies && data.hobbies > 0)) && (
              <hr className="preview-hr" />
            )}

            {data.skills && data.skills.length > 0 && (
              <>
                <div
                  className="preview-side-section"
                  style={{ gap: `${getWidth(16)}px` }}
                >
                  <h2
                    className="preview-title"
                    style={{ fontSize: `${getWidth(28)}px` }}
                  >
                    Skills
                  </h2>

                  <ul style={{ marginLeft: `${getWidth(16)}px` }}>
                    {data.skills.map((skill) => (
                      <li key={skill.id}>
                        <strong>{skill.skillName}</strong>{" "}
                        <span className="preview-light">
                          {skill.skillLevel}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {((data.languages && data.languages.length > 0) ||
                  (data.hobbies && data.hobbies.length > 0)) && (
                  <hr className="preview-hr" />
                )}
              </>
            )}

            {data.languages && data.languages.length > 0 && (
              <>
                <div
                  className="preview-side-section"
                  style={{ gap: `${getWidth(16)}px` }}
                >
                  <h2
                    className="preview-title"
                    style={{ fontSize: `${getWidth(28)}px` }}
                  >
                    Languages
                  </h2>

                  <ul style={{ marginLeft: `${getWidth(16)}px` }}>
                    {data.languages.map((language) => (
                      <li key={language.id}>
                        <strong>{language.languageName}</strong>{" "}
                        <span className="preview-light">
                          {language.languageLevel}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {data.hobbies && data.hobbies.length > 0 && (
                  <hr className="preview-hr" />
                )}
              </>
            )}

            {data.hobbies && data.hobbies.length > 0 && (
              <div
                className="preview-side-section"
                style={{ gap: `${getWidth(16)}px` }}
              >
                <h2
                  className="preview-title"
                  style={{ fontSize: `${getWidth(28)}px` }}
                >
                  Hobbies
                </h2>

                <ul style={{ marginLeft: `${getWidth(16)}px` }}>
                  {data.hobbies.map((hobby) => (
                    <li key={hobby.id}>
                      <strong>{hobby.hobby}</strong>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="preview-main">
          {(data.firstName || data.lastName) && (
            <h1
              className="preview-name"
              style={{ fontSize: `${getWidth(48)}px` }}
            >
              {data.firstName} {data.lastName}
            </h1>
          )}

          {data.description && (
            <p
              className="preview-description"
              style={{
                fontSize: `${getWidth(24)}px`,
                marginTop: `${getWidth(8)}px`,
              }}
            >
              {data.description}
            </p>
          )}

          {data.work && data.work.length > 0 && (
            <div>
              <h2
                className="preview-title"
                style={{
                  fontSize: `${getWidth(28)}px`,
                  marginTop: `${getWidth(40)}px`,
                }}
              >
                Job Experience
              </h2>
              <ul
                className="preview-main-list"
                style={{
                  gap: `${getWidth(24)}px`,
                  marginTop: `${getWidth(16)}px`,
                }}
              >
                {data.work.map((job) => (
                  <li key={job.id}>
                    <div className="preview-light">
                      {formatText(
                        job,
                        "$[workStartDate:date] - $[workEndDate:date]"
                      )}
                    </div>
                    <div style={{ marginTop: `${getWidth(4)}px` }}>
                      <strong>{`${job.workTitle}`}</strong>
                      {` / ${job.workCompany} / ${job.workCity}`}
                    </div>
                    {job.workDescription && (
                      <>
                        <div style={{ marginTop: `${getWidth(8)}px` }}>
                          Description:
                        </div>
                        <div
                          className="preview-description"
                          style={{ marginTop: `${getWidth(4)}px` }}
                        >
                          {job.workDescription}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.education && data.education.length > 0 && (
            <div>
              <h2
                className="preview-title"
                style={{
                  fontSize: `${getWidth(28)}px`,
                  marginTop: `${getWidth(40)}px`,
                }}
              >
                Education
              </h2>
              <ul
                className="preview-main-list"
                style={{
                  gap: `${getWidth(24)}px`,
                  marginTop: `${getWidth(16)}px`,
                }}
              >
                {data.education.map((study) => (
                  <li key={study.id}>
                    <div className="preview-light">
                      {formatText(
                        study,
                        "$[educationStartDate:date] - $[educationEndDate:date]"
                      )}
                    </div>
                    <div style={{ marginTop: `${getWidth(4)}px` }}>
                      <strong>{`${study.educationStudies}`}</strong>
                    </div>
                    <div style={{ marginTop: `${getWidth(4)}px` }}>
                      {`${study.educationInstitution} / ${study.educationCity}`}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.trainings && data.trainings.length > 0 && (
            <div>
              <h2
                className="preview-title"
                style={{
                  fontSize: `${getWidth(28)}px`,
                  marginTop: `${getWidth(40)}px`,
                }}
              >
                Trainings, courses, certificates
              </h2>
              <ul
                className="preview-main-list"
                style={{
                  gap: `${getWidth(24)}px`,
                  marginTop: `${getWidth(16)}px`,
                }}
              >
                {data.trainings.map((training) => (
                  <li key={training.id}>
                    <div className="preview-light">
                      {formatText(training, "$[trainingartDate:date]")}
                    </div>
                    <div style={{ marginTop: `${getWidth(4)}px` }}>
                      <strong>{`${training.trainingName}`}</strong>
                    </div>
                    <div style={{ marginTop: `${getWidth(4)}px` }}>
                      {training.trainingProvider}
                    </div>
                    {training.trainingDescription && (
                      <>
                        <div style={{ marginTop: `${getWidth(8)}px` }}>
                          Description:
                        </div>
                        <div
                          className="preview-description"
                          style={{ marginTop: `${getWidth(4)}px` }}
                        >
                          {training.trainingDescription}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default PreviewDocument;
