import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import SubmissionForm from './components/SubmissionForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Bugsidebar from './components/Bugsidebar';
import Employees from './components/Employees';
import ProductionForm from './components/ProductionForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs="auto">
            <Item><Sidebar /></Item>
          </Grid>
          <Routes>
            <Route  path="/" element={<HomePage />} />
            {/* <Route path="/item-production-form" element={<SubmissionForm title="Item Production Form"/>} /> */}
            <Route exact path="/item-production" element={<ProductionForm />} />
            <Route exact path="/item-production-form" element={<SubmissionForm title="Item Production Form"/>} />
            <Route exact path="/item-Submission-form" element={<SubmissionForm title="Item Submission Form"/>}/>
            <Route exact path="/pod-details" element={<Employees />} />
            <Route exact path="/pkt" element={<HomePage />} />
          </Routes>
          <Grid item xs>
            <Item><Bugsidebar /></Item>
          </Grid>
        </Grid>
      </Box>
    
  );
}

export default App