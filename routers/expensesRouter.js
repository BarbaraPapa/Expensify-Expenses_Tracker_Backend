import {Router} from "express"
import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router=Router();

import { createExpense,
updateExpense,
deleteExpense,
getAllExpenses,
getExpenseById } from "../controllers/expensesController.js";

router.post("/createExpense",auth,isAdmin,createExpense);
router.patch("/updateExpense/:id",auth,isAdmin,updateExpense);
router.delete("/delteExpense/:id",auth,isAdmin,deleteExpense);
router.get("/getExpenseById/:id",auth,isAdmin,getExpenseById);
router.get("/getAllExpenses",auth,isAdmin,getAllExpenses);
router.get("/getExpensesByUser",auth,isAdmin,getAllExpenses);


export default router