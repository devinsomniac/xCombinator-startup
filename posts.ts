interface Post {
    id:number,
    user_name: string;
    user_image: string;
    start_title: string;
    start_desc: string;
    createData: string;
    category: string;
}

const posts: Post[] = [
    {
        id:1,
        user_name: "Inzamam",
        user_image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title: "Hello World",
        start_desc: "A mission to promote sustainable practices and eco-friendly solutions worldwide..",
        createData: "20/10/2000",
        category: "Robot"
    },
    {
        id:2,
        user_name: "Ayesha",
        user_image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title: "Tech Innovations",
        start_desc: "Exploring the latest advancements in AI and machine learning to transform industries.",
        createData: "15/08/2021",
        category: "Technology"
    },
    {
        id:3,
        user_name: "Karan",
        user_image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title: "Green Earth",
        start_desc: "A mission to promote sustainable practices and eco-friendly solutions worldwide.",
        createData: "30/04/2022",
        category: "Environment"
    },
    {
        id:4,
        user_name: "Sara",
        user_image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title: "Health for All",
        start_desc: "Developing accessible healthcare solutions for underserved communities.",
        createData: "05/12/2019",
        category: "Healthcare"
    },
    {
        id:5,
        user_name: "Ahmed",
        user_image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
        start_title: "Future of Robotics",
        start_desc: "Innovating in robotics to simplify daily tasks and improve quality of life.",
        createData: "01/01/2023",
        category: "Robotics"
    }
];

export default posts