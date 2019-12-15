import * as React from 'react';
import './Modal.css';

const Modal = React.forwardRef((props: any, ref: any) => {
    const { children, visible, onClose } = props;

    if (!visible) return null;

    return (
        <div className='inner-box' ref={ref}>
            <div className='content'>
                <button className='close-btn' onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
})

export default Modal;
