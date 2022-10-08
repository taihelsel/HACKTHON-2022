import { useState } from "react";
import "./CreateTicketPage.css";
import FormInput from "../../Components/FormInput";
import UploadButton from "./components/UploadButton";

export default function CreateTicketPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault()
    const userInfo = {
      name,
      phoneNumber,
      zipcode,
      location,
    };
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
          <FormInput
            type="text"
            required
            value={location}
            updateState={(e) => setLocation(e.target.value)}
            id="locationInput"
            labelText="Location"
          />
        </div>
        <div className="form-input-row">
          <FormInput
            type="number"
            required
            value={zipcode}
            updateState={(e) => setZipcode(e.target.value)}
            id="zipcodeInput"
            labelText="Zipcode"
          />
        </div>
        <UploadButton />
      </form>
    </section>
  );
}
