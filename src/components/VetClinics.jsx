import { useState, useEffect } from "react";
import facade from "../util/apiFacade";

function VetClinics() {
  const [clinics, setClinics] = useState([]); // State for klinikdata
  const [error, setError] = useState(null); // State for fejlmeddelelser

  // Hent klinikdata, når komponenten indlæses
  useEffect(() => {
    facade
      .fetchClinics()
      .then((data) => setClinics(data)) // Gem data i state
      .catch((err) =>
        setError("Failed to load clinics. Please try again later.")
      ); // Fejlhåndtering
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : clinics.length === 0 ? (
        <p>Loading clinics...</p>
      ) : (
        <ul>
          {clinics.map((clinic) => (
            <li key={clinic.id}>
              <h3>{clinic.name}</h3>
              <p>Address: {clinic.address}</p>
              <p>Phone: {clinic.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VetClinics;
