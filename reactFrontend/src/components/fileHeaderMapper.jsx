import React from "react";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function  FileHeaderMapper(props) {
    let fileHeader = props.excelFile.result.split('\n')[0].split(',');
    const [patientID, setPatientID] = React.useState('');
    const [MRN, setMRN] = React.useState('');
    const [patientDOB, setPatientDOB] = React.useState('');
    const [isDeceased, setIsDeceased] = React.useState('');
    const [DOD, setDOD] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');

    const handlePatientIDChange = (event) => {
        setPatientID(event.target.value);
        props.updateHeader(event.target.value, 'PatientID');
    }

    const handleMRNChange = (event) => {
        setMRN(event.target.value);
        props.updateHeader(event.target.value, 'MRN');
    }

    const handlePatientDOBChange = (event) => {
        setPatientDOB(event.target.value);
        props.updateHeader(event.target.value, 'PatientDOB');
    }

    const handleISDeceasedChange = (event) => {
        setIsDeceased(event.target.value);
        props.updateHeader(event.target.value, 'IsDeceased');
    }

    const handleDODChange = (event) => {
        setDOD(event.target.value);
        props.updateHeader(event.target.value, 'DOD');
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        props.updateHeader(event.target.value, 'LastName');
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        props.updateHeader(event.target.value, 'FirstName');
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        props.updateHeader(event.target.value, 'Gender');
    }

    const handleSexChange = (event) => {
        setSex(event.target.value);
        props.updateHeader(event.target.value, 'Sex');
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        props.updateHeader(event.target.value, 'Address');
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
        props.updateHeader(event.target.value, 'City');
    }
    const handleStateChange = (event) => {
        setState(event.target.value);
        props.updateHeader(event.target.value, 'State');
    }
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
        props.updateHeader(event.target.value, 'ZipCode');
    }

    return (
        <>
            <Typography>Please drag your file headers under it's matching purpose</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient ID</TableCell>
                            <TableCell align="right">MRN</TableCell>
                            <TableCell align="right">Patient DOB</TableCell>
                            <TableCell align="right">Is Deceased</TableCell>
                            <TableCell align="right">DOD</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Sex</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">Zip Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="patient-id-select-label"
                                        id="patient-id-select"
                                        value={patientID}
                                        label="Patient ID"
                                        onChange={handlePatientIDChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="MRN-select-label"
                                        id="MRN-select"
                                        value={MRN}
                                        label="MRN"
                                        onChange={handleMRNChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="patient-dob-select-label"
                                        id="patient-dob-select"
                                        value={patientDOB}
                                        label="Patient DOB"
                                        onChange={handlePatientDOBChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="is-deceased-select-label"
                                        id="is-deceased-select"
                                        value={isDeceased}
                                        label="Is Deceased"
                                        onChange={handleISDeceasedChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="DOD-select-label"
                                        id="DOD-select"
                                        value={DOD}
                                        label="DOD"
                                        onChange={handleDODChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="last-name-select-label"
                                        id="last-name-select"
                                        value={lastName}
                                        label="Last Name"
                                        onChange={handleLastNameChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="first-name-select-label"
                                        id="first-name-select"
                                        value={firstName}
                                        label="First Name"
                                        onChange={handleFirstNameChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="gender-select-label"
                                        id="gender-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleGenderChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="sex-select-label"
                                        id="sex-select"
                                        value={sex}
                                        label="Sex"
                                        onChange={handleSexChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="address-select-label"
                                        id="address-select"
                                        value={address}
                                        label="Address"
                                        onChange={handleAddressChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right"><FormControl fullWidth>
                                    <Select
                                        labelId="city-select-label"
                                        id="city-select"
                                        value={city}
                                        label="City"
                                        onChange={handleCityChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="state-select-label"
                                        id="state-select"
                                        value={state}
                                        label="State"
                                        onChange={handleStateChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <FormControl fullWidth>
                                    <Select
                                        labelId="zipCode-select-label"
                                        id="zipCode-select"
                                        value={zipCode}
                                        label="Zip Code"
                                        onChange={handleZipCodeChange}
                                    >
                                        {fileHeader.map((h) => {
                                            return <MenuItem key={h} value={h}>{h}</MenuItem>;
                                        })}
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}