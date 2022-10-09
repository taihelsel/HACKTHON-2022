import { useState } from "react";
import "./CreateTicketPage.css";
import FormInput from "../../Components/FormInput";
import { UploadImage, GeoLocation } from "./components";
import { addressToGeo } from "../../API";

export default function CreateTicketPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [complaint, setComplaint] = useState("");
  const [location, setLocation] = useState({
    type: "unset",
    inputValue: "",
    coords: {},
  });
  const submitTicket = () => {
    let { coords } = location;
    if (location.type !== "geo") {
      addressToGeo(({ lat, long }) => {
        coords = { lat, long };
      });
    }
  };
  return (
    <section id="CreateTicket">
      <h2>City User</h2>
      <form className="create-ticket-form">
        <div className="form-input-row">
          <FormInput
            type="text"
            value={name}
            updateState={(e) => setName(e.target.value)}
            id="nameInput"
            labelText="Name"
            required
          />
        </div>
        <div className="form-input-row">
          <FormInput
            type="number"
            value={phoneNumber}
            updateState={(e) => setPhoneNumber(e.target.value)}
            id="phoneInput"
            labelText="Phone Number"
          />
        </div>
        <div className="form-input-row">
          <GeoLocation setLocation={setLocation} location={location} />
        </div>
        <div className="form-input-row">
          <FormInput
            type="text"
            value={complaint}
            updateState={(e) => setName(e.target.value)}
            id="complaintInput"
            labelText="complaint"
            required
          />
        </div>
        <UploadImage />
        <button type="button" id="create-ticket-button" onClick={submitTicket}>
          Create Ticket
        </button>
      </form>
    </section>
  );
}
