import React from "react";
import { quotes } from './quotes.js';
import './Quote.scss';

// Display a random text each time I visit / refresh a web page
class Quote extends React.Component {
	state = {
		quotes,
		quote: '"Aujourd\'hui, quoi qu\'il arrive, je choisis d’être heureux."',
		author: '',
        seconds: 0
	}
     
	generateQuote = (e) => {
		const keyArray = Object.keys(quotes)
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
		if(this.state.quote === quotes[randomKey].quote) {
			this.generateQuote()
			return
		}
        this.setState(quotes[randomKey])
	}

    componentDidMount() {
        this.interval = setInterval(() => this.generateQuote(), 15000);
    }
    
    componentWillMount() {
        clearInterval(this.interval);
    }
    
	render() {
		return (
		    <blockquote className="quote">
				<p>
					{this.state.quote}<br/>
                    <span>{this.state.author}</span>
				</p>
			</blockquote>
        );
    }
}

export default Quote;