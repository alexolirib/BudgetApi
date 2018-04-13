using BudgetApi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.ViewModels
{
    public class BudgetViewModel
    {

        public IEnumerable<Budget> budgets { get; set; }
    }
}
