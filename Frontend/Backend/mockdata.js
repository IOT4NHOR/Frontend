const data = {
  room: 1,
  year: 2024,
  day: 7,
  month: 1,
  people: 2, // จำนวนคนที่นั่ง
  chairs: [],
};

// ฟังก์ชันปรับสถานะเก้าอี้ตามจำนวนคน
function updateChairs(people) {
  const chairs = [
    { id: 1, occupied: false }, 
    { id: 2, occupied: false },
    { id: 3, occupied: false },
    { id: 4, occupied: false },
  ];

  // อัปเดตสถานะเก้าอี้ตามจำนวนคน
  return chairs.map((chair) =>
    chair.id <= people ? { ...chair, occupied: false } : { ...chair, occupied: true }
  );
}

// อัปเดตสถานะเก้าอี้ใน data
data.chairs = updateChairs(data.people);

export default data;
