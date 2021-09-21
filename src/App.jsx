import style from './style.module.scss'
import shoeData from './links.json'
import { useState,useEffect } from 'react'


const Card = (props) => {
  return (
    <span className={style.card} onClick={()=>{props.setSelected(props.index)}}>
      <img src={props.url} alt="" />
      <h1>{props.title}</h1>
      <p style={(props.selected == props.index) ? { color: "orange" } : {}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iusto.</p>
    </span>
  )
}



function App() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
   setTimeout(()=>{setSelected(3)},2000)
  }, [])

  return (
    <div className={style.con}>
      <nav className={style.topNav}>
        <ul className={style.list}>
          <li>home</li>
          <li>contact</li>
          <li>help</li>
        </ul>
      </nav>
      <div className={style.cardCon}>
        {
          Object.keys(shoeData).map((title, index) => {
            return <Card title={title} url={Object.values(shoeData)[index]} selected={selected} index={index} setSelected={setSelected} />
          })
        }
      </div>

    </div>
  );
}

export default App;
