using AutoMapper;
using Domain;

namespace Application.UdomljeneZivotinje
{
    public class MapingProfile2 : Profile
    {
        public MapingProfile2()
        {
            CreateMap<Udomljavanje, UdomljenDTO>();
            CreateMap<SlikeUdomljen, SlikeUdomljenDTO> ()
                .ForMember(d => d.Put, o => o.MapFrom(s => s.SlikaObj.Put));
        }
    }
}