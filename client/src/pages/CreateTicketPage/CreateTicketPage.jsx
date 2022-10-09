import { useState } from "react";
import "./CreateTicketPage.css";
import FormInput from "../../Components/FormInput";
import { UploadImage, GeoLocation } from "./components";

export default function CreateTicketPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState({ type: "unset", inputValue: "", coords: {} });
  const [isPending, setIsPending] = useState(false);
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
        <UploadImage />
      </form>
    </section>
  );
}
