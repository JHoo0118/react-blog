using System.Linq;
using AutoMapper;
using Domain;

namespace Application.Posts
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>();
            CreateMap<Post, Profiles.UserPostDto>();
            CreateMap<AppUser, HostDto>()
                .ForMember(d => d.Username, o => o.MapFrom(s => s.UserName))
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.DisplayName))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photo.Url));
        }

    }
}