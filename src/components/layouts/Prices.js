import React from "react";
import './Prices.scss';

const Prices = ({cells, title}) => {

    // componentDidMount(){ 
    //     window.addEventListener("load", function(event) {
    //     document.querySelector(".move-left").classList.add("load");
    //     });
    // }
    return  (
        <aside className="price" id="move-left">
                    <h2>{title.title}</h2><br/>
                        <div className="price-container">  
                            
                            <table className="price-container_list">
                                <caption>Coût des consultations</caption>
                                    <tr>
                                        <th>Séances</th>
                                        <th>Durée</th>
                                        <th>Tarif</th>
                                    </tr> 
                                    {cells.map((cell, index) => // >> Map only few cells in the 'prices' table
                                    <tr key={index}>
                                        <td>{cell.name}</td>
                                        <td>{cell.duration}</td>
                                        <td>{cell.price}</td>
                                    </tr>)}
                            </table>
                            
                            <table className="price-container_notice">
                                    <caption>Modalités de paiement</caption>
                                    <tr>
                                        <td><i class="fas fa-money-check payment" aria-hidden="true"><span className="paid">&nbsp;&nbsp;chèque</span></i></td>
                                        <td><i class="fas fa-coins" aria-hidden="true"><span className="paid">&nbsp;&nbsp;espèce</span></i></td>
                                        <td><i class="fab fa-cc-paypal" aria-hidden="true"><span className="paid">&nbsp;&nbsp;paypal</span></i></td>
                                    </tr>
                                    <tr className="price-container_notice-text">
                                        <td colspan="3"> 
                                            <ul>
                                                <li><i><span className="line">Règlement des séances :</span><br/>
                                                Les séances se règlent au début de la séance par chèque ou en espèce.<br/>
                                                Toute séance programmée, lorsqu’elle n'est pas annulée au moins 48h avant la date prévue initialement, est due.<br/>
                                                <span className="line">Remboursement et prise en charge :</span><br/>
                                                Les séances effectuées au cabinet d’un Psychologue Clinicien ne sont, actuellement,  pas prises en charge par la caisse d’assurance maladie de l’Hérault.<br/>
                                                Certaines Mutuelles proposent un forfait annuel pour participer remboursement  au coût des séances, (renseignez vous en appelant votre mutuelle et je vous fournirai, alors, la facture des séances effectuées).<br/>
                                                {/* Le prix d’une psychothérapie est un point a éclaircir dès le début du suivi avec votre thérapeute.<br/>
                                                Le psychologue libéral est un psychologue diplômé qui exerce à son compte, au sein d’un cabinet.<br/>
                                                Le tarif d’un psychologue libéral est arbitraire. C’est-à-dire qu’il fixe lui-même ses tarifs.</i> */}
                                                Lorsque la consultation a lieu dans un Centre Médical agréé hôpital, (Centre médico-psycho-pédagogique (CMPP), Centre médico-psychologique (CMP)), la sécurité sociale peut prendre en charge la séance.</i>
                                                </li><br/>
                                                <li><i>&#42; Les prix indiqués sont toutes taxes comprises (TTC).</i></li>
                                            </ul>
                                        </td>
                                    </tr>
                            </table>
                          
                        </div>
                        
                        {/* </tr>
                </table> */}
            {/* </div>   */}
        </aside>
    )
}

export default Prices;