import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose })
{
  const dialog = useRef();

  //Changing the functionalities of the ref
  useEffect(() => {
    if(open)
      dialog.current.showModal();
    else
      dialog.current.close();
  }, [open]);

  
  // Displaying the modal and onClose handles the closure of the dialog by the 'ESC' key
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={ onClose }>
      { children }
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;