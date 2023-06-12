using System;
using ForrestSport.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace ForrestSport
{
	public class ArticleDbContext : DbContext
	{
		public DbSet<Article> Articles { get; set; }
		public ArticleDbContext(DbContextOptions<ArticleDbContext> dbContextOptions) : base(dbContextOptions)
		{
			try
			{
				var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
				if (databaseCreator != null)
				{
					// Create Database if cannot connect
					if (!databaseCreator.CanConnect()) databaseCreator.Create();

					// Create Tables if no tables exist
					if (!databaseCreator.HasTables()) databaseCreator.CreateTables();
				}
			}
			catch(Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
		}
		
	}
}

