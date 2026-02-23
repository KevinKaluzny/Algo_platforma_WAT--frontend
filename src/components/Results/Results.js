import TextField from "@mui/material/TextField";

function Results() {
	return (
		<div>
			<h2>Wyniki</h2>

			<h3>Tytuł zadania</h3>
      <p>Polecenie zadania. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat sodales dapibus. Praesent semper ullamcorper commodo. Fusce vitae quam ornare, varius tellus quis, dictum diam. Aenean aliquet lectus quis nisi.</p>
      <TextField id="outlined-multiline-flexible" label="Testy jednostkowe" multiline size="small" margin="normal" fullWidth value=""  />
      <TextField id="outlined-multiline-flexible" label="Wzorcowe rozwiązanie" multiline size="small" margin="normal" fullWidth value=""  />
		</div>
	);
}

export default Results;