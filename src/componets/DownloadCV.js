import React from 'react';
import '../css/DownloadCV.css';

const DownloadCV = () => {
  const handleDownload = () => {
    const pdfFilePath = '/assets/resumepdf/AmanGupta_Resume.pdf';
    const previewUrl = process.env.PUBLIC_URL + pdfFilePath;
    window.open(previewUrl, '_blank');

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfFilePath;
    downloadLink.download = 'AmanGuptaCV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} className='downloadcv-btn'>
      DOWNLOAD CV
    </button>
  );
};

export default DownloadCV;
