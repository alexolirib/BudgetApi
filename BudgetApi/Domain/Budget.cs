using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApi.Domain
{
    public class Budget
    {
        public int id { get; set; }
        [Required,MaxLength(4)]
        public String Type { get; set; }
        [Required,MaxLength(80)]
        public String Description { get; set; }
        [Required]
        public Decimal Value { get; set; }
    }
}
