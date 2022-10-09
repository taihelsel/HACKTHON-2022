import "../../../App.css";
import fakeData from "./fakeData";
/* eslint-disable*/

export default function TopTickets() {
  const picture =
    "https://gray-wxix-prod.cdn.arcpublishing.com/resizer/2NvTvCCtnLdZ1PNLQhOdA-NxgB0=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/JZKZOZMSUNFSXB6H4QESGAFD7Y.jpg";

  return (
    <div className="App ticket-container">
      <div className="ticket">
        <div>
          <h2>{fakeData()[0].id1.subject}</h2>
          <p>{fakeData()[0].id1.description}</p>
          <p>{fakeData()[0].id1.score} upvotes</p>
          <p>{fakeData()[0].id1.coords}</p>
        </div>
        <img className="pic" src={picture} alt="pothole" />
      </div>
      <div className="ticket">
        <div>
          <h2>{fakeData()[0].id2.subject}</h2>
          <p>{fakeData()[0].id2.description}</p>
          <p>{fakeData()[0].id2.score} upvotes</p>
          <p>{fakeData()[0].id2.coords}</p>
        </div>
        <img className="pic" src={picture} alt="pothole" />
      </div>
      <div className="ticket">
        <div>
          <h2>{fakeData()[0].id3.subject}</h2>
          <p>{fakeData()[0].id3.description}</p>
          <p>{fakeData()[0].id3.score} upvotes</p>
          <p>{fakeData()[0].id3.coords}</p>
        </div>
        <img className="pic" src={picture} alt="pothole" />
      </div>
    </div>
  );
}
console.log(fakeData()[0].id1);

// const ticket = (ticketId) =>  <div className="ticket">
// <h2>{fakeData()[0].ticketId.subject}</h2>
// <p>{fakeData()[0].ticketId.description}</p>
// <p>{fakeData()[0].ticketId.score}</p>
// <p>{fakeData()[0].ticketId.coords}</p>
// </div>
