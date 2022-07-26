import React, { useState } from 'react';
import FileUploader from './components/FileUploader';

function App() {
    const [files, setFiles] = useState([]);
    return <FileUploader files={files} setFiles={setFiles} />;
}
export default App;
