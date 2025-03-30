interface Contact {
  email: string;
  phone: string;
  address: string;
}

interface Social {
  name: string;
  link: string;
}

interface OfficeHours {
  weekDay: string;
  saturday: string;
  sunday: string;
}

export interface Info {
  name: string;
  description: string;
  mainImage: string;
  welcomeMessage: string;
  welcomeDescription: string;
}

interface SiteInfo {
  info: Info;
  contact: Contact;
  socialLinks: Social[];
  officeHours: OfficeHours;
}

export const siteInfo: SiteInfo = {
  info: {
    name: 'The Brand',
    description: 'Luxury residential buildings offering modern amenities and elegant living spaces.',
    mainImage: 'https://aareas.com/wp-content/uploads/2017/08/BLDG01-01.jpg',
    welcomeMessage: 'Experience Unparalleled Elegance in Every Detail',
    welcomeDescription: 'The Brand offers exceptional residential properties that blend luxury, comfort, and sophisticated design.'
  },
  contact: {
    email: 'info@thebrandliving.com',
    phone: '(555) 123-4567',
    address: '"123 Main Street, Metropolis, NY 10001"'
  },
  socialLinks: [
    {
      name: 'instagram',
      link: 'https://instagram.com/theliving'
    },
    {
      name: 'facebook',
      link: 'https://facebook.com/theliving'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/thegrandliving'
    }
  ],
  officeHours: {
    weekDay: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
}

export const getContact = (): Contact => {
  return siteInfo.contact
}

export const getInfo = (): Info => {
  return siteInfo.info
}