import './App.css';

function Card(props) {
  return (
    <div className="Card">
      <img src={props.src} alt=""/>
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Card;
