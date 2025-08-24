import { Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>MUI Components in Vite</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <br /><br />
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
         a Vite + React app
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
