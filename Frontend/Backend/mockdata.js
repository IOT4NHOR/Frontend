const mockData = {
  SIT: {
    1: {
      zones: [
        { name: "Hallway", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 101", people: 1, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 102", people: 2, objects: ["coffee", "laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 103", people: 3, objects: ["tv"], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    2: {
      zones: [
        { name: "SIT 201", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 202", people: 1, objects: ["banana"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 203", people: 2, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 204", people: 3, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    3: {
      zones: [
        { name: "SIT 301", people: 1, objects: ["tv"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 302", people: 2, objects: ["coffee", "laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 303", people: 3, objects: ["banana"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 304", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    4: {
      zones: [
        { name: "SIT 401", people: 2, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 402", people: 3, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 403", people: 1, objects: ["tv"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "SIT 404", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
  },
  LX: {
    10: {
      zones: [
        { name: "LX 1001", people: 1, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1002", people: 2, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1003", people: 3, objects: ["tv"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1004", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    11: {
      zones: [
        { name: "LX 1101", people: 2, objects: ["banana"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1102", people: 3, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1103", people: 1, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1104", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    12: {
      zones: [
        { name: "LX 1201", people: 3, objects: ["tv"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1202", people: 1, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1203", people: 2, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1204", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
    13: {
      zones: [
        { name: "LX 1301", people: 0, objects: [], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1302", people: 1, objects: ["banana"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1303", people: 2, objects: ["laptop"], date_time: new Date(2025, 4, 4).toISOString() },
        { name: "LX 1304", people: 3, objects: ["coffee"], date_time: new Date(2025, 4, 4).toISOString() },
      ],
    },
  },
};

export default mockData;
