export interface TreeObservation {
  date: string;
  note: string;
  height?: string;
}

export interface Tree {
  id: string;
  species: string;
  locationId: string;
  plantedDate: string;
  status: 'Healthy' | 'Needs Care' | 'Critical';
  height: string;
  treeFriend: string;
  observations: TreeObservation[];
}

export interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  plantedDate: string;
  description: string;
  totalTrees: number;
  healthyTrees: number;
  speciesCount: number;
}

export const mockLocations: Location[] = [
  {
    id: "loc-001",
    name: "ABC School Urban Forest",
    city: "Pune",
    state: "Maharashtra",
    plantedDate: "2025-06-15",
    description: "A beautiful urban forest planted by the students of ABC School.",
    totalTrees: 850,
    healthyTrees: 792,
    speciesCount: 18,
  },
  {
    id: "loc-002",
    name: "XYZ Community Park",
    city: "Pune",
    state: "Maharashtra",
    plantedDate: "2025-07-22",
    description: "Community driven plantation in the heart of the city.",
    totalTrees: 620,
    healthyTrees: 594,
    speciesCount: 15,
  },
  {
    id: "loc-003",
    name: "Sunrise Valley School",
    city: "Mumbai",
    state: "Maharashtra",
    plantedDate: "2025-08-10",
    description: "An initiative to bring greenery to the school premises.",
    totalTrees: 450,
    healthyTrees: 430,
    speciesCount: 12,
  },
];

export const mockTrees: Record<string, Tree> = {
  "AB-001": {
    id: "AB-001",
    species: "Mango",
    locationId: "loc-001",
    plantedDate: "2025-06-15",
    status: "Healthy",
    height: "61 cm",
    treeFriend: "Demo Student",
    observations: [
      { date: "2025-06-15", note: "Tree planted" },
      { date: "2025-07-15", note: "First observation" },
      { date: "2025-09-10", note: "New leaves observed" },
      { date: "2025-12-05", note: "Height check", height: "42 cm" },
      { date: "2026-08-10", note: "Growing well", height: "61 cm" },
    ]
  },
  "AB-002": {
    id: "AB-002",
    species: "Neem",
    locationId: "loc-001",
    plantedDate: "2025-06-15",
    status: "Healthy",
    height: "85 cm",
    treeFriend: "Aisha Sharma",
    observations: [
      { date: "2025-06-15", note: "Tree planted" },
      { date: "2026-01-20", note: "Strong growth observed", height: "55 cm" },
      { date: "2026-08-12", note: "Healthy foliage", height: "85 cm" },
    ]
  },
  "AB-003": {
    id: "AB-003",
    species: "Banyan",
    locationId: "loc-002",
    plantedDate: "2025-07-22",
    status: "Needs Care",
    height: "30 cm",
    treeFriend: "Rahul Verma",
    observations: [
      { date: "2025-07-22", note: "Tree planted" },
      { date: "2026-02-15", note: "Leaves looking yellow, needs water." },
      { date: "2026-08-15", note: "Recovering slowly.", height: "30 cm" },
    ]
  },
};
