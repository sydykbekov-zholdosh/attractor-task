import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Field from '../Form/Field';

const Input = props => {
  const { withoutForm, name, onChange, label, ...restProps } = props;

  if (withoutForm) {
    return (
      <div className="fullWidth">
        <Typography children={label}/>
        <TextField onChange={onChange} {...restProps} />
      </div>
    );
  }

  return (
    <Field name={name}>
      {({ onChange, ...fieldProps }) => (
        <div>
          <Typography children={label}/>
          <TextField
            name={name}
            onChange={event => onChange(event.target.value)}
            {...restProps}
            {...fieldProps}
          />
        </div>
      )}
    </Field>
  );
};

Input.propTypes = {
  withoutForm: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string
};

Input.defaultProps = {
  withoutForm: false,
  label: ''
};

export default Input;
