import { app } from './app.js';
import colors from 'colors';

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`.bgMagenta);
});