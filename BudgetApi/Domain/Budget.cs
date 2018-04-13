using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.Domain
{
    public class Budget
    {
        public int id { get; set; }
        public String Type { get; set; }
        public String Description { get; set; }
        public Decimal Value { get; set; }
    }
}
