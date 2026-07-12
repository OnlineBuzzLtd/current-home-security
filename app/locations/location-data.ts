export type Location = {
  slug: string;
  name: string;
  region: string;
  postcodes: string;
  intro: string;
  propertyContext: string;
  securityFocus: string;
  installationNote: string;
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "wimbledon",
    name: "Wimbledon",
    region: "South West London",
    postcodes: "SW19 & SW20",
    intro: "Discreet alarm and CCTV installations for family homes, period properties and modern developments across Wimbledon.",
    propertyContext: "From Victorian terraces around Wimbledon town to larger detached homes near the Village, local properties often need flexible coverage across side access, gardens and multiple floors.",
    securityFocus: "Layered protection for front entrances, side returns, garden access and outbuildings—without compromising the appearance of your home.",
    installationNote: "We plan equipment placement around original features, renovation finishes and reliable camera sightlines before installation begins.",
    nearby: ["Raynes Park", "Southfields", "Merton Park"],
  },
  {
    slug: "dulwich",
    name: "Dulwich",
    region: "South East London",
    postcodes: "SE21 & SE22",
    intro: "Premium home-security systems installed cleanly across Dulwich Village, East Dulwich and surrounding neighbourhoods.",
    propertyContext: "Dulwich combines period family houses, gated properties and carefully renovated homes where security hardware needs to feel considered rather than intrusive.",
    securityFocus: "Discreet protection for larger frontages, garden doors, side passages, garages and lower-ground access points.",
    installationNote: "Camera angles and alarm components are positioned to preserve architectural character while covering the routes that matter.",
    nearby: ["East Dulwich", "Herne Hill", "West Dulwich"],
  },
  {
    slug: "beckenham",
    name: "Beckenham",
    region: "South East London",
    postcodes: "BR3",
    intro: "Transparent, fixed-price alarm and CCTV installation for homeowners throughout Beckenham.",
    propertyContext: "Beckenham has a wide mix of detached family homes, inter-war houses and newer developments, often with driveways, garages and rear access to consider.",
    securityFocus: "Clear coverage across driveways, front doors, garden entrances and connecting garages, with reliable recording and simple everyday use.",
    installationNote: "We assess the full boundary and internal access pattern so your equipment is useful—not simply visible.",
    nearby: ["Shortlands", "Eden Park", "Kelsey Park"],
  },
  {
    slug: "purley",
    name: "Purley",
    region: "South London",
    postcodes: "CR8",
    intro: "Professional Pyronix alarm and Hikvision CCTV systems for homes across Purley and its surrounding roads.",
    propertyContext: "Purley’s detached and semi-detached homes commonly have larger plots, driveways, side access and more than one practical route into the property.",
    securityFocus: "Early visibility across driveways and boundaries, combined with alarm detection at the home’s most important entry points.",
    installationNote: "We balance useful camera range with neighbour privacy, lighting conditions and the cleanest practical cable route.",
    nearby: ["Woodcote", "Riddlesdown", "Kenley"],
  },
  {
    slug: "sanderstead",
    name: "Sanderstead",
    region: "South London",
    postcodes: "CR2",
    intro: "Carefully planned home-security installation for detached and family properties throughout Sanderstead.",
    propertyContext: "Larger frontages, side gates, garages and deep rear gardens can make a one-size-fits-all system ineffective across Sanderstead homes.",
    securityFocus: "A joined-up alarm and camera plan that covers approaches, accessible windows and less visible sides of the property.",
    installationNote: "We design around the shape of your plot and explain exactly what each device protects before fitting it.",
    nearby: ["Hamsey Green", "Purley Oaks", "South Croydon"],
  },
  {
    slug: "warlingham",
    name: "Warlingham",
    region: "Surrey",
    postcodes: "CR6",
    intro: "Premium alarm and CCTV installation for Warlingham homes, with clear pricing and a tidy finish.",
    propertyContext: "Detached homes, wider plots and quieter roads can create longer approaches and multiple external zones that benefit from properly planned coverage.",
    securityFocus: "Driveway awareness, perimeter visibility and dependable alarm detection across main buildings, garages and selected outbuildings.",
    installationNote: "Camera specification, lens position and recording capacity are matched to the distances around your property.",
    nearby: ["Whyteleafe", "Caterham", "Chelsham"],
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "South West London",
    postcodes: "TW9 & TW10",
    intro: "Discreet, premium home-security installation for Richmond’s period homes, townhouses and modern properties.",
    propertyContext: "Richmond properties often combine valuable original details with extensions, basement access, shared boundaries or substantial garden doors.",
    securityFocus: "Carefully positioned protection across principal entrances, lower-ground access and rear boundaries while keeping hardware visually restrained.",
    installationNote: "We work around sensitive finishes and complex layouts, agreeing visible equipment and cable routes before work starts.",
    nearby: ["Kew", "East Sheen", "Petersham"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
