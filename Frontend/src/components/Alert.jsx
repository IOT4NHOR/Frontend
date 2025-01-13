import React, { useEffect } from "react";

function Alert({ message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="alert">
      <p>{message}</p>
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
    </div>
  );
}

export default Alert;
