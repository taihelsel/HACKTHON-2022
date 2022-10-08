import { useState } from "react";
import FormInput from "../../Components/FormInput";

function UploadUser() {
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

    setIsPending(true);

    fetch("http://localhost:3000", {
      method: "POST",
      headers: { "Content Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then(() => {
      console.log("new user added");
      setIsPending(false);
    });
  };

  return (
    <div className="create-user">
      <h2>City User</h2>
      <form>
        <FormInput
          type="text"
          value={name}
          updateState={(e) => setName(e.target.value)}
          id="nameInput"
          labelText="Name"
          required
        />
        <FormInput
          type="number"
          value={phoneNumber}
          updateState={(e) => setPhoneNumber(e.target.value)}
          id="phoneInput"
          labelText="Phone Number"
        />
        <FormInput
          type="text"
          required
          value={location}
          updateState={(e) => setLocation(e.target.value)}
          id="locationInput"
          labelText="Location"
        />
        <FormInput
          type="number"
          required
          value={zipcode}
          updateState={(e) => setZipcode(e.target.value)}
          id="zipcodeInput"
          labelText="Zipcode"
        />
        {!isPending && <button type="button">Submit</button>}
        {isPending && (
          <button type="button" disabled>
            Submitting
          </button>
        )}
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <p>{zipcode}</p>
      </form>
    </div>
  );
}

export default UploadUser;
