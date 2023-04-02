import React from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  console.log(contacts);
  const contactsArr = contacts.slice(0, 5);
  console.log(contactsArr);
  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contactsArr.map((contact) => (
          <tbody key={contact.id}>
            <tr>
              <td>
                <img
                  className="profilePic"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity.toFixed(2)}
              </td>
              {!contact.wonOscar ? <td>🥺</td> : <td>🏆</td>}
              {!contact.wonEmmy ? <td>🥺</td> : <td>🏆</td>}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
