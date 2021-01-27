using AutoMapper;
using Domain;

namespace Application.NadjeneZivotinje
{
    public class MapingProfile1 : Profile
    {
        public MapingProfile1()
        {
            CreateMap<Nadjeno, NadjenDTO>();
            CreateMap<SlikeNadjen, SlikeNadjenDTO>()
                .ForMember(d => d.Put, o => o.MapFrom(s => s.SlikaObj.Put));
        }
    }
}