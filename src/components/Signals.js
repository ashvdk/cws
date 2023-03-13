import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function Signals({option}) {
  const [state, setState] = React.useState({
    similar: false,
    leaks: false,
    highscore: false,
    log: false,
    malware: false,
    none: false,
    activetab:  false,
    cookies:  false,
    webrequest:  false,
    proxy:  false,
    webnavigation:  false,
    debugger_:  false,
    vpnprovider:  false,
    tabs:  false,
    alarms:  false,
    desktopcapture:  false,
    tabcapture:  false,
    pagecapture:  false,
    scripting:  false,
    declarativenetrequest:  false,
    declarativenetrequestfeedback:  false,
    declarativenetrequestwithhostaccess:  false,
    notifications:  false,
    host: false
  });
  console.log(state);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

const { similar,
leaks,
highscore,
log,
malware,
none, activetab,
cookies,
webrequest,
proxy,
webnavigation,
debugger_,
vpnprovider,
tabs,
alarms,
desktopcapture,
tabcapture,
pagecapture,
scripting,
declarativenetrequest,
declarativenetrequestfeedback,
declarativenetrequestwithhostaccess,
notifications, host } = state;
//   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
        {option == "signals" ? <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            
            <FormLabel component="legend">Does any of the suspicious signals triggered in score logs?</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={similar} onChange={handleChange} name="similar" />
                    }
                    label="Similar/*/popular or Similar/*/Older"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={leaks} onChange={handleChange} name="leaks" />
                    }
                    label="Leaks Signals"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={highscore} onChange={handleChange} name="highscore" />
                    }
                    label="Seti HighScore / Brain HighScore"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={log} onChange={handleChange} name="log" />
                    }
                    label="LOG/XHR Signals"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={malware} onChange={handleChange} name="malware" />
                    }
                    label="Grads/related accounts & other malware signals"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={none} onChange={handleChange} name="none" />
                    }
                    label="No suspicous signals"
                />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl> : <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            
            <FormLabel component="legend">what are the sensitive permissions requested in Extension?</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={activetab} onChange={handleChange} name="activetab" />
                    }
                    label="ACTIVETAB"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={cookies} onChange={handleChange} name="cookies" />
                    }
                    label="COOKIES"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={webrequest} onChange={handleChange} name="webrequest" />
                    }
                    label="WEBREQUEST"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={proxy} onChange={handleChange} name="proxy" />
                    }
                    label="PROXY"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={webnavigation} onChange={handleChange} name="webnavigation" />
                    }
                    label="WEBNAVIGATION"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={debugger_} onChange={handleChange} name="debugger_" />
                    }
                    label="DEBUGGER"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={vpnprovider} onChange={handleChange} name="vpnprovider" />
                    }
                    label="VPNPROVIDER"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={tabs} onChange={handleChange} name="tabs" />
                    }
                    label="TABS"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={alarms} onChange={handleChange} name="alarms" />
                    }
                    label="ALARMS"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={host} onChange={handleChange} name="host" />
                    }
                    label="ANY HOST PERMISSION"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={desktopcapture} onChange={handleChange} name="desktopcapture" />
                    }
                    label="DESKTOPCAPTURE"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={tabcapture} onChange={handleChange} name="tabcapture" />
                    }
                    label="TABCAPTURE"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={pagecapture} onChange={handleChange} name="pagecapture" />
                    }
                    label="PAGECAPTURE"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={scripting} onChange={handleChange} name="scripting" />
                    }
                    label="SCRIPTING"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={declarativenetrequest} onChange={handleChange} name="declarativenetrequest" />
                    }
                    label="DECLARATIVENETREQUEST"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={declarativenetrequestfeedback} onChange={handleChange} name="declarativenetrequestfeedback" />
                    }
                    label="DECLARATIVENETREQUESTFEEDBACK"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={declarativenetrequestwithhostaccess} onChange={handleChange} name="declarativenetrequestwithhostaccess" />
                    }
                    label="DECLARATIVENETREQUESTWITHHOSTACCESS"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={notifications} onChange={handleChange} name="notifications" />
                    }
                    label="NOTIFICATIONS"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={none} onChange={handleChange} name="none" />
                    }
                    label="NO SENSITIVE PERMISSIONS"
                />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>}
    </Box>
  );
}