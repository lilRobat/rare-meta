import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const NftCard = ({name, imgPath, owner}) => {
  return (
    <Card sx={{ minWidth: 250, margin: 2, width: 250, height: 350, display: "inline-flex"}}>
      <CardActionArea component={Link} to={`/collection/${owner}`}>
        <CardMedia
          component="img"
          height="250"
          image={imgPath}
          alt="nft collection img"
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {owner}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default NftCard;