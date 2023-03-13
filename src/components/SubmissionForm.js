import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ViolationAutoComplete from './ViolationAutoComplete';
import QueueAutoComplete from './QueueAutoComplete';
import LPCrawler from './LPCrawler';
import Signals from './Signals';
import ActionOnItem from './ActionOnItem';
import TextFields from './TextFields';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import  increment from '../actions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SubmissionForm({count, dispatch, title }) {
    const handleIncrement = () => {
        dispatch(increment(count))
    }
    return (
        <Grid item xs={6}>
            <h3>{title}</h3>
            <p>{count}</p>
            <TextFields lable="Item ID"/>
            <TextFields lable="Item Name"/>
            <TextFields lable="Functionality of the item"/>
            <QueueAutoComplete />
            <ViolationAutoComplete />
            <LPCrawler title="Is the Item Highlighted by the LP Crawler?"/>
            <Signals option="signals"/>
            <LPCrawler title="Any External calls/unsafe-eval/wasm-unsafe-eval mentioned in CSP or Externally_connectable is declared in manifest?"/>
            <Signals option="permissions"/>
            <LPCrawler title="Are the content scripts working on relevant hosts?"/>
            <LPCrawler title="Does library files haves popularity score?"/>
            <LPCrawler title="Any external calls/websockets found in the package?"/>
            <LPCrawler title="Is there any verdict change from the previous action log?"/>
            <LPCrawler title="Was icaster used as part of Dynamic Analysis?"/>
            <ActionOnItem />
            <Button variant="contained" color="success" onClick={handleIncrement}>
            Submit
            </Button>
        </Grid>
    );
}

const mapStateToProps = state => {
  // map state to props
  return {
    count: state.count
  };
};

// const mapDispatchToProps = dispatch => ({
//   // map actions to props
// });
// in google doc when we type something we get auto prediction and it will tell click on tab to complete the statement

export default connect(mapStateToProps)(SubmissionForm);