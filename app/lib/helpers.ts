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

export function fetchFooterData() {
  console.log('here!')
  const filePath = path.join(process.cwd(), 'app/data', 'site-info.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  console.log(data)

  const properties = (data['buildings'] as Building[]).map(building => (
    { 
      id: building.id, 
      name: building.name 
    }
  ))
  
  const socials = (data['site_info']['social_links'] as Social[]).map(social => (
    { 
      name: social.name, 
      link: social.link
    }
  ))


  return { properties, socials }
}