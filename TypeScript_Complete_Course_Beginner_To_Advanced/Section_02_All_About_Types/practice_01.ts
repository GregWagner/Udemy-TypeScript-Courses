type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDepareture: Date;
  timeOfArrival: Date;
  caterer : Caterer;
};

let airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDepareture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "484, Some Street, New York",
    phone: 1452125,
};
