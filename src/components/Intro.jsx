import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import animation from "../assets/animation.json";
import { Player } from "@lottiefiles/react-lottie-player";
const Intro = () => {
    return ( 
        <div className="intro">
        <div>
            <h1>Take Control of <span className="accent">your finances</span></h1>
            <p>Track your expenses, create budgets and get insights on your spending patterns in one place. </p>
            <Form method="post">
                <input type="text" name="userName" placeholder="Enter your name" required aria-label="Enter your name auto" autoComplete="given-name" />
                <input type="hidden" name="_action" value="newUser" /> 
          
            <button type="submit" className="btn btn--dark">
                <span> Create Account</span>
                <UserPlusIcon width={20} />
            </button>
            </Form>
        </div>
        <Player classname  src={animation} loop autoplay />
        </div>
     );
}
 
export default Intro;