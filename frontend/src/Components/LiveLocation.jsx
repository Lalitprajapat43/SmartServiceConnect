import React, { useEffect } from "react";

export default function LiveLocation({ workerId }) {

  useEffect(() => {
    if (!workerId) return;

    const sendLocation = (lat, lng) => {
      fetch("http://localhost:8080/api/location/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workerId, latitude: lat, longitude: lng }),
      });
    };

    navigator.geolocation.watchPosition(
      (pos) => {
        sendLocation(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => console.log(err),
      { enableHighAccuracy: true }
    );
  }, [workerId]);

  return <p>Tracking Live Location for Worker ID: {workerId}</p>;
}
