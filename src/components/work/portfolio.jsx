import React from 'react'

const Portfolio = () => {
   
        const myProjects = [
    {   id:1,
        title: "PaniPuri Paradise",
        description: "A vibrant food website showcasing the joy of street food.",
        image: "path/to/panipuri-paradise.jpg",
        link: "https://panipuri-paradise.com/"
    },
    {   id:2,
        title: "India Travel With Sid",
        description: "Explore India with curated travel guides and itineraries.",
        image: "path/to/india-travel-with-sid.jpg",
        link: "https://indiatravelwithsid.com/"
    },
    {   id:3,
        title: "Beautiful Coordinates (BEAUCO)",
        description: "Promoting unique, lesser-known travel destinations.",
        image: "path/to/beauco.jpg",
        link: "https://beauco.in/"
    },
    {   id:4,
        title: "Yellow Design Cafe",
        description: "Showcasing creative solutions in architecture and interiors.",
        image: "path/to/yellow-design-cafe.jpg",
        link: "https://yellowdesigncafe.com/"
    },
    {   id:5,
        title: "InDecor Home Solutions",
        description: "A platform for tailored home decor solutions.",
        image: "path/to/indecor-home-solutions.jpg",
        link: "https://indecorhomesolutions.com/"
    },
    {   id:6,
        title: "22 Electric House",
        description: "A professional site for professional services.",
        image: "path/to/22-electric-house.jpg",
        link: "https://22electrichouse.com/"
    },
    {   id:7,
        title: "SignSense",
        description: "A real-time video calling app with ASL sign recognition using TensorFlow.js, MediaPipe, and WebRTC.",
        image: "path/to/signsense.jpg",
        link: "https://github.com/yourusername/signsense"
    }
]; const SingleProject =({Project})=>{
    return(
        <section> {Project.title}</section>

    );

}

        // Add more projects as needed
    
  return (
    <div>
        {myProjects.map((Project =>(
            <SingleProject key={Project.id} Project={Project} />
        )))}
    </div>

  )
}

export default Portfolio;