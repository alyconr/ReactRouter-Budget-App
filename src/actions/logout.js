import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function logoutAction() {
  //delete the user from local storage
  deleteItem({ key: "userName" });

  deleteItem({ key: "budgets" });

  deleteItem({ key: "expenses" });

  toast.warn("You have been logged out", {
   theme: "dark",
   icon: "💰"
  }
  );

  //return redirect ("/");
  return redirect("/");
}
