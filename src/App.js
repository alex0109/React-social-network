import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Music from './components/Music/Music';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<HeaderContainer />
				<Navigation/>
				<div className="content">
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
					<Route path='/dialogs' render={() => <DialogsContainer/>} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/login' render={() => <Login />} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
