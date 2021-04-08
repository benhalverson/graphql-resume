export interface BioInterface {
  name: string;
  email: string;
  website: string;
  tagline: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface PositionInterface {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  employmentType: EmploymentType;
  location: string;
  achievements: string[];
}

export enum EmploymentType {
  FULL_TIME = 'Full Time',
  CONTACTOR = 'Contractor',
  FREELANCE = 'Freelance'
}
