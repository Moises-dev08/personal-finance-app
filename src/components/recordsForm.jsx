import React from "react";
import { newRecord } from "../services/recordService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "../styles/recordsForm.css";

const RecordsForm = () => {
  let history = useHistory();

  const initialValues = {
    concept: "",
    amount: "",
    date: "",
    type: "",
  };

  const validationSchema = Yup.object({
    concept: Yup.string().required("Required field"),
    amount: Yup.number().required("Required field"),
    date: Yup.date().required("Required field"),
    type: Yup.string().required("Required field"),
  });

  const onSubmit = (values) => {
    console.log("values>>", values, "errors>> ", formik.errors);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSubmitButton = (event) => {
    event.preventDefault();

    let data = {
      concept: formik.values.concept,
      amount: formik.values.amount,
      date: formik.values.date,
      type: formik.values.type,
    };

    newRecord(data);

    if (Object.entries(formik.errors).length === 0) {
      history.push("/");
    } else {
      alert("Please complete required fields.");
    }
  };
  return (
    <div className="recordsForm">
      <form className="recordsForm__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="concept">
          <h3 className="recordsForm__title">Concept</h3>
        </label>
        <input
          id="concept"
          type="text"
          name="concept"
          {...formik.getFieldProps("concept")}
          placeholder="Concept"
        />
        {formik.touched.concept && formik.errors.concept ? (
          <div className="errors"> {formik.errors.concept}</div>
        ) : null}
        <label htmlFor="amount">
          {" "}
          <h3 className="recordsForm__title">Amount</h3>
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          {...formik.getFieldProps("amount")}
          placeholder="Amount"
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div className="errors"> {formik.errors.amount}</div>
        ) : null}
        <label htmlFor="date">
          {" "}
          <h3 className="recordsForm__title">Date</h3>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          {...formik.getFieldProps("date")}
          placeholder="Date"
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="errors"> {formik.errors.date}</div>
        ) : null}
        <label htmlFor="type">
          {" "}
          <h3 className="recordsForm__title">Type</h3>
        </label>
        <input
          id="type"
          type="url"
          name="type"
          {...formik.getFieldProps("type")}
          placeholder="Type"
        />
        {formik.touched.type && formik.errors.type ? (
          <div className="errors"> {formik.errors.type}</div>
        ) : null}
        <button
          type="submit"
          className="recordsForm__button"
          onClick={handleSubmitButton}>
          Create new record
        </button>
      </form>
    </div>
  );
};

export default RecordsForm;
