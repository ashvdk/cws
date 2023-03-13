import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ViolationAutoComplete() {
  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  console.log(value);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Violations" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Malware', year: 1994 },
  { title: 'Circumvents API NTP', year: 1972 },
  { title: 'Circumvents API Search', year: 1974 },
  { title: 'Impersonation/Copycatt', year: 2008 },
  { title: 'Deceptive Behavior', year: 1957 },
  { title: "Takedown NO CR", year: 1993 },
  { title: 'Not Family Safe', year: 1994 },
  {
    title: 'Pornography',
    year: 2003,
  },
  { title: 'Gambing', year: 1966 },
  { title: 'Hate', year: 1999 },
  {
    title: 'Violence',
    year: 2001,
  },
  {
    title: 'Insufficient Metadata',
    year: 1980,
  },
  { title: 'Misleading Functionality Mismatch', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'Misleading Additional Related Functionality',
    year: 2002,
  },
  { title: "Misleading Functionaity Not Working", year: 1975 },
  { title: 'Misleading Irrelevant Metadata', year: 1990 },
  { title: 'Permission Not Used', year: 1999 },
  { title: 'Permission Not Required For Properties Used', year: 1954 },
  {
    title: 'Broad Host Permission',
    year: 1977,
  },
  { title: 'SPP Ads', year: 2002 },
  { title: 'SPP Generic', year: 1995 },
  { title: 'SPP BAB', year: 1991 },
  { title: "PP link is missing", year: 1946 },
  { title: 'PP link is broken', year: 1997 },
  { title: 'PP link is Indirect', year: 1995 },
  { title: 'PP Missing user data handling', year: 1994 },
  { title: 'UDP Prominent Disclosure', year: 2001 },
  { title: 'UDP Security SSL', year: 1998 },
  { title: 'UDP Other Requirements', year: 1968 },
  { title: 'Obfuscation code Building', year: 1998 },
  { title: 'Obfuscation Identifier Names', year: 2014 },
  { title: 'Obfuscation Transfer Object Keys', year: 2014 },
  { title: 'Obfuscation Escape Unicode', year: 2014 },
  { title: 'Obfsucation String Array', year: 2002 },
  { title: 'Obfsucation Character Encoding', year: 1995 },
  { title: 'Obfsucation Packer', year: 1991 },
  { title: "Obfsucation Long Variable Names", year: 1946 },
  { title: 'Obfsucation Code Hidden in Images', year: 1997 },
  { title: 'Obfsucation Symbols Combination', year: 1995 },
  { title: 'Obfsucation Others', year: 1994 },
  { title: 'Obfsucation Multiple', year: 2001 },
  { title: 'Does Not Work', year: 1998 },
  { title: 'Apps Redirect', year: 1968 },
  { title: 'Keyword Stuffing', year: 1998 },
  { title: 'Spam User Ratings Reviewes installs', year: 2014 },
  { title: 'Spam Notification abuse', year: 2014 },
  { title: 'Spam Message', year: 2014 },
  { title: 'Spam Generic', year: 2014 },
  { title: 'Coin Mining', year: 2001 },
  { title: 'Youtube Downloader', year: 1998 },
  { title: 'Circumvents Paywall', year: 1968 },
  { title: 'Circumvents Login', year: 1998 },
  { title: 'Violates IP GuideLines', year: 2014 },
  { title: 'Impersonation Assets', year: 2014 }
];