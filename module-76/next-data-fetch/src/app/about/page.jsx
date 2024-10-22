import React from 'react'

export const metadata = {
    title : "About",
    keywords : ["about","about page"],
    description : "about page description",
}

const getTime = async () =>{
  let res = await fetch(`http://localhost:3000/time`,{next : { revalidate : 5 }})
  let data = await res.json();
  return data.currentTime;
};

const AboutPage = () => {
  const currentTime = getTime();
  return (
    <div>
        <h1>About page</h1>
        <p>This is the about page. Current time is {currentTime}</p>
    </div>
  )
}

export default AboutPage
