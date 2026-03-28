// ─────────────────────────────────────────────────────────────
//  CV DATA — Experience, Education
//  type options: "job" | "education"
// ─────────────────────────────────────────────────────────────
const cvData = {

    experience: [
        {
            role: "Senior Machine Learning Engineer",
            org: "CARIAD SE (Volkswagen Group)",
            location: "Stuttgart, Germany",
            period: "Jan 2023 – Present",
            bullets: [
                "<strong>Feb 2026 – Present:</strong> Offline perception for lane ground-truth generation; designed a lane-color auto-labeling network and integrated Qwen VLM as an automated QC stage for dataset quality.",
                "<strong>Jan 2023 – Jan 2026 (PhD Candidate):</strong> Led design and deployment of a full-scale multi-sensor data collection setup (LiDARs, cameras, IMUs, CAN/GNSS sync), recording 5+ hours of road topography data.",
                "Developed a novel metric-scaled self-supervised pipeline for 3D environment reconstruction using a single monocular image stream — published at WACV 2025.",
                "Built a monocular preview system (PoC) for road topography estimation using a single forward-facing camera feed.",
                "Designed a dense ground truth generation pipeline by temporally fusing LiDAR sweeps, improving 3D reconstruction evaluation benchmarks.",
                "Developed a LiDAR-based odometry pipeline fused with wheel odometry to generate ground truth trajectories for autonomous driving perception stacks."
            ]
        },
        {
            role: "Master's Thesis Researcher",
            org: "Aptiv",
            location: "Wuppertal, Germany",
            period: "Feb 2022 – 2023",
            bullets: [
                "Researched efficient and robust reduction of bounding boxes from multi-class neural network output for vehicular radar systems."
            ]
        },
        {
            role: "Machine Learning Researcher (Part-time)",
            org: "Interautomation GmbH",
            location: "Berlin, Germany",
            period: "Aug 2021 – Feb 2022",
            bullets: [
                "Enhanced the accuracy of a neural APC (LSTM-based) system for automatic passenger counting in train wagons."
            ]
        },
        {
            role: "Student Worker — Computer Vision",
            org: "Science of Intelligence Cluster",
            location: "Berlin, Germany",
            period: "Feb 2021 – Feb 2022",
            bullets: [
                "Built a fully controlled framework for a Panda robot to capture video data using a Phantom high-speed camera.",
                "Developed a Python algorithm for optimizing alignment of Event-based camera output."
            ]
        },
        // ── Add new roles here ────────────────────────────────────────────
        // { role, org, location, period, bullets: ["..."] }
    ],

    education: [
        {
            degree: "PhD Candidate — Autonomous Systems / Computer Vision",
            org: "Technical University of Berlin",
            location: "Berlin, Germany",
            period: "Jan 2023 – Present",
            bullets: [
                "Monocular reconstruction for road topography estimation in automotive applications.",
                "Computer Vision & Remote Sensing Lab."
            ]
        },
        {
            degree: "M.Sc. Information and Communication Technology",
            org: "KTH Royal Institute of Technology",
            location: "Stockholm, Sweden",
            period: "Aug 2021 – 2023",
            grade: "Grade: A",
            bullets: [
                "Major in Autonomous Systems; Minor in Innovation and Entrepreneurship.",
                "Second year of EIT (European Institute of Technology) double-degree program."
            ]
        },
        {
            degree: "M.Sc. Information and Communication Technology",
            org: "Technical University of Berlin",
            location: "Berlin, Germany",
            period: "Oct 2020 – 2023",
            grade: "Grade: 1.4 (Sehr Gut)",
            bullets: [
                "Major in Autonomous Systems; Minor in Innovation and Entrepreneurship.",
                "First year of EIT double-degree program."
            ]
        },
        {
            degree: "Bachelor's Thesis — Optical Wave Propagation",
            org: "Institute of Optics, Stuttgart University",
            location: "Stuttgart, Germany",
            period: "Mar 2019 – Aug 2019",
            grade: "Grade: Excellent",
            bullets: [
                "Developed an algorithm for optical wave propagation for WGM sensors using MATLAB, OpenCV, and Python."
            ]
        },
        {
            degree: "B.Sc. Mechatronics, Robotics and Automation",
            org: "German University in Cairo",
            location: "Cairo, Egypt",
            period: "Oct 2015 – Aug 2020",
            grade: "GPA 0.91 / 1.0 — Excellent with Highest Honours",
            bullets: [
                "Ranked 6th among 290 students.",
                "Key courses: Computer Vision, Robotics, Autonomous Systems, OOP."
            ]
        },
        // ── Add new education entries here ────────────────────────────────
        // { degree, org, location, period, grade (optional), bullets: ["..."] }
    ]
};
