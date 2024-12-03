export function haversineDistance(
    location1: { latitude: number; longitude: number },
    location2: { latitude: number; longitude: number }
): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(location2.latitude - location1.latitude);
    const dLon = toRadians(location2.longitude - location1.longitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(location1.latitude)) *
            Math.cos(toRadians(location2.latitude)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}
