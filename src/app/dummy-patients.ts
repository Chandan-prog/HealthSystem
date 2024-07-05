// export const DUMMY_PATIENTS = 
// [
//     {
//         pID: "P001",
//         name: "Aarav Sharma",
//         reasonForVisit: "Chest pain",
//         assignedDoctor: "Dr. Anjali Sharma",
//         scheduleDetails: "2024-07-01, 10:00 AM",
//         status: "Scheduled"
//     },
//     {
//         pID: "P002",
//         name: "Isha Gupta",
//         reasonForVisit: "Skin rash",
//         assignedDoctor: "Dr. Rohan Verma",
//         scheduleDetails: "2024-06-28, 02:00 PM",
//         status: "Completed"
//     },
//     {
//         pID: "P003",
//         name: "Nikhil Kumar",
//         reasonForVisit: "Headache",
//         assignedDoctor: "Dr. Meera Iyer",
//         scheduleDetails: "2024-06-30, 11:30 AM",
//         status: "Canceled"
//     },
//     {
//         pID: "P004",
//         name: "Anaya Singh",
//         reasonForVisit: "Routine check-up",
//         assignedDoctor: "Dr. Vikram Singh",
//         scheduleDetails: "2024-07-02, 09:00 AM",
//         status: "Scheduled"
//     },
//     {
//         pID: "P005",
//         name: "Kabir Patel",
//         reasonForVisit: "Knee pain",
//         assignedDoctor: "Dr. Neha Patel",
//         scheduleDetails: "2024-06-29, 01:00 PM",
//         status: "Completed"
//     },
//     {
//         pID: "P006",
//         name: "Riya Menon",
//         reasonForVisit: "Pregnancy check-up",
//         assignedDoctor: "Dr. Priya Menon",
//         scheduleDetails: "2024-07-03, 12:00 PM",
//         status: "Scheduled"
//     },
//     {
//         pID: "P007",
//         name: "Arjun Gupta",
//         reasonForVisit: "Vision issues",
//         assignedDoctor: "Dr. Rajesh Gupta",
//         scheduleDetails: "2024-07-04, 03:00 PM",
//         status: "Canceled"
//     },
//     {
//         pID: "P008",
//         name: "Mira Joshi",
//         reasonForVisit: "Anxiety",
//         assignedDoctor: "Dr. Kavita Joshi",
//         scheduleDetails: "2024-06-27, 10:00 AM",
//         status: "Completed"
//     },
//     {
//         pID: "P009",
//         name: "Rohan Deshmukh",
//         reasonForVisit: "Ear infection",
//         assignedDoctor: "Dr. Sanjay Kumar",
//         scheduleDetails: "2024-07-05, 09:00 AM",
//         status: "Scheduled"
//     },
//     {
//         pID: "P010",
//         name: "Saanvi Desai",
//         reasonForVisit: "Toothache",
//         assignedDoctor: "Dr. Aarti Deshmukh",
//         scheduleDetails: "2024-06-26, 11:00 AM",
//         status: "Completed"
//     }
// ];
export const DUMMY_PATIENTS = [
    {
      pID: "P001",
      name: "Aarav Sharma",
      reasonForVisit: "Chest pain",
      assignedDoctor: "Dr. Anjali Sharma",
      specialization: 'Cardiologist',
      scheduleDetails: "2024-07-01, 10:00 AM",
      date: "2024-07-01",
      time: "10:00 AM",
      status: "Scheduled"
    },
    {
      pID: "P002",
      name: "Isha Gupta",
      reasonForVisit: "Skin rash",
      assignedDoctor: "Dr. Rohan Verma",
      specialization: 'Dermatologist',
      scheduleDetails: "2024-06-28, 02:00 PM",
      date: "2024-06-28",
      time: "02:00 PM",
      status: "Completed"
    },
    {
      pID: "P003",
      name: "Nikhil Kumar",
      reasonForVisit: "Headache",
      assignedDoctor: "Dr. Meera Iyer",
      specialization: 'Neurologist',
      scheduleDetails: "2024-06-30, 11:30 AM",
      date: "2024-06-30",
      time: "11:30 AM",
      status: "Canceled"
    },
    {
      pID: "P004",
      name: "Anaya Singh",
      reasonForVisit: "Routine check-up",
      assignedDoctor: "Dr. Vikram Singh",
      specialization: 'Pediatrician',
      scheduleDetails: "2024-07-02, 09:00 AM",
      date: "2024-07-02",
      time: "09:00 AM",
      status: "Scheduled"
    },
    {
      pID: "P005",
      name: "Kabir Patel",
      reasonForVisit: "Knee pain",
      assignedDoctor: "Dr. Neha Patel",
      specialization: 'Orthopedic Surgeon',
      scheduleDetails: "2024-06-29, 01:00 PM",
      date: "2024-06-29",
      time: "01:00 PM",
      status: "Completed"
    },
    {
      pID: "P006",
      name: "Riya Menon",
      reasonForVisit: "Pregnancy check-up",
      assignedDoctor: "Dr. Priya Menon",
      specialization: 'Gynecologist',
      scheduleDetails: "2024-07-03, 12:00 PM",
      date: "2024-07-03",
      time: "12:00 PM",
      status: "Scheduled"
    },
    {
      pID: "P007",
      name: "Arjun Gupta",
      reasonForVisit: "Vision issues",
      assignedDoctor: "Dr. Rajesh Gupta",
      specialization: 'Ophthalmologist',
      scheduleDetails: "2024-07-04, 03:00 PM",
      date: "2024-07-04",
      time: "03:00 PM",
      status: "Canceled"
    },
    {
      pID: "P008",
      name: "Mira Joshi",
      reasonForVisit: "Anxiety",
      assignedDoctor: "Dr. Kavita Joshi",
      specialization: 'Psychiatrist',
      scheduleDetails: "2024-06-27, 10:00 AM",
      date: "2024-06-27",
      time: "10:00 AM",
      status: "Completed"
    },
    {
      pID: "P009",
      name: "Rohan Deshmukh",
      reasonForVisit: "Ear infection",
      assignedDoctor: "Dr. Sanjay Kumar",
      specialization: 'ENT Specialist',
      scheduleDetails: "2024-07-05, 09:00 AM",
      date: "2024-07-05",
      time: "09:00 AM",
      status: "Scheduled"
    },
    {
      pID: "P010",
      name: "Saanvi Desai",
      reasonForVisit: "Toothache",
      assignedDoctor: "Dr. Aarti Deshmukh",
      specialization: 'Dentist',
      scheduleDetails: "2024-06-26, 11:00 AM",
      date: "2024-06-26",
      time: "11:00 AM",
      status: "Completed"
    }
  ];
  