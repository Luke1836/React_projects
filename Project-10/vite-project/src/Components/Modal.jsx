import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref)
{
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            show() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={ dialog }>
            { children }

            <form method="dialog">
                <button className="bg-stone-800">{ buttonCaption }</button>
            </form>
        </dialog>,
    document.getElementById('modal-show'));
})

export default Modal;