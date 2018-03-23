export default {
    fetchDailyForecasts: ({ city, country }) =>
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2dbaca56af8c355ab68d62c4714ab889&q=${city},${country}`
        ),
}
