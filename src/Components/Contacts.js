import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John",
          email: "John@gmail.com",
          phone: "0955555555"
        },
        {
          id: 2,
          name: "koe",
          email: "koe@gmail.com",
          phone: "0966666666"
        },
        {
          id: 3,
          name: "Bella",
          email: "Bella@gmail.com",
          phone: "0777777777"
        }
      ]
    };
  }
  deleteContact= () =>{
    console.log('this is delete Contact')
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact 
          key={contact.id} 
          contact={contact}
          deleteClickHandler={this.deleteContact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
