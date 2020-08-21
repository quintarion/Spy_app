import React from 'react';
import './Modal.scss';

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
                <div className="btn-security-save2">
                    <button className="btn-save-modif" onClick={this.openModalSecuritySave}>{this.props.name}</button>
                </div>
                <div className={this.state.isModalSaveSecurity ? 'modal_overlay' : null }>
                    <div role="alert dialog"  className="container-security-save" role="dialog">
                        <div className={this.state.isModalSaveSecurity ? 'display-block-save' : 'display-none-save'}>
                            <div className="modal-security-save-bloc-title">
                                <div>
                                    <h2 className="security-modal-save" aria-labelledby="alert box-title">{this.props.title}</h2>
                                </div>
                            </div>
                                <div className="container-open-security-save">
                                    <div className="text-modal-security-save">
                                        {this.props.content}
                                    </div>
                                </div>
                                <menu className="container-open-security-save">
                                    <button onClick={this.closeModalSecuritySave} className="btn-modal-close-security-save">J'accepte</button>
                                </menu>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default ModalSaveSecurity