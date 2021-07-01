const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");

const dataHide = document.querySelector(".middle_layer");



const getInfo = async (event) => {
    event.preventDefault();
    const cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "please write the name before search";
        dataHide.classList.add("data_hide");
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0e4aefeb8d0710fdb528444e40a90316`;
            // let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=054c4463e50ce5632d7bb124c3ec2cc9`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(data);

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'> </i>"
            }
            else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'> </i>"
            }
            else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class = 'fas fa-rain' style = 'color:#a4b0be;'> </i>"
            }
            else {
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'> </i>"
            }
            dataHide.classList.remove("data_hide");

        }
        catch (err) {
            console.log(err);
            dataHide.classList.add("data_hide");
            city_name.innerText = `please enter the city name properly = ${cityVal}`;
        }

    }
}

submitBtn.addEventListener("click", getInfo);