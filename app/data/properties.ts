export interface Apartment {
  id: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: number;
  available: boolean;
  floorPlan: string;
}

export interface Property {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  yearBuilt: number;
  mainImage: string;
  gallery: string[];
  amenities: string[];
  apartments: Apartment[]
}

export const properties: Property[] = [
  {
    id: "prop1",
    name: "Brand Skyline Tower",
    slug: "grand-skyline-tower",
    address: "101 Luxury Avenue",
    city: "New York",
    description: "The Brand Skyline Tower stands as a beacon of modern luxury in the heart of the city. With its sleek glass facade and cutting-edge amenities, it offers residents an unparalleled living experience. Each home is meticulously designed with premium finishes, floor-to-ceiling windows, and smart home technology. The building features a rooftop infinity pool, private cinema, state-of-the-art fitness center, and 24/7 concierge service, ensuring that every need is met with the highest standard of service.",
    shortDescription: "Luxurious high-rise residences with panoramic city views and world-class amenities.",
    featured: true,
    yearBuilt: 2020,
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "24/7 Concierge",
      "Rooftop Infinity Pool",
      "Private Cinema",
      "State-of-the-art Fitness Center",
      "Resident Lounge",
      "Spa & Wellness Center",
      "Private Dining Room",
      "Business Center",
      "Valet Parking",
      "Pet Spa",
      "Package Room",
      "Electric Vehicle Charging Stations"
    ],
    apartments: [
      {
        id: "apt1",
        type: "Studio",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 550,
        price: 4200,
        available: true,
        floorPlan: "https://example.com/floorplan1.jpg"
      },
      {
        id: "apt2",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 750,
        price: 5500,
        available: true,
        floorPlan: "https://example.com/floorplan2.jpg"
      },
      {
        id: "apt3",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        price: 7800,
        available: false,
        floorPlan: "https://example.com/floorplan3.jpg"
      },
      {
        id: "apt4",
        type: "Penthouse",
        bedrooms: 3,
        bathrooms: 3.5,
        sqft: 2200,
        price: 15000,
        available: true,
        floorPlan: "https://example.com/floorplan4.jpg"
      }
    ]
  },
  {
    id: "prop2",
    name: "The Brand Heritage",
    slug: "the-grand-heritage",
    address: "250 Elite Boulevard",
    city: "Boston",
    description: "The Brand Heritage blends classic architecture with contemporary design to create a timeless residence that exudes sophistication. Situated in a historic district, this boutique building offers the perfect balance of old-world charm and modern convenience. The elegantly appointed homes feature custom millwork, European oak flooring, and chef's kitchens with premium appliances. Residents enjoy access to a curated collection of amenities including a library lounge, landscaped courtyard, and wine cellar. The Grand Heritage is more than a home; it's a legacy.",
    shortDescription: "Boutique residences combining historic architecture with contemporary luxury.",
    featured: true,
    yearBuilt: 2018,
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "24-hour Doorman",
      "Library Lounge",
      "Landscaped Courtyard",
      "Wine Cellar & Tasting Room",
      "Fitness Studio",
      "Private Storage",
      "Bicycle Storage",
      "Package Room",
      "Resident Manager",
      "Pet Friendly"
    ],
    apartments: [
      {
        id: "apt5",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 850,
        price: 6200,
        available: true,
        floorPlan: "https://example.com/floorplan5.jpg"
      },
      {
        id: "apt6",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1250,
        price: 8700,
        available: false,
        floorPlan: "https://example.com/floorplan6.jpg"
      },
      {
        id: "apt7",
        type: "Three Bedroom",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1850,
        price: 12500,
        available: true,
        floorPlan: "https://example.com/floorplan7.jpg"
      }
    ]
  },
  {
    id: "prop3",
    name: "Brand Riviera",
    slug: "grand-riviera",
    address: "78 Waterfront Drive",
    city: "Miami",
    description: "The Brand Riviera offers a sophisticated coastal lifestyle with breathtaking waterfront views and resort-style amenities. This architectural masterpiece features expansive terraces, private boat slips, and interiors designed with a minimalist aesthetic that emphasizes the spectacular natural surroundings. The residences are equipped with smart home technology, European kitchens, and floor-to-ceiling windows that showcase the stunning views. The amenities include multiple infinity pools, a private beach club, marina services, and a wellness center, providing residents with a luxurious vacation-inspired lifestyle year-round.",
    shortDescription: "Waterfront residences offering resort-style living with private marina access.",
    featured: true,
    yearBuilt: 2019,
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "Private Marina",
      "Infinity Pools",
      "Private Beach Club",
      "Waterfront Restaurant",
      "Spa & Wellness Center",
      "Tennis Courts",
      "Water Sports Equipment",
      "Yoga Pavilion",
      "Executive Business Center",
      "24-hour Security",
      "Valet Parking",
      "Concierge Services"
    ],
    apartments: [
      {
        id: "apt8",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1.5,
        sqft: 950,
        price: 7500,
        available: true,
        floorPlan: "https://example.com/floorplan8.jpg"
      },
      {
        id: "apt9",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2.5,
        sqft: 1600,
        price: 12000,
        available: true,
        floorPlan: "https://example.com/floorplan9.jpg"
      },
      {
        id: "apt10",
        type: "Three Bedroom",
        bedrooms: 3,
        bathrooms: 3.5,
        sqft: 2400,
        price: 18500,
        available: false,
        floorPlan: "https://example.com/floorplan10.jpg"
      },
      {
        id: "apt11",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 4.5,
        sqft: 3800,
        price: 32000,
        available: true,
        floorPlan: "https://example.com/floorplan11.jpg"
      }
    ]
  },
  {
    id: "prop4",
    name: "Brand Metropolitan",
    slug: "grand-metropolitan",
    address: "420 Urban Circle",
    city: "Chicago",
    description: "The Brand Metropolitan redefines urban living with its innovative design and comprehensive amenities. Located in the heart of the city, this striking tower offers residents the perfect combination of convenience, comfort, and style. The thoughtfully designed residences feature open floor plans, custom cabinetry, and integrated appliances that create a seamless living experience. The building boasts an impressive suite of amenities including a sky lounge, co-working spaces, and a fully equipped fitness center. With its prime location and exceptional offerings, The Grand Metropolitan represents the pinnacle of contemporary city living.",
    shortDescription: "Contemporary urban residences in a prime downtown location with innovative design.",
    featured: false,
    yearBuilt: 2021,
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80",
      "https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "Sky Lounge",
      "Co-working Spaces",
      "State-of-the-art Fitness Center",
      "Yoga Studio",
      "Game Room",
      "Demonstration Kitchen",
      "Dog Run & Pet Spa",
      "Rooftop Garden",
      "24-hour Concierge",
      "Package Room & Cold Storage",
      "Bike Storage",
      "Electric Vehicle Charging Stations"
    ],
    apartments: [
      {
        id: "apt12",
        type: "Studio",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 500,
        price: 3800,
        available: true,
        floorPlan: "https://example.com/floorplan12.jpg"
      },
      {
        id: "apt13",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 700,
        price: 4900,
        available: true,
        floorPlan: "https://example.com/floorplan13.jpg"
      },
      {
        id: "apt14",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1050,
        price: 7200,
        available: false,
        floorPlan: "https://example.com/floorplan14.jpg"
      },
      {
        id: "apt15",
        type: "Three Bedroom",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1550,
        price: 10500,
        available: true,
        floorPlan: "https://example.com/floorplan15.jpg"
      }
    ]
  },
  {
    id: "prop5",
    name: "Brand Oasis",
    slug: "grand-oasis",
    address: "88 Serenity Lane",
    city: "Los Angeles",
    description: "The Brand Oasis is a sanctuary of tranquility and luxury in the midst of the bustling city. This exclusive collection of residences is set within lush, landscaped grounds that create a serene atmosphere reminiscent of a private resort. The homes are designed with a focus on indoor-outdoor living, featuring retractable glass walls, private terraces, and natural materials throughout. Residents enjoy access to a comprehensive wellness center, meditation gardens, and an outdoor pool surrounded by cabanas. The Grand Oasis offers a unique opportunity to experience the perfect balance of city living and peaceful retreat.",
    shortDescription: "Resort-inspired residences offering a serene urban oasis with wellness focus.",
    featured: false,
    yearBuilt: 2017,
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1614622442724-e24e67a4e100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "Wellness Center",
      "Meditation Gardens",
      "Outdoor Pool & Cabanas",
      "Spa & Sauna",
      "Yoga & Pilates Studio",
      "Outdoor Dining Areas",
      "Fire Pits",
      "Walking Paths",
      "Concierge Services",
      "24-hour Security",
      "Resident Lounge",
      "Secure Parking"
    ],
    apartments: [
      {
        id: "apt16",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1.5,
        sqft: 900,
        price: 6800,
        available: true,
        floorPlan: "https://example.com/floorplan16.jpg"
      },
      {
        id: "apt17",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1400,
        price: 9500,
        available: false,
        floorPlan: "https://example.com/floorplan17.jpg"
      },
      {
        id: "apt18",
        type: "Three Bedroom",
        bedrooms: 3,
        bathrooms: 3,
        sqft: 2100,
        price: 14500,
        available: true,
        floorPlan: "https://example.com/floorplan18.jpg"
      },
      {
        id: "apt19",
        type: "Penthouse",
        bedrooms: 3,
        bathrooms: 3.5,
        sqft: 2800,
        price: 22000,
        available: true,
        floorPlan: "https://example.com/floorplan19.jpg"
      }
    ]
  },
  {
    id: "prop6",
    name: "The Brand Summit",
    slug: "the-grand-summit",
    address: "340 Panorama Heights",
    city: "Denver",
    description: "The Brand Summit offers an elevated living experience with its stunning mountainside location and architectural design that maximizes the spectacular views. This exclusive collection of residences features expansive windows, generous outdoor spaces, and interiors that reflect the natural surroundings through the use of stone, wood, and other organic materials. The building includes a comprehensive suite of amenities designed for the active lifestyle, including a ski lounge, bike storage, and outdoor adventure center. The Grand Summit represents the perfect blend of luxury living and outdoor adventure.",
    shortDescription: "Mountain-inspired residences offering panoramic views and adventure-focused amenities.",
    featured: false,
    yearBuilt: 2019,
    mainImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1692&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    amenities: [
      "Ski Lounge & Storage",
      "Bike Storage & Repair",
      "Outdoor Adventure Center",
      "Heated Outdoor Pool",
      "Hot Tubs",
      "Fitness Center",
      "Sauna & Steam Room",
      "Resident Lounge with Fireplace",
      "Game Room",
      "Business Center",
      "24-hour Concierge",
      "Heated Garage"
    ],
    apartments: [
      {
        id: "apt20",
        type: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 800,
        price: 5800,
        available: true,
        floorPlan: "https://example.com/floorplan20.jpg"
      },
      {
        id: "apt21",
        type: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1300,
        price: 8900,
        available: true,
        floorPlan: "https://example.com/floorplan21.jpg"
      },
      {
        id: "apt22",
        type: "Three Bedroom",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1900,
        price: 13500,
        available: false,
        floorPlan: "https://example.com/floorplan22.jpg"
      },
      {
        id: "apt23",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 3.5,
        sqft: 3200,
        price: 24000,
        available: true,
        floorPlan: "https://example.com/floorplan23.jpg"
      }
    ]
  }
];

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured)
}

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug)
}