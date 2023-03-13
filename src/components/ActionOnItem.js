import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ActionOnItem() {
  const [value, setValue] = React.useState('');
console.log(value)
  const handleChange = (event) => {
    
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Action Label?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="None" control={<Radio />} label="None" />
        <FormControlLabel value="Reject" control={<Radio />} label="Reject" />
        <FormControlLabel value="Esclate" control={<Radio />} label="Escalate" />
      </RadioGroup>
    </FormControl>
  );
}