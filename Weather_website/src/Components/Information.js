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
                    {result.main.temp <= 20 &&
                        <div>
                            <b>According to today's temperature ideas for Event Planners are :</b>
                            <ol>
                                <li>
                                    Provide Heating Solutions:
                                    <ul>
                                        <li>
                                            Utilize portable heaters, fire pits, and heat lamps to keep outdoor spaces warm. This can create cozy spots for guests to gather and stay warm.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Indoor Venues:
                                    <ul>
                                        <li>
                                            Consider hosting the event indoors or in heated tents to protect attendees from the cold. This ensures a controlled environment where guests can stay comfortable.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Warm Refreshments:
                                    <ul>
                                        <li>
                                            Serve hot beverages like coffee, tea, hot chocolate, and warm alcoholic drinks such as mulled wine. Offer warm food options like soups, stews, and toasted snacks to help guests stay warm from the inside out .
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Warm Attire:
                                    <ul>
                                        <li>
                                            Encourage guests to dress warmly and provide blankets, wraps, and even branded scarves or gloves as part of the event package. This not only keeps guests warm but also serves as a memorable takeaway.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Sheltered Areas:
                                    <ul>
                                        <li>
                                            Create sheltered areas with windbreaks or enclosures to protect against wind chill. This can be particularly effective in outdoor settings.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Activity Planning:
                                    <ul>
                                        <li>
                                            Plan activities that keep guests moving, such as dancing, interactive games, or other physical activities that generate body heat and keep guests engaged and warm.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Lighting:
                                    <ul>
                                        <li>
                                            Use warm-colored lighting to create a cozy and inviting atmosphere. This can psychologically make the environment feel warmer.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Communication:
                                    <ul>
                                        <li>
                                            Clearly communicate with guests about the weather conditions and provide recommendations for appropriate attire and preparations. This helps manage expectations and ensures everyone comes prepared.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
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
                    {result.main.temp >= 30 &&
                        <div>
                            <b>According to today's temperature ideas for EventPlanners are :</b>
                            <ol>
                                <li>
                                    Provide Shade:
                                    <ul>
                                        <li>
                                            Set up shaded areas using tents, umbrellas, or canopies to offer relief from direct sunlight
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Hydration Stations:
                                    <ul>
                                        <li>
                                            Keep attendees hydrated by offering water stations throughout the event venue. Consider providing water bottles or installing water fountains
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Cooling Stations:
                                    <ul>
                                        <li>
                                            Create cooling stations with fans, misters, or air-conditioned areas where attendees can take a break from the heat
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Lighter Menu Options:
                                    <ul>
                                        <li>
                                            Serve refreshing and hydrating food and beverage options such as salads, fruits, smoothies, and iced drinks to help attendees stay cool
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Sun Protection:
                                    <ul>
                                        <li>
                                            Encourage attendees to use sunscreen and provide sunscreen stations or complimentary sunscreen samples to protect against sunburn
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Time Management:
                                    <ul>
                                        <li>
                                            Schedule outdoor activities or events during cooler times of the day, such as early morning or late afternoon, to avoid the peak heat hours
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Communication:
                                    <ul>
                                        <li>
                                            Keep attendees informed about the weather conditions and provide tips on staying cool and hydrated through event communications, signage, or announcements
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
                </p>}


                {path === "farmer" && <p>
                    {result.main.temp <= 20 &&
                        <div>
                            <b>According to today's temperature ideas for Farmers are :</b>
                            <ol>
                                <li>
                                    Crop Protection:
                                    <ul>
                                        <li>
                                            Frost Covers and Row Covers:
                                            <p>Use frost blankets or row covers to protect tender plants from cold stress and frost damage.</p>
                                        </li>
                                        <li>
                                            Mulching:
                                            <p>Apply mulch around the base of plants to retain soil warmth and moisture.</p>
                                        </li>
                                        <li>
                                            Greenhouses and Polytunnels:
                                            <p>Utilize greenhouses or polytunnels to provide a controlled environment for temperature-sensitive crops.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Livestock Care:
                                    <ul>
                                        <li>
                                            Shelter:
                                            <p>Ensure livestock have access to warm, dry shelters to protect them from cold winds and rain.</p>
                                        </li>
                                        <li>
                                            Bedding:
                                            <p>Provide ample bedding such as straw to keep animals warm and comfortable.</p>
                                        </li>
                                        <li>
                                            Nutrition:
                                            <p>Increase feed rations to help livestock maintain body heat. High-energy feeds are particularly beneficial.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Water Management:
                                    <ul>
                                        <li>
                                            Insulate Water Sources:
                                            <p>Use insulation to prevent water troughs from freezing. Heated water troughs can also be considered.</p>
                                        </li>
                                        <li>
                                            Regular Checks:
                                            <p>Regularly check and maintain water supplies to ensure animals have access to fresh, unfrozen water.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Equipment and Infrastructure:
                                    <ul>
                                        <li>
                                            Maintain Equipment:
                                            <p>Ensure all farming equipment is winter-ready, including checking antifreeze levels in machinery.</p>
                                        </li>
                                        <li>
                                            Irrigation Systems:
                                            <p>Drain and store irrigation systems properly to prevent freezing damage.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Planting Adjustments:
                                    <ul>
                                        <li>
                                            Cold-Resistant Varieties:
                                            <p>Opt for crop varieties that are more resistant to cooler temperatures and frost.</p>
                                        </li>
                                        <li>
                                            Timing:
                                            <p>Adjust planting and harvesting schedules to avoid the coldest periods, if possible</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Monitoring and Planning:
                                    <ul>
                                        <li>
                                            Weather Monitoring:
                                            <p>Stay updated with weather forecasts to prepare for sudden temperature drops.</p>
                                        </li>
                                        <li>
                                            Emergency Plans:
                                            <p>Develop and implement emergency plans for unexpected cold snaps, ensuring all farm workers are aware of procedures.</p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
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
                    {result.main.temp >= 30 &&
                        <div>
                            <b>According to today's temperature ideas for Farmers are :</b>
                            <ol>
                                <li>
                                    Water Management:
                                    <ul>
                                        <li>
                                            Implement efficient irrigation systems to ensure crops receive adequate water during hot weather
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Shade Structures:
                                    <ul>
                                        <li>
                                            Erect shade structures such as shade nets or cloth covers to protect delicate crops from direct sunlight and heat stress
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Crop Selection:
                                    <ul>
                                        <li>
                                            Opt for heat-tolerant crop varieties that are better suited to high-temperature conditions
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Mulching:
                                    <ul>
                                        <li>
                                            Apply mulch to the soil surface to retain moisture and moderate soil temperature, preventing excessive evaporation
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Time Management:
                                    <ul>
                                        <li>
                                            Schedule farm activities during cooler parts of the day, such as early morning or late evening, to minimize heat exposure for both farmers and livestock
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Livestock Care:
                                    <ul>
                                        <li>
                                            Provide shade and ample water sources for livestock, along with proper ventilation in barns or shelters to prevent heat stress
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Soil Moisture Monitoring:
                                    <ul>
                                        <li>
                                            Regularly monitor soil moisture levels to ensure plants receive adequate hydration, adjusting irrigation schedules as needed
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Heat Stress Management:
                                    <ul>
                                        <li>
                                            Train farm workers on recognizing and managing heat-related illnesses and provide access to shaded rest areas and hydration stations
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
                </p>}


                {path === "travel" && <p>
                    {result.main.temp <= 20 &&
                        <div>
                            <b>According to today's temperature ideas for Travelers are :</b>
                            <ol>
                                <li>
                                    PLayer Clothing:
                                    <ul>
                                        <li>
                                            Opt for a layered approach to clothing, including thermal layers, insulating mid-layers, and a waterproof outer shell. This allows you to adjust your clothing according to changing weather conditions
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    High-Quality Materials:
                                    <ul>
                                        <li>
                                            Invest in high-quality, moisture-wicking fabrics like merino wool, which provide warmth without bulk and can regulate body temperature effectively
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Pack Thermals:
                                    <ul>
                                        <li>
                                            Always carry a set of thermal underwear to provide an extra layer of insulation against the cold
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Warm Accessories:
                                    <ul>
                                        <li>
                                            Bring along warm accessories such as hats, gloves, scarves, and thick socks to protect extremities from frostbite
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Proper Footwear:
                                    <ul>
                                        <li>
                                            Choose waterproof and insulated footwear to keep feet warm and dry, especially if walking in snowy or wet conditions
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Portable Warmth:
                                    <ul>
                                        <li>
                                            Pack portable hand warmers or heated blankets for added warmth during outdoor activities or while traveling in cold conditions
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Plan for Sleeping:
                                    <ul>
                                        <li>
                                            When camping or staying in colder environments, ensure your sleeping bag is rated for temperatures below what you expect to encounter, and use sleeping pads for insulation from the ground
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    }
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
                    {result.main.temp >= 30 &&
                        <div>
                            <b>According to today's temperature ideas for Travelers are :</b>
                            <ol>
                                <li>
                                    Stay Hydrated:
                                    <ul>
                                        <li>
                                            Carry water or electrolyte-rich drinks to prevent dehydration and maintain energy levels.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Dress Appropriately:
                                    <ul>
                                        <li>
                                            Wear lightweight, breathable clothing, a wide-brimmed hat, and sunglasses to protect against the sun's rays. Apply sunscreen regularly.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Plan Outdoor Activities Wisely:
                                    <ul>
                                        <li>
                                            Schedule outdoor activities during cooler times of the day, such as early morning or late evening, and take frequent breaks in shaded areas.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Seek Air-Conditioned Spaces:
                                    <ul>
                                        <li>
                                            When possible, spend time indoors in air-conditioned or well-ventilated areas to avoid overheating.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Be Mindful of Signs of Heat-related Illness:
                                    <ul>
                                        <li>
                                            Learn the symptoms of heat exhaustion and heatstroke, and seek medical help if necessary.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Adjust Travel Plans:
                                    <ul>
                                        <li>
                                            Consider modifying travel plans to include cooler destinations or indoor attractions during peak heat hours.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Stay Informed:
                                    <ul>
                                        <li>
                                            Monitor weather forecasts and heat advisories to prepare accordingly and stay safe during travel.
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
