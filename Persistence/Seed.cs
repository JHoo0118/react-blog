using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(ApplicationDbContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        Id ="a",
                        DisplayName = "Test1",
                        UserName = "test1",
                        Email = "test1@test.com"
                    },
                    new AppUser
                    {
                        Id ="b",
                        DisplayName = "Test2",
                        UserName = "test2",
                        Email = "test2@test.com"
                    },
                    new AppUser
                    {
                        Id ="c",
                        DisplayName = "Test3",
                        UserName = "test3",
                        Email = "test3@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "aA123456!");
                }
            }

            if (!context.Posts.Any())
            {
                var posts = new List<Post>
                {
                    new Post
                    {
                        Title = "Title 1",
                        Content = "** Content 1 **",
                        Description = "Description 1",
                        // Thumbnail = "https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80",
                        Category = "Javascript",
                        CreatedAt = DateTime.Now.AddMonths(-5),
                        UpdatedAt = DateTime.Now.AddMonths(-5),
                        AppUserId = "a"
                    },
                    new Post
                    {
                        Title = "Title 2",
                        Content = "# Content 2",
                        Description = "Description 2",
                        // Thumbnail = "https://images.unsplash.com/photo-1594210435519-d6304fe78aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                        Category = "Python",
                        CreatedAt = DateTime.Now.AddMonths(-4),
                        UpdatedAt = DateTime.Now.AddMonths(-4),
                        AppUserId = "b"
                    },
                    new Post
                    {
                        Title = "Title 3",
                        Content = "## Content 3",
                        Description = "Description 3",
                        // Thumbnail = "https://images.unsplash.com/photo-1594121816049-9b5713c9c1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                        Category = "Python",
                        CreatedAt = DateTime.Now.AddMonths(-3),
                        UpdatedAt = DateTime.Now.AddMonths(-3),
                        AppUserId = "c"
                    },
                    new Post
                    {
                        Title = "Title 4",
                        Content = "Content 4",
                        Description = "Description 4",
                        // Thumbnail = "https://images.unsplash.com/photo-1594229377634-9499f45f99a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                        Category = "Javascript",
                        CreatedAt = DateTime.Now.AddMonths(-2),
                        UpdatedAt = DateTime.Now.AddMonths(-2),
                        AppUserId = "a"
                    },
                    new Post
                    {
                        Title = "Title 5",
                        Content = "Content 5",
                        Description = "Description 5",
                        // Thumbnail = "https://images.unsplash.com/photo-1594260042357-d914dfc7a79a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
                        Category = "ASP.NET Core",
                        CreatedAt = DateTime.Now.AddMonths(-1),
                        UpdatedAt = DateTime.Now.AddMonths(-1),
                        AppUserId = "b"
                    },
                    new Post
                    {
                        Title = "Title 6",
                        Content = "Content 6",
                        Description = "Description 6",
                        // Thumbnail = "https://images.unsplash.com/photo-1580136084408-5cd83c76fed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
                        Category = "React",
                        CreatedAt = DateTime.Now,
                        UpdatedAt = DateTime.Now,
                        AppUserId = "c"
                    }
                };

                context.Posts.AddRange(posts);
                context.SaveChanges();
            }
        }
    }
}