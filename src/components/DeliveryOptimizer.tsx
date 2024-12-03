import React, { useState } from "react";
import {
    bangladeshDistricts,
    generateDummyDeliveryOrders,
} from "./bangladeshDistricts";
import { DeliveryOrder, OptimizedRoute } from "../types";
import { createNearestNeighborRoute } from "../algos/routeOptimization";
import { optimizeTruckSelection } from "../algos/truckOptimization";
import { haversineDistance } from "../utils/geoUtils";
import { MapPinIcon, RouteIcon, TruckIcon } from "lucide-react";

const BangladeshRouteMap: React.FC = () => {
    const [, setDeliveryOrders] = useState<DeliveryOrder[]>([]);
    const [optimizedRoutes, setOptimizedRoutes] = useState<OptimizedRoute[]>(
        []
    );

    const warehouseLocation = bangladeshDistricts.find(
        (d) => d.name === "Dhaka"
    )!.location;

    // Normalization function for map projection
    const normalizeCoordinates = (lat: number, lon: number) => {
        const minLat = 20.5,
            maxLat = 26.5;
        const minLon = 88.0,
            maxLon = 92.7;

        const x = ((lon - minLon) / (maxLon - minLon)) * 400;
        const y = ((maxLat - lat) / (maxLat - minLat)) * 300;

        return { x, y };
    };

    const generateRoutes = () => {
        const orders = generateDummyDeliveryOrders(50);
        const routes = optimizeDeliveryRoutes(orders);
        setDeliveryOrders(orders);
        setOptimizedRoutes(routes);
    };

    const optimizeDeliveryRoutes = (
        orders: DeliveryOrder[]
    ): OptimizedRoute[] => {
        const groupedOrders = groupOrdersByProximity(orders);

        return groupedOrders.map((group, index) => {
            const routeWithOrder = createNearestNeighborRoute(
                warehouseLocation,
                group
            );
            const truckType = optimizeTruckSelection(group);

            return {
                routeId: `ROUTE-${index + 1}`,
                orders: routeWithOrder,
                totalDistance: calculateTotalDistance(routeWithOrder),
                truckType,
            };
        });
    };

    const groupOrdersByProximity = (
        orders: DeliveryOrder[],
        maxGroupSize = 7
    ): DeliveryOrder[][] => {
        const sortedOrders = orders.sort(
            (a, b) =>
                haversineDistance(warehouseLocation, a.location) -
                haversineDistance(warehouseLocation, b.location)
        );

        const groups: DeliveryOrder[][] = [];
        while (sortedOrders.length > 0) {
            groups.push(sortedOrders.splice(0, maxGroupSize));
        }
        return groups;
    };

    const calculateTotalDistance = (route: DeliveryOrder[]): number => {
        let totalDistance = 0;
        let currentLocation = warehouseLocation;

        for (const order of route) {
            totalDistance += haversineDistance(currentLocation, order.location);
            currentLocation = order.location;
        }

        totalDistance += haversineDistance(currentLocation, warehouseLocation);
        return totalDistance;
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="container mx-auto bg-white rounded-xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                        <RouteIcon className="mr-3" /> Bangladesh Logistics
                        Routes
                    </h1>
                    <button
                        onClick={generateRoutes}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center"
                    >
                        <TruckIcon className="mr-2" /> Generate Routes
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
                        <svg
                            viewBox="0 0 400 300"
                            className="w-full h-auto border-2 border-blue-200"
                        >
                            {/* Bangladesh map background */}
                            <rect width="400" height="300" fill="#e6f3ff" />

                            {/* Warehouse (Dhaka) marker */}
                            {warehouseLocation && (
                                <circle
                                    {...normalizeCoordinates(
                                        warehouseLocation.latitude,
                                        warehouseLocation.longitude
                                    )}
                                    r="10"
                                    fill="red"
                                    className="animate-pulse"
                                />
                            )}

                            {/* Route visualizations */}
                            {optimizedRoutes.map((route, routeIndex) => {
                                const routeColor = `hsl(${
                                    routeIndex * 60
                                }, 70%, 50%)`;
                                const warehouseCoords = normalizeCoordinates(
                                    warehouseLocation.latitude,
                                    warehouseLocation.longitude
                                );

                                return (
                                    <g key={route.routeId}>
                                        {route.orders.map((order, index) => {
                                            const orderCoords =
                                                normalizeCoordinates(
                                                    order.location.latitude,
                                                    order.location.longitude
                                                );

                                            return (
                                                <React.Fragment key={order.id}>
                                                    {/* Lines connecting routes */}
                                                    {index === 0 && (
                                                        <line
                                                            x1={
                                                                warehouseCoords.x
                                                            }
                                                            y1={
                                                                warehouseCoords.y
                                                            }
                                                            x2={orderCoords.x}
                                                            y2={orderCoords.y}
                                                            stroke={routeColor}
                                                            strokeWidth="2"
                                                            strokeDasharray="5,5"
                                                        />
                                                    )}
                                                    {index > 0 && (
                                                        <line
                                                            x1={
                                                                normalizeCoordinates(
                                                                    route
                                                                        .orders[
                                                                        index -
                                                                            1
                                                                    ].location
                                                                        .latitude,
                                                                    route
                                                                        .orders[
                                                                        index -
                                                                            1
                                                                    ].location
                                                                        .longitude
                                                                ).x
                                                            }
                                                            y1={
                                                                normalizeCoordinates(
                                                                    route
                                                                        .orders[
                                                                        index -
                                                                            1
                                                                    ].location
                                                                        .latitude,
                                                                    route
                                                                        .orders[
                                                                        index -
                                                                            1
                                                                    ].location
                                                                        .longitude
                                                                ).y
                                                            }
                                                            x2={orderCoords.x}
                                                            y2={orderCoords.y}
                                                            stroke={routeColor}
                                                            strokeWidth="2"
                                                            strokeDasharray="5,5"
                                                        />
                                                    )}

                                                    {/* Delivery points */}
                                                    <circle
                                                        cx={orderCoords.x}
                                                        cy={orderCoords.y}
                                                        r="5"
                                                        fill={routeColor}
                                                    />
                                                </React.Fragment>
                                            );
                                        })}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <MapPinIcon className="mr-2 text-green-600" /> Route
                            Details
                        </h2>
                        {optimizedRoutes.map((route) => (
                            <div
                                key={route.routeId}
                                className="bg-white p-3 rounded-lg mb-3 shadow-sm"
                            >
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        {route.routeId}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {route.truckType}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-700">
                                    Distance: {route.totalDistance.toFixed(2)}{" "}
                                    km
                                    <br />
                                    Stops:{" "}
                                    {route.orders
                                        .map((o) => o.district)
                                        .join(", ")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BangladeshRouteMap;
