const feching = async () => {
    try {
        const data = await fetch('https://backend-bike-app.onrender.com/api/station')
            .then(response => response.json())
            .then(data => data)
    } catch (error) {

    }
}


module.exports = feching