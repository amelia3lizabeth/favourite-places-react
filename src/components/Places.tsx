interface PlacesProps {
    title: string;
    placeName: string;
    country: string;
    image: string;
    attributeImage: string;
    location: string;
    whyLike: string;
  }
  
  function Places(props: PlacesProps): JSX.Element {
    return (
      <section>
        <img src = {props.image}/>
        <h2>{props.title}</h2>
        <h4>{props.placeName}, {props.country} <a href = {props.location}>(map link)</a></h4>
        <p>
          {props.whyLike}
        </p>
      </section>
    );
  }
  
  export default Places;
  