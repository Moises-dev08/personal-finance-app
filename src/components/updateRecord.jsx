import React from "react";
import { useParams } from "react-router-dom";
import { updateRecord } from "../services/recordService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "../styles/updateRecord.css";

const UpdateRecord = () => {
  const { id, type } = useParams();
  let history = useHistory();

  const initialValues = {
    concept: "",
    amount: "",
    date: "",
  };

  const validationSchema = Yup.object({
    concept: Yup.string().required("Required field"),
    amount: Yup.number().required("Required field"),
    date: Yup.date().required("Required field"),
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
      type: type,
    };

    updateRecord(data, id);

    if (Object.entries(formik.errors).length === 0) {
      history.push("/");
    } else {
      alert("Please complete required fields.");
    }
  };

  return (
    <div className="updateForm">
      <form className="updateForm__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="concept">
          <h3 className="updateForm__title">Concept</h3>
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
          <h3 className="updateForm__title">Amount</h3>
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
          <h3 className="updateForm__title">Date</h3>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          {...formik.getFieldProps("date")}
          placeholder="01/02/2020"
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="errors"> {formik.errors.date}</div>
        ) : null}

        <h3 className="updateForm__title">Type</h3>

        <input placeholder={type} disabled />
        <button
          type="submit"
          className="updateForm__button"
          onClick={handleSubmitButton}>
          Update Record
        </button>
      </form>
    </div>
  );
};

export default UpdateRecord;
