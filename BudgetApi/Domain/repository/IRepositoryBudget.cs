using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.Domain.memory
{
    public interface IRepositoryBudget
    {
        IEnumerable<Budget> GetAllBudget();

        Budget getById(int id);

        void add(Budget budgets);

        void remove(Budget budget);
    }
}
