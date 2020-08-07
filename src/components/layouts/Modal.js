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

            <>
                <div>
                    <div>
                        <div className="btn-security-save2">
                            <button className="btn-save-modif" onClick={this.openModalSecuritySave}>{this.props.name}</button>
                        </div>
                        <div className="container-security-save">
                            <div className={this.state.isModalSaveSecurity ? 'display-block-save' : 'display-none-save'}>

                                <div className="modal-security-save-bloc-title">
                                    <div>
                                        <h2 className="security-modal-save">{this.props.title}</h2>
                                    </div>

                                </div>
                                <div className="container-open-security-save">

                                    <div className="text-modal-security-save">
                                        {this.props.content}
                                    </div>

                                </div>


                                <div className="container-open-security-save">

                                    <button onClick={this.closeModalSecuritySave} className="btn-modal-close-security-save">J'accepte</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalSaveSecurity