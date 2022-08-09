import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    const privateClasses = [classes.modal];

    if(visible){
        privateClasses.push(classes.active);
    }
    function exitModal(){
        setVisible(false);

        window.location = "/";
    }


    return (
        <div className={privateClasses.join(' ')} onClick={exitModal}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.exit} onClick={exitModal}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z" fill="black"/>
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;