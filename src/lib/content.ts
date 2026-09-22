import profileData from '../content/profile.json';
import projectsData from '../content/projects.json';
import servicesData from '../content/services.json';

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
  bio: string;
};

export async function getProjects(): Promise<Project[]> {
  // Simulando latência/leitura assíncrona para facilitar transição pro Payload futuramente
  return projectsData as Project[];
}

export async function getServices(): Promise<Service[]> {
  return servicesData as Service[];
}

export async function getProfile(): Promise<Profile> {
  return profileData as Profile;
}
