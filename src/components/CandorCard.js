
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  breadCrumb: {
    color: 'white'
  },
  responses: {
    color: 'white',
    opacity: 0.75
  }
});

const CandorCard = () => {
    const classes = useStyles();
    return (
      <div>
        <Box fontWeight="fontWeightBold">
          Coleman H / Glenn L
        </Box>
        <h2>Why hasn't Canada developed their own COVID-19 vaccine?</h2>
        <Box classes={{root: classes.responses}}>7 responses</Box>
      </div>
    )
}

export default CandorCard
