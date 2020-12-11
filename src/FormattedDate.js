



export default function FormattedDate(props){
   let days= [
       "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday",
     "Thursday", "Friday",
      "Saturday"
    ];
    
    
   let day= days[props.date.getDay()];
   let minutes=props.date.getMinutes();
   if (minutes < 10){ minutes= `0${minutes}`};
   let hours = props.date.getHours();
   if (hours < 10){ hours= `0${minutes}`};
   
   

    return `${day}  ${hours}:${minutes}`
}

//Wed Dec 02 2020 18:42:21