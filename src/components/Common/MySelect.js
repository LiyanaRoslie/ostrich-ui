import React from 'react';

import Select from 'react-select';
import TextField from '@material-ui/core/TextField';

const options = [
  { value: 'Food', label: 'Food' },
  { value: 'Being Fabulous', label: 'Being Fabulous' },
  { value: 'Ken Wheeler', label: 'Ken Wheeler' },

  { value: 'Kittens', label: 'Kittens' },
  { value: 'Others', label: 'Others' },
];

class MySelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('topics', value[0].value);
    if (value[0].value.includes('Others')) {
      console.log("Hiya")
    }
    else {
      console.log(value[0].value)
    }
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="color">Topics (select at least 3) </label>
        <Select
          id="color"
          options={options}
          isMulti
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        <TextField
          onChange={this.state.username}
          label="Location Line 1"
          fullWidth
          required
        />
        {!!this.props.error &&
          this.props.touched && (
            <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
          )}
      </div>
    );
  }
}

export default MySelect;
