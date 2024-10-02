import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultsModal = forwardRef(function ResultsModal({ targetTime, remainingTime, onReset }, ref)
{
    const dialog = useRef();
    const lostCondition = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime/1000.0).toFixed(2)

    /* ------ This now seperates the component from the other component. 
              The value changed here is not reflected directly there.
              This hook accepts the ref from the calling component and defines properties for this component to be used by other components.          
    ------- */
    useImperativeHandle(ref, () => {
        return {
            show() {
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={dialog} className="result-modal">  {/* When we use open we are forcing the dialog to show itself */}
            <h2>You {lostCondition ? 'lost' : 'Won'}!</h2>
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{ formatedRemainingTime } seconds left.</strong></p>
            <form method="dialog" onSubmit={ onReset }>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultsModal;