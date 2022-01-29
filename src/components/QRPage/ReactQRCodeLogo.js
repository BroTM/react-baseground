import { React, useState } from "react";
import { QRCode } from "react-qrcode-logo";

function QRPage() {
  const [qrvalue, setQrvalue] = useState("");
  var css = {
    logoImage: "https://pvcarrental.com/images/logo/favicon-196.png",
  };
  const handleChange = (event) => {
    setQrvalue(event.target.value);
  };

  return (
    <>
      <input
        name="qr_value"
        value={qrvalue}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <QRCode value={qrvalue} {...css} />
    </>
  );
}

export default QRPage;
