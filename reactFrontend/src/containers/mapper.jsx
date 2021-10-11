import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UploadExcel from "../components/uploadExcel";
import FileHeaderMapper from "../components/fileHeaderMapper";
import AddToDB from "../components/addToDB";

const steps = ['Upload Excel File', 'Map the data', 'Insert into DB'];
const theme = createTheme();

let file, newFile;
const storeFileHandlerInState = (reader) => {
    file = reader;
    newFile = reader.result && '' + reader.result;
}

const updateHeaderHandler = (oldHeader, newHeader) => {
    newFile = newFile.replace(oldHeader, newHeader);
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UploadExcel storeFileHandler={storeFileHandlerInState} />;
    case 1:
      return <FileHeaderMapper excelFile={file} updateHeader={updateHeaderHandler} />;
    case 2:
      return <AddToDB excelFile={newFile} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Mapper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              NatHealth Insurance
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="lg" sx={{ mb: 10 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
                Add Pateinets and treatments
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Data stored sucessfully.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your data was stored sucessfully in the database.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
  
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
    </ThemeProvider>);
}