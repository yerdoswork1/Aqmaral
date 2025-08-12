export const YEARS = [2012, 2013, 2015, 2016, 2017, 2018, 2019, 2021, 2024, 2025] as const;

// Тип года на основе YEARS
export type Year = (typeof YEARS)[number];

// Тип одного проекта
export interface Project {
  name: string;
  description: string;
}

// Тип для PROJECTS
type ProjectsMap = Record<Year, Project[]>;

export const PROJECTS: ProjectsMap = {
  2012: [
    { name: 'SanaUp', description: 'home.productsYears.SanaUP' },
    { name: 'Ozimki', description: 'home.productsYears.Ozimki' }
  ],
  2013: [{ name: 'SkillShift', description: 'home.productsYears.SkillShif' }],
  2015: [
    { name: 'VeloNova', description: 'home.productsYears.VeloNova' },
    { name: 'LumoCasa', description: 'home.productsYears.LumoCasa' }
  ],
  2016: [
    { name: 'DreamWay', description: 'home.productsYears.DreamWay' },
    { name: 'Luna', description: 'home.productsYears.Luna' }
  ],
  2017: [{ name: 'FlexFit', description: 'home.productsYears.FlexFit' }],
  2018: [
    { name: 'RevSpot', description: 'home.productsYears.RevSpot' },
    { name: 'FleetPoint', description: 'home.productsYears.FleetPoint' }
  ],
  2019: [
    { name: 'FloraVera', description: 'home.productsYears.FloraVera' },
    { name: 'Aveelon', description: 'home.productsYears.Aveelon' }
  ],
  2021: [{ name: 'FeeLink', description: 'home.productsYears.FeeLink' }],
  2024: [{ name: 'Offiwebsite', description: 'home.productsYears.Offiwebsite' }],
  2025: [{ name: 'ReelTime', description: 'home.productsYears.ReelTime' }]
};
