interface PlacesProps {
  title: string;
  placeName: string;
  country: string;
  image: string;
  location: string;
  whyLike: string;
}

function Places(props: PlacesProps): JSX.Element {
  return (
    <section>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h4>
        {props.placeName}, {props.country}{" "}
        <a href={props.location}>(map link)</a>
      </h4>
      <p>{props.whyLike}</p>
    </section>
  );
}

//this function returns a JSX element which creates the html structure for what the favourite places should look like|
// (how it should be rendered) on the web page
//JSX element is a mixture of Javascript and HTML

export default Places;
