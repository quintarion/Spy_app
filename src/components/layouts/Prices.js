import React, {Component} from "react";
import './Prices.scss';

class Prices extends Component {

    // componentDidMount(){ 
    //     window.addEventListener("load", function(event) {
    //     document.querySelector(".move-left").classList.add("load");
    //     });
    // }

    render() {
        return  (
            <aside className="price" id="move-left">
                <div className="price_list">
                    <table className="price_table">
                        <tr>
                            <table>
                            <caption>Coût des consultations</caption>
                                <tr>
                                    <th>Séances</th>
                                    <th>Durée</th>
                                    <th>Tarif</th>
                                </tr>
                                
                                {this.props.cells.map((cell, index) => // Map only few cells in the 'prices' table
                                <tr key={index}>
                                    <td>{cell.name}</td>
                                    <td>{cell.duration}</td>
                                    <td>{cell.price}</td>
                                </tr>)}
                            </table>
                            {/* <hr/>  */}
                            <table>
                                <caption>Paiment</caption>
                                <tr>
                                    <td><i class="fas fa-money-check">&nbsp;&nbsp;par chèque</i></td>
                                    <td><i class="fas fa-coins">&nbsp;&nbsp;en espèce</i></td>
                                </tr>
                                <tr>
                                    <td colspan="2"> 
                                        <ul>
                                            <li><i>&#42; Le prix indiqué est toutes taxes comprises (TTC).</i></li><br/>
                                            <li><i><span>Règlement des séances :</span><br/>
                                            Les séances se règlent au début de la séance par chèque ou en espèce.<br/>
                                            Toute séance programmée, lorsqu’elle n'est pas annulée au moins 48h avant la date prévue initialement, est due.<br/><br/>
                                            <span>Remboursement et prise en charge :</span><br/>
                                            Les séances effectuées au cabinet d’un Psychologue Clinicien ne sont, actuellement,  pas prises en charge par la caisse d’assurance maladie de l’Hérault.<br/>
                                            Certaines Mutuelles proposent un forfait annuel pour participer remboursement  au coût des séances, (renseignez vous en appelant votre mutuelle et je vous fournirai, alors, la facture des séances effectuées).<br/>
                                            {/* Le prix d’une psychothérapie est un point a éclaircir dès le début du suivi avec votre thérapeute.<br/>
                                            Le psychologue libéral est un psychologue diplômé qui exerce à son compte, au sein d’un cabinet.<br/>
                                            Le tarif d’un psychologue libéral est arbitraire. C’est-à-dire qu’il fixe lui-même ses tarifs.</i> */}
                                            Lorsque la consultation a lieu dans un Centre Médical agréé hôpital, (CMPP, CMP), la sécurité sociale peut prendre en charge la séance.</i>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </tr>
                    </table>
                </div>
                
            </aside>
        )
    }
}

export default Prices;