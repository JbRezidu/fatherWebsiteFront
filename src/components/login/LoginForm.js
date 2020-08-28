import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import validator from 'validator';
import { formIsValid } from '../../utils/form.utils';
import { cloneDeep } from 'lodash';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
    password: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSumbitForm = (event) => {
    event.preventDefault();
    const modifiedFormValues = cloneDeep(formValues);
    // reset the form to valid first, then check errors
    setAllFormAsValid(modifiedFormValues);
    // verify required fields
    if (validator.isEmpty(modifiedFormValues.username.value)) {
      // mark the input as invalid
      setFieldAsInvalid(modifiedFormValues, 'username', 'Requis');
    }
    if (validator.isEmpty(modifiedFormValues.password.value)) {
      // mark the input as invalid
      setFieldAsInvalid(modifiedFormValues, 'password', 'Requis');
    }
    if (formIsValid(modifiedFormValues)) {
      // we can make the http call to connect the user
      console.log(modifiedFormValues);
      console.log('form is valid go send this to the auth API');
    }
    setFormValues(modifiedFormValues);
  };

  const setFieldAsInvalid = (_formValues, key, errorMessage) => {
    _formValues[key].isValid = false;
    _formValues[key].errorMessage = errorMessage;
    // setFormValues({..._formValues, [key]: {..._formValues[key], isValid: false, errorMessage}});
  };

  const setAllFormAsValid = (_formValues) => {
    Object.keys(_formValues).forEach((key) => {
      _formValues[key].isValid = true;
    });
  };

  return (
    <form onSubmit={handleSumbitForm} noValidate>
      <div>
        <TextField
          value={formValues.username.value}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              username: {
                ...formValues.username,
                value: e.currentTarget.value,
              },
            })
          }
          style={{ width: 250 }}
          id="username"
          required
          label="Nom d'utilisateur"
          helperText={formValues.username.errorMessage}
          error={!formValues.username.isValid}
        />
      </div>
      <div>
        <TextField
          value={formValues.password.value}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              password: {
                ...formValues.password,
                value: e.currentTarget.value,
              },
            })
          }
          style={{ width: 250 }}
          id="password"
          type={showPassword ? 'text' : 'password'}
          required
          label="Mot de passe"
          helperText={formValues.password.errorMessage}
          error={!formValues.password.isValid}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button type="submit">Se connecter</Button>
    </form>
  );
};

export default LoginForm;
