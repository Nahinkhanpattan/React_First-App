import "./assets/style.css"
import ProfileCard from "./components/ProfileCard"
import TheatreCard from './components/TheatreCard'
import reactLogo from "./assets/react.svg";


export default function App() {
 return( <>
  {/* <ProfileCard></ProfileCard> */}
  <div className="cardContainer">
  <TheatreCard card={{name:"lion king",img:"https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg", dis:"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.After the murder of his ..."}}></TheatreCard>
  <TheatreCard card={{name:"godzilla",img:"https://m.media-amazon.com/images/M/MV5BODE2NTdmMmYtY2U1OS00MjExLWIwNjQtYjQ5NTA0ZDZmZjZiXkEyXkFqcGc@._V1_.jpg", dis:"The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."}}></TheatreCard>
  <TheatreCard card={{name:"king kong",img:"https://m.media-amazon.com/images/M/MV5BMWY0NWE0ZjUtNjRlOS00ZDViLTgxNTQtMGMwN2FhNDY1YTg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", dis:"A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives."}}></TheatreCard>
  </div>
  </>
)}