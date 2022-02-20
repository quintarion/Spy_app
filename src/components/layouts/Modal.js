import React from 'react';
import deal from '../../assets/icons/deal.png';
import './Modal.scss';

// props => footer component

class ModalSaveSecurity extends React.Component {
    state = {
        isModalSaveSecurity: false,
    }

    openModalSecuritySave = () => {
        this.setState({ isModalSaveSecurity: true })

    }
    closeModalSecuritySave = () => {
        this.setState({ isModalSaveSecurity: false })
    }

    render() {
        return (
     
            <div>
                <menu className="btn-security-save2">
                    <i className="btn-save-modif" onClick={this.openModalSecuritySave}>{this.props.name}</i>
                </menu>
                <div className={this.state.isModalSaveSecurity ? 'modal_overlay' : null }>
                    <div role="alert dialog"  className="container-security-save" role="dialog">
                        <div className={this.state.isModalSaveSecurity ? 'display-block-save' : 'display-none-save'}>
                            <div className="modal-security-save-bloc-title">
                                <h2 className="security-modal-save" aria-labelledby="alert box-title">{this.props.title}</h2>
                            </div>
                                <div className="container-open-security-save scroller">
                                    <div className="text-modal-security-save">
                                        {this.props.content}
                                    </div>
                                </div>
                                <menu className="container-open-security-save">
                                    <button onClick={this.closeModalSecuritySave} className="btn-modal-close-security-save"><img src={deal} alt=""/>J'accepte</button> 
                                </menu>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default ModalSaveSecurity