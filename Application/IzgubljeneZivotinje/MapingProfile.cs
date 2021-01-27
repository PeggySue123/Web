using AutoMapper;
using Domain;

namespace Application.IzgubljeneZivotinje
{
    public class MapingProfile : Profile
    {
        public MapingProfile()
        {
            CreateMap<Izgubljeno, IzgubljenDTO>();
            CreateMap<SlikeIzgubljen, SlikeIzgubljenDTO>()
                .ForMember(d => d.Put, o => o.MapFrom(s => s.SlikaObj.Put));
        }
    }
}