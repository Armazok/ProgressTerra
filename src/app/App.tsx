import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Header} from "components/header/header";
import {AppRouter} from "app/providers";

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Header>
                <Link to={'/'}>Главная</Link>
                <Link to={'/bonus'}>Бонусы</Link>
            </Header>
            <AppRouter/>
        </div>
    );
};

export default App;
