using Microsoft.EntityFrameworkCore;

namespace Prueba.models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) :
        base(options)
        {
        }
        public DbSet<TaskItem> TaskItems { get; set; }
    }
}