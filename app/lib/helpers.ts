import fs from 'fs';
import path from 'path';

interface Building {
  id: number;
  name: string;
  description: string;
  address: string;
  images: string[]
}

interface Social {
  name: string;
  link: string;
}

interface Feature {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
}

export interface Features {
  features: Feature[]
}

const getData = () => {
  try {
    const filePath = path.join(process.cwd(), 'app/data', 'site-info.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading site-info.json:', error);
    return null;
  }
}

export function fetchFooterData() {
  
  const data = getData();
  if (!data) return { properties: [], socials: [] }; // Handle missing data

  const properties = (data['buildings'] as Building[]).map((building) => ({
    id: building.id,
    name: building.name,
  }));

  const socials = (data['site_info']?.['social_links'] as Social[]).map((social) => ({
    name: social.name,
    link: social.link,
  }));

  return { properties, socials };
}

export function getHomeScreenData() {
  const data = getData();
  if (!data || !Array.isArray(data['buildings'])) return [null, []]; // Handle missing or malformed data

  const buildings: Building[] = data['buildings'];
  const heroImage: string = buildings[0]?.images?.[0] ?? '';

  const featured: Features = {
    features: buildings.slice(0, 3).map((building) => ({
      id: building.id,
      name: building.name,
      address: building.address ?? 'Unknown Address',
      description: building.description,
      image: building.images?.[0] ?? '',
    })),
  };

  return [heroImage, featured];
}