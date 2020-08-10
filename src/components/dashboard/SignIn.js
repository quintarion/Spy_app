import React from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {NavLink} from 'react-router-dom';
import './SignIn.scss';

class SignIn extends React.Component {
    state = {
        redirect: false
    }

   handelClick = () => {
    this.setState({redirect: true});
   }

    render() {
        // Redirect
        const {redirect} = this.state

        return (
            <div className="signin">
                <article className="half">
                    <h1>Le coin de l'administrateur...</h1>
                    
                        <div className="tabs">
                            <span className="tab signin active"><Link to="#signin">Sign in</Link></span>
                            <span className="tab signup"><Link to="#signup">Sign up</Link></span>
                            <span className="tab"><NavLink to="/">Retour</NavLink></span>
                        </div>

                        <div className="content">
                        {/* Check to redirect the user */}
                        {!redirect ?
                            (<div className="cont signin-cont" id="signin"> 
                                <form>
                                    <input type="email" name="email" id="email" className="inpt" required="required" placeholder="Adresse électronique"/>
                                    {/* <label for="email">Votre adresse électronique</label> */}
                                    <input type="password" name="password" id="password" className="inpt" required="required" placeholder="Mot de passe"/>
                                    {/* <label forHtml="password">Votre mot de passe</label> */}
                                    <input type="checkbox" id="remember" className="checkbox" checked/>
                                    <label forHtml="remember">Se souvenir de moi</label>
                                    <div className="submit-wrap">
                                        <input type="submit" value="Se connecter" className="submit" onClick={this.handelClick}/>
                                        <a href="#" className="more">Mot de passe oublié ?</a>
                                    </div>
                                </form>
                            </div>)
                            
                            : 
                           
                            (<Redirect to='/dashboard/home'/>)} 

                            <div className="cont signup-cont" id="signup">
                                <form>
                                    <input type="name" name="name" id="name" className="inpt" required="required" placeholder="Prénom"/>
                                    {/* <label forHtml="name">Votre prénom</label> */}
                                    <input type="email" name="email" id="email" className="inpt" required="required" placeholder="Adresse électronique"/>
                                    {/* <label for="email">Votre adresse électronique</label> */}
                                    <input type="password" nameName="password" id="password" class="inpt" required="required" placeholder="Mot de passe"/>
                                    {/* <label forHtml="password">Votre mot de passe</label> */}
                                    <div className="submit-wrap">
                                        <input type="submit" value="S'inscrire" className="submit"/>
                                        <a href="#" className="more">Terms and conditions</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                </article>
            </div>
        )
    }
}

export default SignIn;