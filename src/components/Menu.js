import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import img1 from '../images/DSC_0977.jpg'
import img2 from '../images/DSC_0978.jpg'
import img3 from '../images/DSC_0979.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: "70%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
const tileData = [
    {
        img: img1,
        title: "Image 1",
        author: "author",
    },
    {
        img: img2,
        title: "Image 2",
        author: "author",
    },
    {
        img: img3,
        title: "Image 3",
        author: "author",
    },
    {
        img: img1,
        title: "Image 1",
        author: "author",
    },
    {
        img: img2,
        title: "Image 2",
        author: "author",
    },
    {
        img: img3,
        title: "Image 3",
        author: "author",
    },
    {
        img: img1,
        title: "Image 1",
        author: "author",
    },
    {
        img: img2,
        title: "Image 2",
        author: "author",
    },
    {
        img: img3,
        title: "Image 3",
        author: "author",
    },
    {
        img: img1,
        title: "Image 1",
        author: "author",
    },
    {
        img: img2,
        title: "Image 2",
        author: "author",
    },
    {
        img: img3,
        title: "Image 3",
        author: "author",
    },
];

const Menu = () => {
    const classes = useStyles();
    const cellHeight = "10%";

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} cols={3} className={classes.gridList} spacing={30}>
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Bread Menu</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default Menu;