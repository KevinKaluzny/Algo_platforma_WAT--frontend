import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import styles from './Parameters.module.scss';

const marks = [
  {
    value: 0,
    label: 'łatwy',
  },
  {
    value: 50,
    label: 'średni',
  },
  {
    value: 100,
    label: 'trudny',
  },
];

function Parameters() {
	return (
		<div>
			<h2>Parametry</h2>

			<TextField id="outlined-basic" label="Tytuł" variant="outlined" size="small" margin="normal" fullWidth  />
			<TextField id="outlined-multiline-flexible" label="Opis" multiline rows={4} size="small" margin="normal" fullWidth  />
			<p>Poziom trudności:</p>
			<Slider className={styles.slider} aria-label="Custom marks" defaultValue={0} step={50} marks={marks}  />
			<Button variant="contained">Generuj</Button>
		</div>
	);
}

export default Parameters;