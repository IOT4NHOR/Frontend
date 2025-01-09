const data = {
  room: 1,
  year: ["2024"],
  day: ["7"],
  month: ["1"],
  people: 2, // จำนวนคนที่นั่ง
  chairs: [],
};

// ฟังก์ชันปรับสถานะเก้าอี้ตามจำนวนคน
function updateChairs(people) {
  const chairs = [
    { id: 1, occupied: true }, // เปลี่ยนเป็น true (กลับค่าเริ่มต้น)
    { id: 2, occupied: true },
    { id: 3, occupied: true },
    { id: 4, occupied: true },
  ];

  if (people === 0) {
    // ถ้า people = 0 -> ทุกเก้าอี้เป็น false
    return chairs.map((chair) => ({ ...chair, occupied: false }));
  } else {
    // ถ้า people > 0 -> เก้าอี้ตามจำนวนคนเป็น false
    return chairs.map((chair) =>
      chair.id <= people ? { ...chair, occupied: false } : { ...chair, occupied: true }
    );
  }
}

// อัปเดตสถานะเก้าอี้ใน data
data.chairs = updateChairs(data.people);

export default data;
