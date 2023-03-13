import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields({lable}) {
  const [name, setName] = React.useState('');
  console.log(name)
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label={lable}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </Box>
  );
}