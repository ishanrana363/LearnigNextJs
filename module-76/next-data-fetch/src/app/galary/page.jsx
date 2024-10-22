import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {/* <Image src="/images/img1.jpeg" alt="Gallery Image" width={500} height={300} /> */}
        {
          [1,2,3,4,5]?.map((item,i)=>{
            return <Image key={i} src={`/images/${item}.jpeg`} alt={`Gallery Image ${item}`} width={500} height={300} />
          })
        }
      </div>
    </div>
  );
}

export default Gallery;
