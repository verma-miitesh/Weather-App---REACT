import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/611879528/photo/evening-over-noida-delhi-buildings.webp?a=1&b=1&s=612x612&w=0&k=20&c=8cCqAqPpaZJDIrndCmzPGoK7jS3Zq3b5MK6kBMN_BSA=";
    const HOT_URL="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbnRlciUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/517643357/photo/thunderstorm-lightning-with-dark-cloudy-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ufv3IH6RegxaNoj7z31x72pGQQ-YaH9j1UiPDU4jO_A=";


    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAIN_URL : (info.temp > 15 ) ? HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity>80 ? <ThunderstormIcon/> : (info.temp > 15 ) ? <WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min temp = {info.tempMin}&deg;C</div>
            <div>Max temp = {info.tempMax}&deg;C</div>
            <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
            
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}