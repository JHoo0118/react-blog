using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Domain;

namespace Application.Posts
{
    public class PostDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Photo Thumbnail { get; set; }
        [JsonPropertyName("host")]
        public HostDto AppUser { get; set; }
    }
}