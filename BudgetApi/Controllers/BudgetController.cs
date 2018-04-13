using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApi.Domain;
using BudgetApi.Domain.memory;
using BudgetApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace BudgetApi.Controllers
{
    [Route("api/[controller]")]
    public class BudgetController : Controller
    {
        private IRepositoryBudget _budget;

        public BudgetController(IRepositoryBudget budget)
        {
            _budget = budget;
        }

        [Route("api/[controller]")]
        public IActionResult Index(BudgetViewModel budget)
        {
            return View(budget);
        }
        

        //irá vir no body na requisição 
        [HttpPost]
        public IActionResult Create([FromBody] Budget budgets)
        {
            if(budgets== null)
            {
                //erro400 - servidor não pode processar
                return BadRequest();
            }
            //se for válido
            _budget.add(budgets);
            //return CreatedAtRoute("GetBudget", new Budget { id = budgets.id }, budgets);
            return new NoContentResult();
        }

        //retornar um get
        [HttpGet]
        public IEnumerable<Budget> GetApi()
        {
            //quando chamar esse metodo o aspnet transforma em formato de json
            return _budget.GetAllBudget();
        }

        //paramentro no primeiro
        [HttpGet("{id}", Name="GetBudget")]
        public IActionResult GetById(int id)
        {
            var budget = _budget.getById(id);
            if(budget == null)
            {
                return NotFound();
            }

            return new ObjectResult(budget);
        }

        public IActionResult GetTest()
        {
            var budgetVM = new BudgetViewModel
            {
                budgets = _budget.GetAllBudget()
            };
            return View(budgetVM);
        }
    }
}