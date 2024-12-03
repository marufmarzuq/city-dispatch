import { Location, DeliveryOrder } from "../types";
import { haversineDistance } from "../utils/geoUtils";

export function createNearestNeighborRoute(
    startLocation: Location,
    orders: DeliveryOrder[]
): DeliveryOrder[] {
    const unvisitedOrders = [...orders];
    const optimizedRoute: DeliveryOrder[] = [];
    let currentLocation = startLocation;

    while (unvisitedOrders.length > 0) {
        const nearestOrder = findNearestOrder(currentLocation, unvisitedOrders);

        if (nearestOrder) {
            optimizedRoute.push(nearestOrder);
            currentLocation = nearestOrder.location;

            // Remove the visited order
            const index = unvisitedOrders.indexOf(nearestOrder);
            unvisitedOrders.splice(index, 1);
        }
    }

    return optimizedRoute;
}

function findNearestOrder(
    currentLocation: Location,
    orders: DeliveryOrder[]
): DeliveryOrder | null {
    if (orders.length === 0) return null;

    return orders.reduce((nearest, order) => {
        const currentNearest = nearest || order;
        const currentDistance = haversineDistance(
            currentLocation,
            order.location
        );
        const nearestDistance = haversineDistance(
            currentLocation,
            currentNearest.location
        );

        return currentDistance < nearestDistance ? order : currentNearest;
    }, null as DeliveryOrder | null);
}
