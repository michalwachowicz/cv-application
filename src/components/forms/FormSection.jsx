/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import formatText from "../../utils/objectTextFormatter";
import IconButton from "../buttons/IconButton";
import EditIcon from "../../../public/edit.svg?react";
import DeleteIcon from "../../../public/delete.svg?react";
import { focusFirstElement } from "../../utils/focusUtils";

export default function FormSection({
  current,
  list,
  className = "",
  title = "",
  buttonTitle = "",
  elementTitle = "",
  elementSubtitle = "",
  onOpen,
  onDelete,
  onSubmit,
  children,
}) {
  const [editing, setEditing] = useState(false);

  const formRef = useRef();
  const titleRef = useRef();
  const openBtnRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const listCopy = [...list];
    const currentCopy = {
      ...current,
      id:
        current.id >= 0
          ? current.id
          : list.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1,
    };
    const index = listCopy.findIndex(
      (element) => element.id === currentCopy.id
    );

    if (index >= 0) listCopy[index] = currentCopy;
    else listCopy.push(currentCopy);

    onSubmit(listCopy);
    setEditing(false);
  };

  const openHandler = (object) => {
    setEditing(true);
    onOpen(object);
  };

  const deleteHandler = (objectId) => {
    if (editing) setEditing(false);
    if (objectId < 0) return;

    const listCopy = [...list];
    const index = listCopy.findIndex((element) => element.id === objectId);

    if (index < 0) return;

    listCopy.splice(index, 1);
    onDelete(titleRef, listCopy);
  };

  useEffect(() => {
    if (editing && formRef.current) focusFirstElement(formRef.current);
    else if (!editing && openBtnRef.current) openBtnRef.current.focus();
  }, [editing]);

  return (
    <section className={`form-section ${className}`}>
      <h3 ref={titleRef} className="form-section-title" tabIndex="-1">
        {title}
      </h3>

      {list.length > 0 && <hr />}

      <ul className="form-section-list">
        {list.map((element) => (
          <li className="form-section-list-item" key={element.id}>
            <div className="form-section-list-item-info">
              <h4 className="form-section-list-item-title">
                {element[elementTitle]}
              </h4>
              {elementSubtitle && (
                <div className="form-section-list-item-subtitle">
                  {formatText(element, elementSubtitle)}
                </div>
              )}
            </div>

            <div className="form-section-list-item-btns">
              <IconButton
                label={formatText(element, `Edit $[${elementTitle}]`)}
                onClick={() => openHandler(element)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                label={formatText(element, `Delete $[${elementTitle}]`)}
                onClick={() => deleteHandler(element.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </li>
        ))}
      </ul>

      <hr />

      {editing && (
        <form className="form-section-form" onSubmit={submitHandler}>
          <div ref={formRef} className="form-section-form-wrapper">
            {children}
          </div>

          <div className="form-section-form-btns">
            <button
              type="button"
              className="btn btn-action btn-action-negative"
              onClick={() => deleteHandler(current.id)}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn btn-action btn-action-positive"
            >
              {current.id < 0 ? "Add" : "Edit"}
            </button>
          </div>
        </form>
      )}

      {!editing && (
        <button
          ref={openBtnRef}
          type="button"
          className="btn btn-action btn-action-primary"
          onClick={() => openHandler(null)}
        >
          {buttonTitle}
        </button>
      )}
    </section>
  );
}
