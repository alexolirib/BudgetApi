using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.Domain.memory
{
    public class RepositoryMemoryBudget : IRepositoryBudget
    {
        List<Budget> BudgetsList = new List<Budget>
        {
            //new Budget
            //{
            //    id= 1,
            //    Description = "Cachorro",
            //    Type = "inc",
            //    Value = 100

            //},

            //new Budget
            //{
            //    id= 2,
            //    Description = "gato",
            //    Type = "exp",
            //    Value = 200

            //},

            //new Budget
            //{
            //    id= 3,
            //    Description = "Cavalo",
            //    Type = "inc",
            //    Value = 300

            //}
        };

        public void add(Budget budgets)
        {
            if(BudgetsList.Count == 0) {
                budgets.id = 0;
            }
            else
            {
                budgets.id = BudgetsList.Max(B => B.id) + 1;
            }
            
            BudgetsList.Add(budgets);
        }

        public IEnumerable<Budget> GetAllBudget()
        {
            return BudgetsList.OrderBy(b => b.id);
        }

        public Budget getById(int id)
        {
            var allBudget = GetAllBudget();
            return allBudget.Where(bud => bud.id == id).FirstOrDefault();
        }

        public void remove(Budget budget)
        {
            BudgetsList.Remove(budget);            
        }
    }
}
