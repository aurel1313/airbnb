import { Links } from '../Links/Links';
import './Modal.scss';
import React from 'react';
export const Modal = (props) => {
 
    return (
        <div tabIndex="-1"  >
            <div className="modal-dialog rounded-start"  >
                <div className="modal-content modal-sm" >
                    <div className="modal-header">
                        <p>Partir ou,n'importe quand</p>
                    </div> 
                    <div className="modal-body">
                        <div className=''>
                        <Links to="/" text="je suis flexible"/>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    )
}