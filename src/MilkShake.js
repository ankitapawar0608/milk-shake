import './MilkShake.css'



function MilkShake({title,description,imgUrl}) {
  return (
    <>
     
      <div className='container'>
        <img src={imgUrl} className='imgStyle' alt='milk' />

        <h1 className='title'> {title}</h1>
        <h2 className='para'>{description} </h2>  <br />

      </div>
      <br/>
      <br/>

    </>
  );
}

export default MilkShake;
