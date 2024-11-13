/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PreviewDocument from "./PreviewDocument";
import successIcon from "/success.svg";

export default function DownloadCV({ data, onBack }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const docRef = useRef();

  const downloadCV = () => {
    if (!docRef.current) return;

    setTimeout(async () => {
      try {
        const canvas = await html2canvas(docRef.current);
        const imgData = canvas.toDataURL("image/jpeg", 0.85);

        // eslint-disable-next-line new-cap
        const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

        pdf.addImage(imgData, "JPEG", 0, 0, 595.28, 841.89);
        pdf.save("download.pdf");
      } catch (err) {
        setError(err);
      }

      setDownloading(false);
    }, 0);
  };

  useEffect(() => {
    if (downloading) downloadCV();
  }, [docRef, downloading]);

  return (
    <div className="download">
      {!error && <img className="download-img" src={successIcon} alt="" />}

      <div className="download-info">
        <h3 className="download-title">
          {error && "An error occured!"}

          {!error && downloading && "Downloading CV"}
          {!error && !downloading && "Hurray! Your CV is ready to download!"}
        </h3>
        <p className="download-description">
          {error}

          {!error && downloading && "Please wait..."}
          {!error && !downloading && (
            <>
              Download your CV and apply for the job
              <br />
              We wish you good luck!
            </>
          )}
        </p>
      </div>

      {!downloading && (
        <div className="download-btns">
          <button
            type="button"
            className="btn btn-action btn-action-positive"
            onClick={() => setDownloading(true)}
          >
            Download CV
          </button>
          <button
            type="button"
            className="btn btn-action btn-action-neutral"
            onClick={onBack}
          >
            Back
          </button>
        </div>
      )}

      {downloading && (
        <PreviewDocument
          ref={docRef}
          data={data}
          className="preview-download"
        />
      )}
    </div>
  );
}
