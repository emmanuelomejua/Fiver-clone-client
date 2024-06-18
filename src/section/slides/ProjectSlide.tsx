import './style.scss';
import { projects } from '../../data';
import ProjectCards from '../../components/cards/ProjectCards';
import Slider from '../../components/slides/Slider';





const ProjectSlide = () => {
  return (
      <Slider deviceType="">
        {
          projects.map((item, index) => (
            <ProjectCards key={index} item={item} />
          ))
        }
      </Slider>
  )
}

export default ProjectSlide
