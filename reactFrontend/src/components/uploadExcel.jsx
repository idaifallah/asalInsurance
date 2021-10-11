import React, { Component } from "react";
import ReactFileReader from 'react-file-reader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class UploadExcel extends Component {
    storeFileHandler;

    constructor(props) {
        super(props);
        this.storeFileHandler = this.props.storeFileHandler.bind(this);
    }

    state = {
        'fileName': ''
    };

    handleFiles = files => {
        var reader = new FileReader();
        let t = this.storeFileHandler;
        reader.onload = function(e) {
            t(reader);
        }
        this.setState({fileName: files[0].name});
        reader.readAsText(files[0]);
        this.storeFileHandler(reader);
    }

    render() {
        return (
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                <>
                    <Button variant="contained">Upload</Button>
                    <Typography variant="subtitle1">{this.state.fileName}</Typography>
                </>
            </ReactFileReader>
        );
    }
}