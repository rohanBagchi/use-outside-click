import { useEffect } from 'react';

interface useOutsideClickHandlerProps {
    node: any, // reference to top level node / element in the collapsible component.
    isOpen: boolean,
    onOutsideClick: (data?: any) => void,
    onInsideClick?: (data?: any) => void,
}

const noop = () => null;

const useOutsideClickHandler = ({ node, onOutsideClick, onInsideClick, isOpen }: useOutsideClickHandlerProps) => {
    onInsideClick = onInsideClick || noop;

    const handleClick = (e: any) => {
        const current: any = (!!node && !!node.current) ? node.current : null;
        if (!current) return;

        if (current.contains(e.target)) {
            // inside click
            onInsideClick && onInsideClick();
            return;
        }
        // outside click
        onOutsideClick();
    };

    const attachDocumentEventListener = () => document.addEventListener("mousedown", handleClick);
    const removeDocumentEventListener = () => document.removeEventListener("mousedown", handleClick);

    useEffect(() => {
        if (isOpen) {
            attachDocumentEventListener();
        } else {
            removeDocumentEventListener();
        }

        return () => {
            removeDocumentEventListener();
        };
    }, [isOpen]);
 };

export default useOutsideClickHandler;
