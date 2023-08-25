import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(3);
  const [third, setThird] = useState(6);

  const removePicture = (id) => {
    let newPictures = first.filter(image => image.id !== id);
    setFirst(newPictures);

  }

  
  const previousPictures = () => {
    setFirst((first => {

// здесь почему-то выдаёт ошибку, когда ставишь -3 (минус 3)
      // и во всех аналогичных строках, где -3 и +3
      
      first --;     
      return first;
    }));

    setSecond ((second => {
      second --;
      return second;
    }));
    
    setThird ((third => {
      third --;
      return third;
    }))
  }

  const nextPictures = () => {
    setFirst((first => {
      first ++;
      return first;
    }));
    setSecond((second => {
      second ++;
      return second;
    }));
    setThird((third => {
      third ++;
      return third;
    }))
  }

  return(
    
    <div>
      
      <div className='container'>
        <h1>Какая картинка лишняя?</h1>
      </div>

      <div className='containerPictures'>
        {data.slice(first, second, third).map((picture => {
        const {id, image, description} = picture;

          return(
            <div key={id}>
              <div >
                <img src={image} width="350px" alt='Pictures'/>
              </div>
              <div className='container'>
                <h3>{id} - {description}</h3>
              </div>
              <div className='container'>
                <button onClick={() => removePicture(id)} className='btn-del'>Удалить</button>
              </div>
            </div>)
      }))}
</div>
      <div className='container btn'>
        <button className='btn-option' onClick={previousPictures}>Назад</button>
        <button className='btn-option' onClick={nextPictures}>Вперед</button>
      </div>
    </div>
  )
}

export default App;
