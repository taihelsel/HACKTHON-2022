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
        <div className="form-input-row"><h1>Name</h1></div>
        <div className="form-input-row">
          <FormInput
            type="text"
            value={name}
            updateState={(e) => setName(e.target.value)}
            id="nameInput"
            required
          />
        </div>
        <div className="form-input-row"><h1>Description</h1></div>
        <div className="form-input-row">
          <FormInput
            type="text"
            value={phoneNumber}
            updateState={(e) => setPhoneNumber(e.target.value)}
            id="DescriptionInput"
          />
        </div>
        <div className="form-input-row-location">
          <GeoLocation setLocation={setLocation} location={location} />
        </div>
        <UploadImage />
      </form>
    </section>
  );
}
