import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const CollectionCard = ({title, imgPath, collectionId}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, width: 250, height: 350 }}>
      <CardActionArea component={Link} to="/questions">
        <CardMedia
          component="img"
          height="250"
          image={imgPath}
          alt="nft collection img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {collectionId}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default CollectionCard;