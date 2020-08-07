using System;

namespace Domain
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string AppUserId { get; set; }
        public virtual Photo Thumbnail { get; set; }
        public virtual AppUser AppUser { get; set; }
    }
}