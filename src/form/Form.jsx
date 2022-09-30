import React, { useState } from "react";
import "./style.css";

function Form({ onSubmitHandler, onChangeHandler, inputs }) {
  const { title, body } = inputs;
  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          className="add-input"
          value={title}
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          className="add-input"
          value={body}
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </form>
  );
}

export default Form;
