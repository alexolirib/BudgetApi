﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApi.Domain.memory;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace BudgetApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            //services.AddCors();
            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                    builder => {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    });
            });
            
            services.AddSingleton<IRepositoryBudget, RepositoryMemoryBudget>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //importante ser antes do UseMvc
            //app.UseCors(builder => builder.WithOrigins("http://127.0.0.1:5500/")
            //                        .AllowAnyHeader()/*defiinindo a politicia*/
            //);
            app.UseCors("MyPolicy");
            //app.UseMvc();
            app.UseMvcWithDefaultRoute();
        }
    }
}
