import React, { useState } from "react";
import "./uploadFile.scss";
import { useFormikContext } from "formik";

interface UploadFileProps {
    name: string; // Prop for Formik field name
  }
  
  const UploadFile: React.FC<UploadFileProps> = ({ name }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("0 KB");
  const [progress, setProgress] = useState<number>(0);

  const { setFieldValue, errors, touched } = useFormikContext<any>();

  const imagesTypes = ["jpeg", "png", "svg", "gif"];

  const formatFileSize = (size: number): string => {
    return size > 1024 * 1024
      ? `${(size / (1024 * 1024)).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;
  };

  const handleFileUpload = (file: File) => {
    if (!file) return;
    // console.log("file", file);
    const fileType = file.type.split("/")[1];
    if (!imagesTypes.includes(fileType)) {
      alert("Please upload a valid image file.");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      alert("File size exceeds 3MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
      setFileName(file.name);
      setFileType(fileType);
      setFileSize(formatFileSize(file.size));
      setFieldValue(name, file); // Update Formik field value
      simulateProgress();
    };
    reader.readAsDataURL(file);
  };

  const simulateProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]; // Access the first file
      // console.log("File selected:", file);
      handleFileUpload(file);
    } else {
      // console.log("No file selected.");
    }
  };

  const handleDelete = () => {
    setPreviewImage(null);
    setFileName("");
    setFileType("");
    setFileSize("0 KB");
    setProgress(0);
    setFieldValue(name, null); // Clear Formik field value
  };

  return (
    <div id="uploadArea" className="upload-area">
      <div className="upload-area__header">
        <h1 className="upload-area__title">Upload your file</h1>
        <p className="upload-area__paragraph">
          File should be an image Like{" "}
          <span className="upload-area__tooltip-data">
            {imagesTypes.join(", .")}
          </span>
        </p>
      </div>

      <div
        id="dropZoon"
        className={`upload-area__drop-zoon drop-zoon ${
          previewImage ? "drop-zoon--Uploaded" : ""
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        // onClick={() => document.getElementById("fileInput")?.click()}
        onClick={() => document.getElementById(`${name}`)?.click()}
      >
        {!previewImage ? (
          <>
            <span className="drop-zoon__icon">
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </span>
            <p className="drop-zoon__paragraph">
              Drop your file here or Click to browse
            </p>
          </>
        ) : (
          <>
            <img
              src={previewImage}
              alt="Preview"
              className="drop-zoon__preview-image"
            />
          </>
        )}
        <input
          type="file"
          id={`${name}`} // Unique ID
          className="drop-zoon__file-input"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>

      {fileName && (
        <div
          id="fileDetails"
          className="upload-area__file-details file-details file-details--open"
        >
          <h3 className="file-details__title">Uploaded File</h3>

          <div id="uploadedFile" className="uploaded-file uploaded-file--open">
            <div className="uploaded-file__icon-container">
              <i
                className="bx bxs-file-blank uploaded-file__icon"
                style={{ fontSize: "3rem", marginTop: "2rem" }}
              ></i>
              {/* <span className="uploaded-file__icon-text">{fileType}</span> */}
            </div>
            <div
              id="uploadedFileInfo"
              className="uploaded-file__info uploaded-file__info--active"
            >
              <div className="uploaded-file__details">
                <span className="uploaded-file__name">{fileName}</span>
                <span className="uploaded-file__size">{fileSize}</span>
                <span className="uploaded-file__progress">{progress}%</span>
              </div>
              <div className="drop-zoon__progress">
                <div
                  className="drop-zoon__progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div>
              <button
                className="uploaded-file__delete-button"
                onClick={handleDelete}
                aria-label="Delete uploaded file"
              >
                <i
                  className="fa-solid fa-trash-can"
                  style={{ fontSize: "1.8rem", marginTop: "3rem" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFile;