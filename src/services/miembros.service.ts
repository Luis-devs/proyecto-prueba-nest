import { Injectable } from '@nestjs/common';
import { Miembro } from 'src/entities/miembros.entity';

@Injectable()
export class MiembrosService {
  private Miembros: Miembro[] = [
    {
      id: 1,
      name: 'Ándres Castillo',
      email: 'andressempai03@gmail.com',
      role: 'Project manager',
      technologies: 'Backend',
      phone: 3013745541,
    },
    {
      id: 2,
      name: 'Argemiro Polo',
      email: 'argemiropolo@gmail.com',
      role: 'Developer',
      technologies: 'Backend',
      phone: 3008419312,
    },
    {
      id: 3,
      name: 'Dana Montiel',
      email: 'montieltorresdanarosa6@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3146891308,
    },
    {
      id: 4,
      name: 'Daniel Berrio',
      email: 'berriobarriosdaniel@gmail.com',
      role: 'Developer',
      technologies: 'Backend',
      phone: 3022521320,
    },
    {
      id: 5,
      name: 'Dawer Salgado',
      email: 'dasrod@hotmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3238267295,
    },
    {
      id: 6,
      name: 'Jaiber Pestana',
      email: 'jaberdavidpestanadiaz@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3218599065,
    },
    {
      id: 7,
      name: 'Jaider Fabra',
      email: '',
      role: '',
      technologies: 'Backend',
      phone: 0,
    },
    {
      id: 8,
      name: 'Jerson Borja',
      email: 'sasu3435@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3218224076,
    },
    {
      id: 9,
      name: 'Jesús Coronado',
      email: 'jesus.coronado.2405@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3057590875,
    },
    {
      id: 10,
      name: 'Jesús Saenz',
      email: 'jesusaltamiranda12345@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3022757373,
    },
    {
      id: 11,
      name: 'Jose Ortega',
      email: '',
      role: '',
      technologies: '',
      phone: 0,
    },
    {
      id: 12,
      name: 'Julián Reales',
      email: 'jrealesdelaossa@gmail.com',
      role: 'Leader Backend',
      technologies: 'Backend',
      phone: 3127405239,
    },
    {
      id: 13,
      name: 'Kevin Padilla',
      email: 'kepady15@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3216911494,
    },
    {
      id: 14,
      name: 'July Alvarez',
      email: 'Julykaalvarez0220@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3216198005,
    },
    {
      id: 15,
      name: 'Kevin Padilla',
      email: 'kepady15@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3216911494,
    },
    {
      id: 16,
      name: 'Luis Salgado',
      email: '',
      role: 'Developer',
      technologies: 'Fullstack',
      phone: 3125670956,
    },
    {
      id: 17,
      name: 'Mateo Olivero',
      email: 'oliveromateo731@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3014947873,
    },
    {
      id: 18,
      name: 'Mildreis Paternina',
      email: 'mildreispaternina866@gmail.com',
      role: 'Developer',
      technologies: 'Backend',
      phone: 3013257122,
    },
    {
      id: 19,
      name: 'Oscar Durango',
      email: 'osdadugo86@gmail.com',
      role: 'Developer',
      technologies: 'Backend',
      phone: 3106266084,
    },
    {
      id: 20,
      name: 'Paula Cavadia',
      email: 'Paulacavadia2003@gmail.com',
      role: 'Developer',
      technologies: 'Frontend',
      phone: 3126287572,
    },
    {
      id: 21,
      name: 'Santiago Hernández',
      email: 'santiagohernandez.2005@outlook.es',
      role: 'Developer',
      technologies: '',
      phone: 3005252876,
    },
  ];

  obtenerMiembros(): Miembro[] {
    return this.Miembros;
  }
  obtenerMiembroEspecifico(id: number): Miembro {
    return this.Miembros[id];
  }
}
