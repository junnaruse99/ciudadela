import { IHuman } from "@/interfaces/IHuman";
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Skeleton, Tooltip, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';

interface IHumanProps {
    human?: IHuman
}

const HumanComponent = (props: IHumanProps) => {
    let statusColor : {[status: string]: "success" | "error" | "warning"} = {
        "alive": "success",
        "death": "error",
        "unknown": "warning"
    }

    let genderColor : {[status: string]: "primary" | "default"} = {
        "male": "primary",
        "female": "default"
    }

    if (props.human === undefined) return (
        <Card sx={{ width: 350, minHeight: 400 }}>
            <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={250} />
                <CardContent>
                    <Skeleton style={{marginTop: '10px'}} variant="rectangular" width="60%" height={30} />
                    <Skeleton style={{marginTop: '10px'}} variant="rectangular" width="80%" height={60} />
                </CardContent>
            </CardActionArea>
        </Card>
    )

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.human.image}
                    alt={props.human.name}
                /> 

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{marginBottom: "15px"}}>
                        {props.human.name}
                        {props.human.type && ` (${props.human.type})`}
                    </Typography>
                    <Chip label={props.human.status} color={statusColor[props.human.status.toLowerCase()] || "warning"} style={{marginRight: '10px'}}/>
                    <Chip label={props.human.gender} color={genderColor[props.human.gender.toLowerCase()] || "warning"} />
                    <Divider style={{marginTop: '20px'}}/>
                    <Tooltip title="Location">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                    <LocationOnIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.human.location.name} />
                    </ListItem>
                    </Tooltip>
                    <Divider />
                    <Tooltip title="Origin">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PublicIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.human.origin.name} />
                    </ListItem>
                    </Tooltip>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default HumanComponent;