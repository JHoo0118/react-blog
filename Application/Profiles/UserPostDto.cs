using System;

namespace Application.Profiles
{
    public class UserPostDto
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Thumbnail { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string AppUserId { get; set; }
    }
}