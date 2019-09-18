import React from "react";
import DocumentForm from "./DocumentForm";
import FieldWrapper from "./FieldWrapper/FieldWrapper";
import Team from "./Team";

import commonData from "../../../docx/fixtures";

const { ipcRenderer } = require("electron");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  try {
    await sleep(300);
    ipcRenderer.send("print:value", values);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Something went wrong: ", error);
  }
};

const FormSteps = () => (
  <React.Fragment>
<<<<<<< HEAD
    <DocumentForm initialValues={commonData} onSubmit={onSubmit}>
=======
    <DocumentForm
      initialValues={{
        schoolType: "Szkoła Podstawowa",
        profession: false,
        members: []
      }}
      onSubmit={onSubmit}
    >
>>>>>>> master
      <DocumentForm.Step>
        <FieldWrapper
          name="childfullName"
          componentSize="large"
          component="input"
        />
        <FieldWrapper
          name="childfullNameGenetiv"
          componentSize="large"
          component="input"
        />
      </DocumentForm.Step>
      <DocumentForm.Step>
        <FieldWrapper
          name="childBirthplace"
          componentSize="medium"
          component="input"
        />
        <FieldWrapper
          name="childPesel"
          componentSize="medium"
          component="input"
        />
      </DocumentForm.Step>
      <Team />
    </DocumentForm>
  </React.Fragment>
);

export default FormSteps;
