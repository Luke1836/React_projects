import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref)
{
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={ dialog } className="bg-stone-800 rounded-md p-4 md:p-8 lg:p-12 border-pink-800 border-2 leading-8">
            { children }

            <form method="dialog" className="text-right">
                <button className="text-stone-100 bg-stone-600 px-4 py-1 rounded-md hover:bg-slate-500 mt-4">{ buttonCaption }</button>
            </form>
        </dialog>,
    document.getElementById('modal-show'));
})

export default Modal;