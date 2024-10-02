import { forwardRef } from "react";

const ResultsModal = forwardRef(function ResultsModal({ result, targetTime }, ref)
{
    return (
        <dialog ref={ref} className="result-modal">  {/* When we use open we are forcing the dialog to show itself */}
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultsModal;