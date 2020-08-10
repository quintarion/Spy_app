import React, { Component } from "react";
import {axios} from 'axios';
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
//import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";

// must manually import the stylesheets for each plugin
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Calendar.scss';

//import GetAllContacts from './GetAllContacts';

// IMPORT CONFIG 
const config = require('../../config/config');

class EventCalendar extends Component {
  state = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: "2020-07-30 11:00:00",
        end: "20-07-30 15:00:00",
        backgroundColor: "#839C49",
        id: "99999998"
      },
      {
        title: "My Favorite Murder",
        start: "2020-08-01 09:00:00",
        end: "2020-08-01 12:00:00",
        id: "99999999"
      }
    ],
    events: [
      { title: "Event 1", id: "1" },
      { title: "Event 2", id: "2" },
      { title: "Event 3", id: "3" },
      { title: "Event 4", id: "4" },
      { title: "Event 5", id: "5" }
    ]
  };


  /**
   * adding dragable properties to external events through javascript
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: (eventEl) => {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id
        };
      }
    });
  }

  /**
   * ask for confirmation before dropping the item ;(...BOU
  */
  // eventDrop = (infos) => {
  //   if(!confirm("Etes-vous sûre de vouloir déplacer cet évènement")) {
  //     infos.revert(); //methode [revert()] canceled and return the element to its initial position
  //   }
  // }

  /**
   * when we click on event we are displaying event details
   */
  eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Titre</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Début</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Supprimer l'évènement",
      cancelButtonText: "Fermer"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Supprimer!", "Cet évènement a bien été supprimé.", "Avec succès.");
      }
    });
  };

  render() {

    //get event by a variable
    let evenements = [{
      "title" : "demo",
      "start" : "2020-07-29 11:00:00",
      "end" : "2020-07-29 15:00:00",
      "backgroundColor" : "c6fbf7",
    },
    {
      "title" : "demo",
      "start" : "2020-08-12 11:00:00",
      "end" : "2020-08-12 15:00:00",
      "backgroundColor" : "b18eb4",
    }
  ]

    return (
      <>
      {/* <GetAllContacts/> */}
      <div className="animated fadeIn p-4 demo-app">
  
            <div
              id="external-events"
              style={{
                padding: "10px",
                width: "80%",
                height: "auto",
                maxHeight: "-webkit-fill-available"
              }}
            >
              <p align="center">
                <strong> Events </strong>
              </p>
              {this.state.events.map(event => (
                <div
                  className="fc-event"
                  title={event.title}
                  data={event.id}
                  key={event.id}
                >
                  {event.title}
                </div>
              ))}
            </div>
          
            <div className="demo-app-calendar" id="mycalendartest">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]} //Add components
                //defaultView='dayGridMonth' //Month view by default
                defaultView='list'
                locale='fr'// langage = frensh 
                allDayText= 'Toute la journée'
                //locale= {'fr'}
                //locales= {[ frLocale ]} 
                header={{  //header defined the top informations // 
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                }}
                //change the name of the buttons of the screen
                buttonText={{
                  today: 'aujourd\'hui',
                  month: 'mois',
                  week: 'semaine',
                  day: 'jour',
                  list: 'liste',
                  
                }}
                //implement events in the calendar
                events={this.state.calendarEvents}
                // >> Test OK !!! events= {evenements} 
                //time mark :(...BOU
                nowIndicator={true} // display real time 
                //move calendar items (grad & drop) and edit the appointment
                editable={true}
                //methode eventDrop allow the dorp of the select element
                //eventDrop={this.eventDrop} :(...BOU
                eventDrop= {true}

                //why ??? ;(
                // eventDrop= (infos) => {
                //   console.log(infos),
                //   console.log(infos.event.start),
                //   //add a request for confirmation of the drag and drop
                //   if (!confirm('Etes-vous sûr.e de vouloir déplacer cet évènement ?'))
                //     infos.revert(); //this method 'revert()' cancel the drag & drop
                //   )
                // }
                

                // drop={this.drop}

                //rerenderDelay={10}
                //eventDurationEditable={false}
                
                //droppable={true}
                //ref={this.calendarComponentRef}
                //weekends={this.state.calendarWeekends}
                
                //dateClick={ this.handleDateClick }
                
                //eventReceive={this.eventReceive}
                eventClick={this.eventClick}
                
                //editable= {true}
                //eventStartEditable= {true}
                //eventDurationEditable= {true}
                //droppable= {true}
                selectable={true}
                selectHelper={true}
                eventLimit={true}

                // select= {(start, end)=>{
                //   const title = prompt('Event Content:');
                //   const eventData;
                //   if (title) {
                //     eventData = {
                //       title: title,
                //       start: start,
                //       end: end
                //     }
                //   }
                // }

              />
            </div>
      </div>
      </>
    );
  }
}

export default EventCalendar;