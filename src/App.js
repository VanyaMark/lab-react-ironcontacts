import React, {useState} from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [ContactList, setContactList] = useState([])
  const contactsArr = contacts.slice(0, 5);
  console.log(ContactList);
  console.log('contactsArr: ', contactsArr)

  const addNewContact = () => {
    const index=Math.floor(Math.random() * (contacts.length - 5)) + 5;
    const newContact = contacts[index]
    console.log('newContact: ', newContact)
    const newContactList = [...contactsArr, newContact];
    console.log('newContactList: ', newContactList)
    setContactList(newContactList)
  }


  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addNewContact}>Add Random Contact</button>
      {ContactList.length === 0 ? <table>
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
      </table> : <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {ContactList.map((contact) => (
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
      </table> }  
    </div>
  );
}

export default App;
