import { h } from 'preact';
import style from './home.css';

const Home = () => (
	<main class={style.home}>
		<img class={style.image} src="../assets/jeyj0.png" />
		<h1>Jannis Jorre</h1>
		<h2>Software Developer</h2>
		<h3>Focused on Web (Frontend)</h3>
		<p>Studying at <a href="https://code.berlin/en/" target="_blank">CODE University of Applied Sciences</a></p>
		<p>Employed at <a href="https://www.arcusx.com/" target="_blank">arcus[x]</a></p>
	</main>
);

export default Home;
