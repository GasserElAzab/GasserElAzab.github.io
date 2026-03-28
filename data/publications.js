// ─────────────────────────────────────────────────────────────
//  PUBLICATIONS DATA
//  venueClass options: venue-cvpr | venue-wacv | venue-3dv |
//                      venue-iccv | venue-eccv | venue-other
// ─────────────────────────────────────────────────────────────
const papersData = [
    {
        id: "gfm-3dv-2026",
        title: "GfM: Road-Relative, Metric, Self-Supervised Monocular Geometry for Vehicular Applications",
        authors: "Gasser Elazab et al.",
        venue: "3DV 2026",
        venueFull: "International Conference on 3D Vision, 2026",
        venueClass: "venue-3dv",
        image: "docs/gfm_p2/thumbnail.png",
        links: [
            { label: "arXiv",       url: "https://arxiv.org/abs/2512.04303" },
            { label: "PDF",         url: "https://arxiv.org/pdf/2512.04303" },
            { label: "Proceedings", url: "" }
        ],
        abstract: "Ground-relative metric depth estimation for vehicular applications using a novel road-field-based scale prior and self-supervised learning on large-scale driving datasets."
    },
    {
        id: "rl-iavsd-2025",
        title: "Reinforcement Learning for Enhanced Ride Comfort: Vision-Based Speed Control over Road Obstacles",
        authors: "Co-Author",
        venue: "IAVSD 2025",
        venueFull: "International Symposium on Dynamics of Vehicles on Roads and Tracks, 2025",
        venueClass: "venue-other",
        image: "",
        award: "Best Paper Award",
        links: [],
        abstract: "Reinforcement learning approach for vision-based vehicle speed control to improve ride comfort over road obstacles, earning Best Paper Award at IAVSD 2025."
    },
    {
        id: "monopp-wacv-2025",
        title: "MonoPP: Metric-Scaled Self-Supervised Monocular Depth Estimation by Planar-Parallax Geometry in Automotive Applications",
        authors: "Gasser Elazab et al.",
        venue: "WACV 2025",
        venueFull: "IEEE/CVF Winter Conference on Applications of Computer Vision, 2025",
        venueClass: "venue-wacv",
        image: "docs/monopp_p1/thumbnail.png",
        links: [
            { label: "Project Page", url: "https://mono-pp.github.io/" },
            { label: "arXiv",        url: "" },
            { label: "Proceedings",  url: "" }
        ],
        abstract: "Metric-scaled self-supervised monocular depth estimation leveraging planar parallax geometry to recover real-world scale without LiDAR or stereo supervision."
    },
    {
        id: "platooning-iccma-2020",
        title: "Comparative Analysis of Various Control Techniques for a ROS-based Platooning Architecture",
        authors: "Gasser Elazab et al.",
        venue: "ICCMA 2020",
        venueFull: "International Conference on Control, Mechatronics and Automation, Moscow 2020",
        venueClass: "venue-other",
        image: "",
        links: [],
        abstract: "Comparative study of control techniques applied to a ROS-based autonomous vehicle platooning architecture."
    },
    // ── Add new papers here ──────────────────────────────────────
    // {
    //     id: "unique-id",
    //     title: "Paper Title",
    //     authors: "Author 1, Author 2, ...",
    //     venue: "CVPR 2027",
    //     venueFull: "Full venue name, year",
    //     venueClass: "venue-cvpr",
    //     image: "docs/<folder>/thumbnail.png",
    //     award: "Best Paper Award",   // optional
    //     links: [
    //         { label: "arXiv",        url: "https://arxiv.org/abs/..." },
    //         { label: "Project Page", url: "https://..." },
    //         { label: "Code",         url: "https://github.com/..." },
    //         { label: "Proceedings",  url: "https://..." },
    //     ],
    //     abstract: "Short description."
    // },
];
