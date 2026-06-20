import './App.scss';
import headshot from './public/headshot.jpg';

function App() {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <img src={ headshot } alt="Ivan's headshot" className='headshot' />
                    <p>
                        biobiobiobiobiobiobiobio   
                    </p>
                    <section className='links'>
                        <div>
                            <a href='https://github.com/ivanbetancxurt' target='_blank' rel='noopener noreferrer'>GitHub</a>                        
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/ivan-andre-betancourt/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> 
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/ivan-andre-betancourt/' target='_blank' rel='noopener noreferrer'>sum else</a> 
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;
