import React from 'react';

import './AdminContact.scss';

class AdminContact extends React.Component {
   render() {
       return (
           <div>
               <ul>
                   {this.props.contacts.map((contact, index) => 
                       <li key={index}>{contact.name} {contact.lastname} 
                            <ul>
                                <li>{contact.identity}</li>
                                <li>{contact.phone}</li>
                                <li>{contact.mail}</li>
                                <li>{contact.address}</li>
                                <li>{contact.kinsman}</li>
                                <li></li>
                            </ul>
                        </li>
                    
                   )}   
               </ul>
           </div>
       )
   }
}

export default AdminContact;