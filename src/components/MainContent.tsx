// import Places from "./Places";
import mapToComponent from "./mapToComponent";

const listOfPlaces = [
  {
    title: "Most beautiful Park",
    placeName: "Hyde Park",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkZSUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&ll=51.50353400000001%2C-0.15314300000000447&spn=0.009884%2C0.012295&z=16&mid=1F9N6ZW6Al55VBo25BlbXO3i_wUY",
    whyLike: "Very quiet and peaceful",
  },

  {
    title: "Yummy food and great culture",
    placeName: "China Town",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1587750571762-5aed5f63edaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmElMjB0b3duJTIwdWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.google.com/maps/d/u/0/viewer?mid=1Dtiz83t1jPaHuV6yQZerTq_cilA&hl=en&ll=40.715467%2C-73.997984&z=16",
    whyLike: "I love eating the food and learning the language",
  },

  {
    title: "Amazing mix of cultures and people",
    placeName: "Seoul",
    country: "South Korea",
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VvdWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.google.com/maps/place/Seoul,+South+Korea/@37.5638561,126.9740863,11z/data=!3m1!4b1!4m5!3m4!1s0x357ca2012d5c39cf:0x7e11eca1405bf29b!8m2!3d37.566535!4d126.9779692",
    whyLike: "Amazing blend cultures and people",
  },

  {
    title: "Innovation Hub",
    placeName: "Super Tree Grove",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdGlvbmFsJTIwdW5pdmVyc2l0eSUyMG9mJTIwc2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    location:
      "https://www.google.co.uk/maps/place/Supertree+Grove/@1.2819617,103.861717,17z/data=!3m1!4b1!4m5!3m4!1s0x31da19030a47894f:0xc974a469e9c48096!8m2!3d1.2819617!4d103.8639057",
    whyLike:
      "Singapore is a country of knowledge and innovation, with many beautiful sights to see",
  },
];

const placesList: JSX.Element[] = listOfPlaces.map(mapToComponent);
// the above line returns an Array of JSX Elements. The map() function is used to call the
//function mapToComponent on an array of raw data that is the favourite places. Everything is
//then stored in the created variable. It is stores in the html + javascript that can be rendered
//onto the web page.
//Then in the function MainContent, this array of JSX elements (placesList) is used.
//JSX element is a mixture of Javascript and HTML

function MainContent(): JSX.Element {
  return (
    <main>
      <section>
        <ol>{placesList}</ol>
      </section>
    </main>
  );
}

export default MainContent;
