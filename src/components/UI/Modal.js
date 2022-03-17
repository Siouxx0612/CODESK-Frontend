import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from '../UI/Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

// handleKeyDown(event){
//     if (event.keyCode === 27) {
//         this.setState({
//         fireRedirectProjects: true
//         })
//     }
    
// }

const ModalOverlays = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
};


const portalElement = document.getElementById("overlays");
//Portal

const Modal = props => {
return (
    <Fragment>
        {/* <Backdrop />
        <ModalOverlays /> */}
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </Fragment>
)

};

export default Modal;
