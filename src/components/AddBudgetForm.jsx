import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Form, useFetcher } from "react-router-dom";
import { useRef, useEffect } from "react";
const AddBudgetForm = () => {

    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"
  
    const formRef = useRef();
    const focusRef = useRef();
  
    useEffect(() => {
      if (!isSubmitting) {
        formRef.current.reset()
        focusRef.current.focus()
      }
    }, [isSubmitting])

    return ( 
        <div className="form-wrapper">
            <h2 className="h3">Add Budget</h2>
        
    <fetcher.Form method="post"
    className="grid-sm"
    ref={formRef}
    >
    <div className="grid-xs">
        <label htmlFor="budget">Budget Name</label>
        <input type="text" name="budget" id="budget" placeholder="e.g. Rent" required ref={focusRef} />
    </div>
    <div className="grid-xs">
        <label htmlFor="amount">Amount</label>
        <input type="number" step={"0.01"} name="amount" id="amount" placeholder="e.g. $1000" inputMode="decimal" required />
    </div>
    <input type="hidden" name="_action" value="createBudget" />
    <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
    {
            isSubmitting ? <span>Submitting…</span> : (
              <>
                <span>Create budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )
          }
    </button>
    </fetcher.Form>
    </div>
     );
}
 
export default AddBudgetForm;
