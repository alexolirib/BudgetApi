using BudgetApi.Data;
using BudgetApi.Domain.memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.Domain.repository.db
{
    public class RepositoryDbBudget : IRepositoryBudget
    {
        private BudgetDbContext _context;

        public RepositoryDbBudget(BudgetDbContext context)
        {
            _context = context;
        }

        public void add(Budget budgets)
        {
            _context.Budget.Add(budgets);
            _context.SaveChanges();
        }

        public IEnumerable<Budget> GetAllBudget()
        {
            return _context.Budget.OrderBy(b => b.id);
        }

        public Budget getById(int id)
        {
            return _context.Budget.FirstOrDefault(b => b.id == id);
        }

        public void remove(Budget budget)
        {
            _context.Remove(budget);
            _context.SaveChanges();
        }
    }
}
