import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { FileList } from './FileList';
import { FileTypeIcons } from './FileTypeIcons';
import { AddFileButton } from './AddFileButton';
import { Toaster, toast } from 'react-hot-toast';
import AWS from 'aws-sdk';
export function FileUploadCard() {
  const [files, setFiles] = useState([]);
  const [fileName , saveFileName] = useState(null);
  


  const sendFileData = async (fileName) => {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName, // Send the file name in the body
      }),
    };
  
    try {
      const res = await fetch(
        'https://secondmemoryai-default-rtdb.firebaseio.com/pdfDocuments.json',  ///Fetches uploaded file's Data from firebase
        options
      );
  
      if (res.ok) {
        console.log("File name successfully saved to DB");
        toast.success("File Uploaded to your Knowledge Base")
      } else {
        console.error("Error occurred while saving file name to DB", res.statusText);
        toast.error("Error occurred while saving file")
      }
    } catch (error) {
      console.error("Network error while saving file name to DB", error);
      toast.error("Network error while saving file")
    }
  };




  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        setFiles([...files, file]);
        saveFileName(file.name); // Update the state with the file name
        alert(`Uploaded file: ${file.name}`);
        sendFileData(file.name); // Pass the file name to the `sendFileData` function
      } else {
        alert("Please upload a valid PDF file.");
      }
    }
  };


//function to save pdf files to aws s3
// const uploadFiletoAWSs3 = async () => {
//   const S3_BUCKET = "bucket-name";
//   const REGION = "region";

//   AWS.config.update({
//     accessKeyId: "youraccesskeyhere",
//     secretAccessKey: "yoursecretaccesskeyhere",
//   });
//   const s3 = new AWS.S3({
//     params: { Bucket: S3_BUCKET },
//     region: REGION,
//   });

//   const params = {
//     Bucket: S3_BUCKET,
//     Key: file.name,
//     Body: file,
//   };

//   var upload = s3
//     .putObject(params)
//     .on("httpUploadProgress", (evt) => {
//       console.log(
//         "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
//       );
//     })
//     .promise();

//   await upload.then((err, data) => {
//     console.log(err);
//     alert("File uploaded successfully.");
//   });
// };


  return (
    <div className="p-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#D9D9D9"
          >
            <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
          <h2 className="text-lg font-medium text-white">Upload Files</h2>
        </div>
        <button className="text-gray-400 hover:text-cyan-400 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>

      <FileList files={files} />

      <div className="flex items-center justify-between">
        <FileTypeIcons />
        <AddFileButton onFileSelect={handleFileSelect} />
      </div>

      {/* Add a hidden file input to trigger the upload */}
      <input
        type="file"
        id="file-upload"
        accept=".pdf"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
}
