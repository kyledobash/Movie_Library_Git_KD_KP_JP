using Microsoft.EntityFrameworkCore;
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
                    Title = "",
                    Genre = "",
                    Director = "",
                }
             );

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
