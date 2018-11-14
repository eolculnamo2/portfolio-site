import React from 'react'

const CertModal = props => {
    return(
        <div style={{display: props.showModal ? 'flex' : 'none'}} 
             className="cert-modal" 
             onClick={props.toggleCertModal}>
            <img src={props.image} />
        </div>
    )
}

export default CertModal;