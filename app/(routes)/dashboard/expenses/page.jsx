"use client"
import { db } from "@/utils/dbConfig";
import React, { useEffect, useState } from "react";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import ExpenseListTable from "./_components/ExpenseListTable";
import { useUser } from "@clerk/nextjs";


function ExpensesTab() {
  const {user}=useUser();
  const [expensesList,setExpensesList]=useState([]);
    const [BudgetList,setBudgetList]=useState([]);
  
      useEffect (()=>{
        user&&getBudgetList();
      },[user])
    
      const getBudgetList=async()=>{
        const result=await db.select({
          ...getTableColumns(Budgets),
  
          totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql `count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
        .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
        .where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id))
        ;
    
        setBudgetList(result);
        getAllExpenses();
  
      }

  const getAllExpenses=async()=>{
        const result=await db.select({
          id:Expenses.id,
          name:Expenses.name,
          amount:Expenses.amount,
          createdAt:Expenses.createdAt
        }).from(Budgets)
        .rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
        .where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));
        setExpensesList(result);
   
      }

  return (
    <div className="p-5">
      <ExpenseListTable
        expensesList={expensesList}
        refreshData={()=>getBudgetList()}
        />
    </div>
  )
}

export default ExpensesTab
