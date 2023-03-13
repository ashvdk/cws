import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function QueueAutoComplete() {
  const [value, setValue] = React.useState('');
  console.log(value)
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Queue " />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = ['Risk Engine','Navitron Pending Review','Navitron Bulk Review','Resubmitted','Project Risk Zero',"High Quality Published",'Incentive Pending Review'];