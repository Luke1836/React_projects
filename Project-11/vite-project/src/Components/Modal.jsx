import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children })
{
  const dialog = useRef();

  //Changing the functionalities of the ref
  useEffect(() => {
    if(open)
      dialog.current.showModal();
    else
      dialog.current.close();
  }, [open]);

  
  // Displaying the modal
  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;