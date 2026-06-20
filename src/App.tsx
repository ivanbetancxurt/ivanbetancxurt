import './App.scss';
import headshot from './public/headshot.jpg';

function App() {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <img src={ headshot } alt="Ivan's headshot" width='100px' />
                    <div>
                        list of links
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
