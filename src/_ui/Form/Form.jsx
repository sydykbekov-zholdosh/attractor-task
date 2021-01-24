import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';

function Form({ initialValues, onSubmit, validate, children, render }) {
  if (render) {
    return (
      <Formik
        enableReinitialize
        validationSchema={validate}
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={props => <FormikForm>{render(props.values, props)}</FormikForm>}
      />
    );
  } else {
    return (
      <Formik
        enableReinitialize
        validationSchema={validate}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <FormikForm>{children}</FormikForm>
      </Formik>
    );
  }
}

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.object
};

export default Form;
