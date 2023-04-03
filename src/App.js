import React, {useState} from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const contactsArr = contacts.slice(0, 5);
  const [ContactList, setContactList] = useState(contactsArr)
  console.log('ContactList ', ContactList);

  const addNewContact = () => {
    const index=Math.floor(Math.random() * (contacts.length - 5)) + 5;
    const newContact = contacts[index]
    console.log('newContact: ', newContact)
    const newContactList = [...ContactList, newContact];
    console.log('newContactList: ', newContactList)
    setContactList(newContactList)
  }

  const sortByPopularity = () => {
      const sortedByPopularity = ContactList.sort(function(c1, c2) {
        if (c1.popularity < c2.popularity) {
          return 1;
        } else {return -1}
      })
      console.log('sorted: ', sortedByPopularity)
      setContactList(sortedByPopularity)
      console.log('ContactList sorted after setContactList: ', ContactList)
    }

    const sortByName = () => {
      const sortedByName = ContactList.sort((c1, c2) => c1.name.localeCompare(c2.name)) 
      console.log('sortedByName: ', sortedByName)
      setContactList(sortedByName)
      }

    const deleteContact = contactId => {
      console.log("contactId placeholder: ", contactId)
      const contactsAfterDeleting = ContactList.filter(contact => {
        console.log('contact.id ', contact.id)
        return contact.id !== contactId;
      })
      console.log('afterDeleting: ', contactsAfterDeleting)
      setContactList(contactsAfterDeleting);
    }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button-div">
      <button onClick={addNewContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      </div>
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
              <td><button onClick={() =>deleteContact(contact.id)}>delete</button></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
