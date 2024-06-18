import './catcard.scss';

interface itemProp {
    id: number;
    img: string;
    pp: string;
    cat: string;
    username: string;
}


 const ProjectCards = ({item}: {item: itemProp}) => {
  return (
    <div className='projectcard'>
       <img src={item.img} alt=''/>

       <div className="info">
        <img src={item.pp} alt="" className="" />

        <div className="text">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
       </div>
    </div>
  )
}

export default ProjectCards
