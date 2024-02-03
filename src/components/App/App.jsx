// import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CardMedium from '../CardMedium/CardMedium';
import Register from '../Register/Register';

import styles from './App.module.scss';

function App() {
	// const { user } = useSelector(state => state);
	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/card" element={<CardMedium />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
