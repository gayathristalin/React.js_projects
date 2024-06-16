import React, { useState } from "react";
import "./Qr.css";
const QRCodeGenerator = () => {
  const [image, setImage] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qSize, setQSize] = useState("");
  async function geni() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qSize}x${qSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImage(url);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  }
  function todownload() {
    fetch(image)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <img src={image} className="img"></img>
      {loading && <p>Please Wait...</p>}
      <div className="form">
        <label htmlFor="Links">Enter Link</label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="size">Enter QR code size(eg:150)</label>
        <input
          type="text"
          value={qSize}
          onChange={(e) => setQSize(e.target.value)}
        />
      </div>
      <div className="btn">
        <button className="gen" onClick={geni} disabled={loading}>
          Generate
        </button>
        <button className="download" onClick={todownload}>
          Download
        </button>
      </div>
      <div className="footer">
        <p className="footertext">
          Designed by<a href="#"> Gayathri</a>
        </p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
