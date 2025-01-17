// import * as updateCity from "./index";

const image=document.querySelector('img')

const key=`3VbLTlV2tZaZ5ABYwA8EoUIQVG8TShGD`
  getWeather=async(id)=>{
    const base= `http://dataservice.accuweather.com/currentconditions/v1/`
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base+query)
    const data=await response.json();
    console.log(data);

    console.log(data[0].IsDayTime
    );
    
    if (data[0].IsDayTime==false){
      
          }
    return data[0];
    
 }

const getCity=async(city) =>{
const base=`http://dataservice.accuweather.com/locations/v1/cities/search`;
const query=`?apikey=${key}&q=${city}`;
const response= await fetch(base + query);
const data = await response.json();
console.log(data);
return data[0];
}
weatherAlert=async function(cityid){
   const base=`http://dataservice.accuweather.com/alarms/v1/1day/`
   const query=`${cityid}?apikey=${key}`;
   const response= await fetch(base+query);
   const data=await response.json();
   console.log(data);
   return data
}




