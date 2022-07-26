import React from 'react';

const FileUploader = ({ files, setFiles }) => {
    const handleDrop = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFiles([file]);
        // ajax call
    };
    return (
        <div>
            <input type="file" onDrop={handleDrop}></input>
            <label>Upload</label>
        </div>
    );
};

export default FileUploader;
