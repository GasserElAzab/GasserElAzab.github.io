// ─────────────────────────────────────────────────────────────
//  ACTIVITIES & CERTIFICATES DATA
//
//  sections:
//    awards        — Scholarships, recognitions, competitions
//    reviewing     — Academic peer reviewing
//    certificates  — Professional certificates / badges
//    extracurricular — Clubs, leadership, volunteering
// ─────────────────────────────────────────────────────────────
const activitiesData = {

    awards: [
        {
            title: "EIT (European Institute of Technology) Scholarship",
            year: "2020",
            body: "European Institute of Technology",
            description: "Awarded a full scholarship for a double-degree Master's program across TU Berlin (Germany) and KTH Royal Institute of Technology (Sweden)."
        },
        {
            title: "Best Paper Award — IAVSD 2025",
            year: "2025",
            body: "IAVSD International Symposium",
            description: "Co-authored paper on Reinforcement Learning for vision-based ride-comfort control received the Best Paper Award."
        },
        {
            title: "Baden-Württemberg Stipendium",
            year: "2019",
            body: "Baden-Württemberg Foundation",
            description: "Scholarship supporting a research period at Stuttgart University's Institute of Optics."
        },
        {
            title: "IBM Artificial Intelligence Analyst",
            year: "2020",
            body: "IBM",
            description: "Awarded IBM mastery and explorer badges at the AI analyst event held in Cairo, January 2020."
        },
        {
            title: "DAAD Scholarship",
            year: "2016",
            body: "DAAD (German Academic Exchange Service)",
            description: "Scholarship to study the German language in Ulm, Germany for five weeks."
        },
        {
            title: "Top National Ranking — Egyptian General Certificate (Thanaweya Amma)",
            year: "2015",
            body: "Egyptian Ministry of Education",
            description: "Ranked 1st in Dakahliya Governorate and 18th across Egypt in the mathematics section, among 500,000+ students."
        },
        // ── Add new awards here ─────────────────────────────────────
        // { title, year, body, description }
    ],

    reviewing: [
        {
            venue: "CVPR",
            years: ["2025", "2026"],
            fullName: "IEEE/CVF Conference on Computer Vision and Pattern Recognition"
        },
        {
            venue: "3DV",
            years: ["2025", "2026"],
            fullName: "International Conference on 3D Vision"
        },
        // ── Add new reviewing roles here ────────────────────────────
        // { venue, years: ["YYYY"], fullName }
    ],

    certificates: [
        {
            title: "Ericsson Professional Foundation Program",
            issuer: "Ericsson",
            year: "2019",
            description: "Completed ICT program covering novel technologies including Machine Learning and 5G."
        },
        {
            title: "Air Navigation Workshop",
            issuer: "Berlin Aviation Institute",
            year: "2017",
            description: "5-week workshop on navigation and dynamics of aircraft."
        },
        // ── Add new certificates here ────────────────────────────────
        // { title, issuer, year, description, url (optional) }
    ],

    extracurricular: [
        {
            role: "Head of Innovation and Coordination",
            org: "Nawwar GUC",
            location: "Cairo, Egypt",
            period: "Oct 2017 – Jun 2018",
            description: "Led a team of 16 members providing logistics and coordination for events at the German University in Cairo."
        },
        {
            role: "Product Design Associate",
            org: "TEDx GUC",
            location: "Cairo, Egypt",
            period: "Apr 2018 – Sep 2018",
            description: "Designed and manufactured props and supplies for TEDx events — an independent initiative of TED."
        },
        // ── Add new activities here ──────────────────────────────────
        // { role, org, location, period, description }
    ]
};
