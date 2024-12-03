import { DeliveryOrder } from "../types";

export enum TruckType {
    Small = "Small Truck",
    Medium = "Medium Truck",
    Large = "Large Truck",
}

const TRUCK_CAPACITIES = {
    [TruckType.Small]: { volume: 20, weight: 2000 },
    [TruckType.Medium]: { volume: 50, weight: 5000 },
    [TruckType.Large]: { volume: 100, weight: 10000 },
};

export function optimizeTruckSelection(orders: DeliveryOrder[]): TruckType {
    const totalVolume = orders.reduce((sum, order) => sum + order.volume, 0);
    const totalWeight = orders.reduce((sum, order) => sum + order.weight, 0);

    const possibleTrucks = Object.entries(TRUCK_CAPACITIES)
        .filter(
            ([_, capacity]) =>
                totalVolume <= capacity.volume && totalWeight <= capacity.weight
        )
        .map(([type]) => type as TruckType);

    // Select smallest truck that can handle the load
    return possibleTrucks.length > 0 ? possibleTrucks[0] : TruckType.Large;
}
