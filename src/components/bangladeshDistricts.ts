import { Location, DeliveryOrder } from "../types";

export const bangladeshDistricts: {
    name: string;
    location: Location;
    averageOrderVolume: number;
    averageOrderWeight: number;
}[] = [
    {
        name: "Dhaka",
        location: { latitude: 23.8103, longitude: 90.4125 },
        averageOrderVolume: 50,
        averageOrderWeight: 1200,
    },
    {
        name: "Faridpur",
        location: { latitude: 23.6204, longitude: 89.8425 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Gazipur",
        location: { latitude: 24.0953, longitude: 90.4125 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Gopalganj",
        location: { latitude: 23.0488, longitude: 89.8219 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Kishoreganj",
        location: { latitude: 24.4348, longitude: 90.9785 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Madaripur",
        location: { latitude: 23.1641, longitude: 90.1896 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Manikganj",
        location: { latitude: 23.8624, longitude: 90.0001 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Munshiganj",
        location: { latitude: 23.5026, longitude: 90.5549 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Narayanganj",
        location: { latitude: 23.6165, longitude: 90.5059 },
        averageOrderVolume: 45,
        averageOrderWeight: 1100,
    },
    {
        name: "Narsingdi",
        location: { latitude: 23.9326, longitude: 90.7223 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Rajbari",
        location: { latitude: 23.6616, longitude: 89.6478 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Shariatpur",
        location: { latitude: 23.2415, longitude: 90.4194 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Tangail",
        location: { latitude: 24.2513, longitude: 89.9167 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Bandarban",
        location: { latitude: 22.1953, longitude: 92.2183 },
        averageOrderVolume: 20,
        averageOrderWeight: 600,
    },
    {
        name: "Brahmanbaria",
        location: { latitude: 23.957, longitude: 91.103 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Chandpur",
        location: { latitude: 23.2513, longitude: 90.8817 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Chittagong",
        location: { latitude: 22.3475, longitude: 91.8123 },
        averageOrderVolume: 45,
        averageOrderWeight: 1100,
    },
    {
        name: "Comilla",
        location: { latitude: 23.4607, longitude: 91.1809 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Cox's Bazar",
        location: { latitude: 21.4272, longitude: 92.0058 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Feni",
        location: { latitude: 23.0239, longitude: 91.4098 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Khagrachhari",
        location: { latitude: 23.1192, longitude: 91.985 },
        averageOrderVolume: 20,
        averageOrderWeight: 650,
    },
    {
        name: "Lakshmipur",
        location: { latitude: 22.9406, longitude: 90.8333 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Noakhali",
        location: { latitude: 22.8696, longitude: 91.0993 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Rangamati",
        location: { latitude: 22.7324, longitude: 92.2985 },
        averageOrderVolume: 25,
        averageOrderWeight: 700,
    },
    {
        name: "Bagerhat",
        location: { latitude: 22.6602, longitude: 89.7854 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Chuadanga",
        location: { latitude: 23.6401, longitude: 88.8662 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Jessore",
        location: { latitude: 23.1685, longitude: 89.2106 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Jhenaidah",
        location: { latitude: 23.5456, longitude: 89.1519 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Khulna",
        location: { latitude: 22.8456, longitude: 89.5403 },
        averageOrderVolume: 45,
        averageOrderWeight: 1100,
    },
    {
        name: "Kushtia",
        location: { latitude: 23.9016, longitude: 89.1203 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Magura",
        location: { latitude: 23.4872, longitude: 89.4194 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Meherpur",
        location: { latitude: 23.7622, longitude: 88.6742 },
        averageOrderVolume: 25,
        averageOrderWeight: 700,
    },
    {
        name: "Narail",
        location: { latitude: 23.1741, longitude: 89.5126 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Satkhira",
        location: { latitude: 22.7201, longitude: 89.0685 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Jamalpur",
        location: { latitude: 24.9375, longitude: 89.9444 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Mymensingh",
        location: { latitude: 24.7471, longitude: 90.4203 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Netrokona",
        location: { latitude: 24.8725, longitude: 90.7265 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Sherpur",
        location: { latitude: 25.1751, longitude: 90.1526 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Bogra",
        location: { latitude: 24.8507, longitude: 89.3732 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Joypurhat",
        location: { latitude: 25.0968, longitude: 89.0525 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Naogaon",
        location: { latitude: 24.7996, longitude: 88.9285 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Natore",
        location: { latitude: 24.4197, longitude: 89.0059 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Nawabganj",
        location: { latitude: 24.5764, longitude: 88.2742 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Pabna",
        location: { latitude: 23.9978, longitude: 89.2348 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Rajshahi",
        location: { latitude: 24.3636, longitude: 88.6241 },
        averageOrderVolume: 45,
        averageOrderWeight: 1100,
    },
    {
        name: "Sirajganj",
        location: { latitude: 24.4516, longitude: 89.707 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Dinajpur",
        location: { latitude: 25.6282, longitude: 88.6739 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Gaibandha",
        location: { latitude: 25.3296, longitude: 89.5281 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Kurigram",
        location: { latitude: 25.8054, longitude: 89.9258 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Lalmonirhat",
        location: { latitude: 25.9923, longitude: 89.2464 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Nilphamari",
        location: { latitude: 25.6431, longitude: 88.9288 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Panchagarh",
        location: { latitude: 26.335, longitude: 88.5743 },
        averageOrderVolume: 25,
        averageOrderWeight: 700,
    },
    {
        name: "Thakurgaon",
        location: { latitude: 26.0416, longitude: 88.4328 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Habiganj",
        location: { latitude: 24.3749, longitude: 91.4188 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Moulvibazar",
        location: { latitude: 24.4732, longitude: 91.7766 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
    {
        name: "Sunamganj",
        location: { latitude: 24.8852, longitude: 91.3691 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Sylhet",
        location: { latitude: 24.8949, longitude: 91.8687 },
        averageOrderVolume: 40,
        averageOrderWeight: 1000,
    },
    {
        name: "Barisal",
        location: { latitude: 22.701, longitude: 90.3535 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Bhola",
        location: { latitude: 22.6852, longitude: 90.7201 },
        averageOrderVolume: 30,
        averageOrderWeight: 800,
    },
    {
        name: "Jhalokati",
        location: { latitude: 22.6442, longitude: 90.202 },
        averageOrderVolume: 25,
        averageOrderWeight: 750,
    },
    {
        name: "Patuakhali",
        location: { latitude: 22.352, longitude: 90.4314 },
        averageOrderVolume: 35,
        averageOrderWeight: 900,
    },
    {
        name: "Pirojpur",
        location: { latitude: 22.5465, longitude: 89.9711 },
        averageOrderVolume: 30,
        averageOrderWeight: 850,
    },
];

export function generateDummyDeliveryOrders(count: number): DeliveryOrder[] {
    return Array.from({ length: count }, (_, index) => {
        const district =
            bangladeshDistricts[
                Math.floor(Math.random() * bangladeshDistricts.length)
            ];

        return {
            id: `order-${index + 1}`,
            district: district.name,
            location: {
                latitude:
                    district.location.latitude + (Math.random() - 0.5) * 0.5,
                longitude:
                    district.location.longitude + (Math.random() - 0.5) * 0.5,
            },
            volume:
                Math.floor(Math.random() * 50) + district.averageOrderVolume,
            weight:
                Math.floor(Math.random() * 500) + district.averageOrderWeight,
        };
    });
}
