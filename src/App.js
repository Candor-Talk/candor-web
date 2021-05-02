import { Grid, Box, makeStyles } from '@material-ui/core';
import CandorCard from './components/CandorCard';
import './components/VideoPlayer/ResponsivePlayer.jsx'
import ResponsivePlayer from './components/VideoPlayer/ResponsivePlayer.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: 'auto',
      height: theme.spacing(50),
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box p={5}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <CandorCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.root}>
               <ResponsivePlayer />
            </div>
          </Grid>
          <Grid item container md={4} xs={12}>
            <Box display="flex" alignItems="flex-end" textAlign="center" pb={5}>
              <div>
                <h1>Join the conversation!</h1>
                <p style={{ opacity: 0.75 }}>Download Candor to comment, like, and start your own conversations.</p>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
