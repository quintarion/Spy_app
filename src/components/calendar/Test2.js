import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interaction, { Draggable } from '@fullcalendar/interaction';
import list from '@fullcalendar/list';

//Json array [{}]
let evenements = [{
    "title" : "Demo",
    "start" : "2020-11-08 09:00:00", //format iso type SQL YYYY-MM-DD HH:MM:SS
    "end" : "2020-11-08 11:00:00",
    "backgroundColor" : "#839c49",
    "borderColor" : "#839c49"
}] 

class Test2 extends React.Component {

    state = {
        calendarWeekends: true,
        calendarEvents: [{ title: "Event 1", start: new Date() }],
        externalEvents: [
          { title: "Event 2", start: new Date() },
          { title: "Event 3", start: new Date() }
        ]
    };

    componentDidMount() {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
          itemSelector: ".fc-event",
          eventData: function(eventEl) {
            let title = eventEl.getAttribute("title");
            let id = eventEl.getAttribute("id");
            return {
              title: title,
              id: id
            };
          }
        });
    }

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
    
    render() {
    return(
        <>

        {/* external events */}
        <div className="demo-app">
            <div
            id="external-events"
            style={{
                display: "inline-block",
                width: "50%"
            }}
            >
            <h4>External event</h4>
            {this.state.externalEvents.map(event => {
                return (
                <div
                    className="fc-event"
                    title={event.title}
                    id={event.id}
                    key={event.id}
                    style={{
                    marginBottom: "2px",
                    marginRight: "10px",
                    padding: "3px",
                    cursor: "pointer"
                    }}
                >
                    {event.title}
                </div>
                );
            })}
            </div>
        </div>
        {/* end external events */}

        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, list, interaction]}
            //defaultView= 'dayGridDay' //'dayGridMonth'
            initialView='timeGridWeek' //'dayGridMonth' 'dayGridDay' 'dayGridWeek' 'timeGridDay'
            weekends={true}
            locale="fr" //change to local hour
            headerToolbar={{
                start: 'prev,next today', //semicolon render "side by side" or an area render "empty" between the two elements // or 'left'
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,list' //or 'right'
            }} //l'option header prend un objet {} en paramètre - 3 zones  LEFT - CENTER - RIGHT
            allDaySlot={true} //Determines if the “all-day” slot is displayed at the top of the calendar
            buttonText={{
                today:'Aujourd\'hui',
                month:'Mois',
                week:'Semaine',
                day:'Jour',
                list:'Liste'
            }}
            allDayText="Jour"
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            //events={evenements}
            nowIndicator={true}
            editable={true} //allows you to modify existing events
            
            eventDrop= {(info) => { 
                console.log('le nouvel évènement commencera à '+info.event.start)
                alert('"'+info.event.title+'"' + " a été déplacé au " + info.event.start.toISOString());
            
                if (!window.confirm("Etes-vous sûr.e de vouloir déplacer cet évènement ?")) {
                  info.revert(); // method 'revert' to cancel
                }
              }
            }

            //Triggered when resizing stops and the event has changed in duration
            enventResize= {(info) => {
                console.log(info.event.end)
                alert(info.event.title + " end is now " + info.event.end.toISOString());

                if (!window.confirm("is this okay?")) {
                  info.revert(); // method 'revert' to cancel
                }
            }}

            //When u select some space in the calendar do the following
        
        />
        </>
    )}
}

export default Test2;