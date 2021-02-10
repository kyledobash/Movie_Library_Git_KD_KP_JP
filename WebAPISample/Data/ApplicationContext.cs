﻿using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{

    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed data - needs migration

                modelBuilder.Entity<Movie>()
                .HasData(
                new Movie
                {
                    MovieId = 1,
                    Title = "Pulp Fiction",
                    Genre = "Crime",
                    Director = "Quentin Tarantino",
                }
             );
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
