export interface Location {
    latitude: number;
    longitude: number;
}

export interface DeliveryOrder {
    id: string;
    district: string;
    location: Location;
    volume: number;
    weight: number;
}

export interface OptimizedRoute {
    routeId: string;
    orders: DeliveryOrder[];
    totalDistance: number;
    truckType: TruckType;
}

export enum TruckType {
    Small = "Small Truck",
    Medium = "Medium Truck",
    Large = "Large Truck",
}
