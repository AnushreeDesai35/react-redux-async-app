import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
  typography:{
    padding: theme.spacing(1, 2, 1, 2)
  },
  chipBorder: {
    borderRadius: '10%',
    margin: theme.spacing()
  },
  iconWidth: {
    minWidth: '32px',
  }
}));

export function ProductInfo({salesData}) {

  const classes = useStyles();
  const navigations = [
    {
      'text': 'OVERVIEW',
      'logo': <HomeOutlinedIcon/>,
    },
    {
      'text': 'SALES',
      'logo': <BarChartOutlinedIcon/>
    }
  ];

  return (
  <>
      <Box className="image-container">
        <img src={salesData.image} alt="product" className={classes.image}/>
      <Typography className={classes.typography} align="center" variant="h6">{salesData.title}</Typography>
      <Typography className={classes.typography} align="center" variant="subtitle1" color="textSecondary">{salesData.subtitle}</Typography>
      </Box>
      <Divider />
      <Box m={2}>
      {salesData.tags.map((tag, index) => <Chip className={classes.chipBorder} label={tag} variant="outlined" key={index} />)}
      </Box>
      <Divider />
      <Box>
        <List component="nav">

        {navigations.map((item, index) => {
          return (
            <ListItem>
            <ListItemIcon className={classes.iconWidth}>{item.logo}</ListItemIcon>
            <ListItemText>
            <Typography variant="subtitle2">{item.text}</Typography>
            </ListItemText>
          </ListItem>)
        })}
        </List>
      </Box>
  </>
  );
}

ProductInfo.propTypes = {
  salesData: PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      subtitle: PropTypes.string,
      brand: PropTypes.string,
      reviews: PropTypes.array,
      retailer: PropTypes.string,
      details: PropTypes.array,
      tags: PropTypes.array,
      sales: PropTypes.array,
    }
  )
};
