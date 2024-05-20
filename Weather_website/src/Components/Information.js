import React from 'react'
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud, Height } from '@mui/icons-material'

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
})


export default function Information({ result, path }) {
    return (
        result && Object.keys(result).length > 0 ?
            <Box sx={{
                paddingLeft: { xs: '5px', sm: '10px', md: '15px', lg: '20px' },
                maxHeight: { xs: '50%', sm: '70%', md: '85%', lg: '92%' },
                overflow: 'scroll'
            }}>
                <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
                <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
                <Row><Opacity />Humidity: {result.main.humidity}</Row>
                <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
                <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
                <Row><Cloud />Clouds: {result.clouds.all}%</Row>


                {path === "eventPlan" && <p>
                    {result.main.temp > 20 && result.main.temp < 30 &&
                        <div>
                            <b>According to today's temperature ideas for Event Planners are :</b>
                            <ol>
                                <li>
                                    Outdoor Events:
                                    <ul>
                                        <li>
                                            Utilize the pleasant weather for outdoor events like garden parties, picnics, or outdoor weddings, taking advantage of the comfortable temperature
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Themed Parties:
                                    <ul>
                                        <li>
                                            Organize themed parties inspired by the season, such as spring parties or summer beach themes, incorporating decor and activities suitable for the temperature range
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Safety Measures:
                                    <ul>
                                        <li>
                                            Ensure appropriate measures are in place for guest comfort, including providing shade, hydration stations, and sunscreen for outdoor events to mitigate any discomfort from warmer temperatures
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Adjust Venue Temperatures:
                                    <ul>
                                        <li>
                                            Monitor indoor venue temperatures to maintain comfort levels, considering factors like ventilation and air conditioning to keep guests comfortable during the event
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Flexible Attire Recommendations:
                                    <ul>
                                        <li>
                                            Provide dress code suggestions that are suitable for the weather, such as light and breathable fabrics for warmer temperatures, while ensuring guests are informed and prepared for the expected conditions
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Variety in Food and Beverage Selections:
                                    <ul>
                                        <li>
                                            Curate menus featuring refreshing and hydrating options like chilled beverages, salads, and fruit platters to complement the season and temperature
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Optimized Event Timings:
                                    <ul>
                                        <li>
                                            Plan event schedules to avoid peak temperatures, such as hosting outdoor activities in the morning or evening to offer a more comfortable experience for attendees
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
                </p>}


                {path === "farmer" && <p>
                    {result.main.temp > 20 && result.main.temp < 30 &&
                        <div>
                            <b>According to today's temperature ideas for Farmers are :</b>
                            <ol>
                                <li>
                                    Planting and Germination
                                    <ul>
                                        <li>
                                            This temperature range is ideal for seed germination for many crops, including vegetables and cereals. Farmers can take advantage of this period to plant seeds as the soil temperature is optimal for rapid and healthy germination
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Vegetable Growth
                                    <ul>
                                        <li>
                                            Vegetables such as beetroot, cauliflower, broccoli, and green peas thrive in this temperature range. This is an ideal time for cultivating these crops as they grow best in moderate temperatures
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Fruit Plant Development
                                    <ul>
                                        <li>
                                            Many fruit plants have an optimal growth temperature within this range. This period can be utilized for ensuring the healthy development of fruit-bearing plants like tomatoes and peppers, which require warm but not excessively hot conditions                                         </li>
                                    </ul>
                                </li>
                                <li>
                                    Potato Quality Improvement
                                    <ul>
                                        <li>
                                            For potatoes, maintaining day temperatures between 18°C to 20°C and avoiding drought stress is crucial to prevent issues like black spot bruising. This temperature range supports optimal growth and quality improvement in potatoes                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    General Crop Management
                                    <ul>
                                        <li>
                                            This temperature range supports overall healthy growth for a wide range of crops in temperate climates. Farmers can focus on general crop management practices, such as fertilization and pest control, to enhance crop yield and health                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
                </p>}


                {path === "travel" && <p>
                    {result.main.temp > 20 && result.main.temp < 30 &&
                        <div>
                            <b>According to today's temperature ideas for Travelers are :</b>
                            <ol>
                                <li>
                                    Layering Clothing:
                                    <ul>
                                        <li>
                                            Opt for a layered approach to clothing, allowing flexibility to adjust to changing temperatures throughout the day. Start with a moisture-wicking base layer, add insulating mid-layers, and top it off with a breathable outer layer
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Comfortable Footwear:
                                    <ul>
                                        <li>
                                            Wear comfortable shoes suitable for walking, considering both closed and open-toed options depending on the activities planned
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Protection from the Sun:
                                    <ul>
                                        <li>
                                            Carry and regularly apply sunscreen, wear sunglasses, and bring a wide-brimmed hat to shield yourself from the sun's rays
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Hydration:
                                    <ul>
                                        <li>
                                            Stay hydrated by carrying a reusable water bottle and drinking plenty of fluids, especially in warmer temperatures to prevent dehydration
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Shade and Rest:
                                    <ul>
                                        <li>
                                            Seek shade during the hottest parts of the day and take breaks to rest and cool down, especially if engaging in strenuous activities
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Flexible Itinerary:
                                    <ul>
                                        <li>
                                            Plan outdoor activities during cooler times of the day, such as early morning or late afternoon, to avoid the peak heat
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Adapted Activities:
                                    <ul>
                                        <li>
                                            Choose activities that are suitable for the temperature range, such as hiking in cooler, shaded areas or enjoying water-based activities to cool off in warmer weather
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
                </p>}
            </Box>
            : <Error>Please enter the values to check weather</Error>
    )
}
