import fs from 'fs';
import path from 'path';

interface Building {
  id: number;
  name: string;
}

interface Social {
  name: string;
  link: string;
}

const getData = () => {
  const filePath = path.join(process.cwd(), 'app/data', 'site-info.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data
}

export function fetchFooterData() {
  
  const data = getData();

  const properties = (data['buildings'] as Building[]).map(building => (
    { 
      id: building.id, 
      name: building.name 
    }
  ));
  
  const socials = (data['site_info']['social_links'] as Social[]).map(social => (
    { 
      name: social.name, 
      link: social.link
    }
  ));


  return { properties, socials }
}

export function getHomeScreenData() {
  const data = getData();
  
  const buildings = data['buildings']
  const heroImage = buildings[0]['images'][0]

  const featured = buildings.splice(0, 3).map((building) => (
    {
      'id': building.id, 
      'name': building.name,
      'address': building.address ?? 'Unknown Address',
      'url': building.images[0]
    }))

  return heroImage
}