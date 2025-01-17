const image=document.querySelector('img')

const key=`6PBA0ZcQMHvw4PBqEGZ17BylGG4to0Gv`

// get weather iformation
 const getWeather=async(id)=>{
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

// get city iformation
const getCity=async(city) =>{
const base=`http://dataservice.accuweather.com/locations/v1/cities/search`;
const query=`?apikey=${key}&q=${city}`;

const response= await fetch(base + query);

const data = await response.json();
console.log(data);


return data[0];
}

weatherAlert=async function(){

   const base=`http://dataservice.accuweather.com/locations/v1/adminareas/`
   const query=`${"BF"}?apikey=${key}`;
   
   const response= await fetch(base+query);
   const data=await response.json();
   console.log(data);
   
   return
}

weatherAlert();
// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data =>{
//         console.log(data)
//     });

    



