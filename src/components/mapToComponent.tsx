//import { isPropertySignature } from "typescript";
import Places from "./Places";

interface PlacesProps {
  title: string;
  placeName: string;
  country: string;
  image: string;
  location: string;
  whyLike: string;
}

function mapToComponent(props: PlacesProps): JSX.Element {
  return (
    <Places
      title={props.title}
      placeName={props.placeName}
      country={props.country}
      image={props.image}
      location={props.location}
      whyLike={props.whyLike}
    />
  );
}

//This function returns a JSX element. This function calls the PLACES function and helps to configure the
//data entered into the right format so that the PLACES function can take it in and create the html that will
//rendered onto the web page
//JSX element is a mixture of Javascript and HTML

export default mapToComponent;
