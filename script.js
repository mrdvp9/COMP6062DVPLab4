//Area of Tringle
function forTringleArea(base, height)
{
	return (base * height) / 2;
}

//Volume of a sphere
function forSphereVolume(radius)
{
    return (4/3) * 3.14 * (radius ** 3);
}

///Convertion distance of varying units to meters
function cvtOfDist(distance, unit)
{
    switch(unit)
    {
        case 'km':
            return distance * 1000;
            break;

        case 'm':
            return "short circuit";
            break;

        case 'y':
            return distance * 0.9144; // 1 yard = 0.9144 meters
            break;

        case 'mi':
            return distance * 1609.34; // 1 mile = 1609.34 meters
            break;

        default:
            return "short circuit";
            break;
    }
}

//time string to seconds
function timeToSeconds(time) 
{
    let units = time.trim().split(':');
    let unitsLength = units.length;

    let hours = 0;
    let minutes= 0;
    let seconds = 0;
    let answer = 0;

    switch(unitsLength)
    {
        case 3: // HH:MM:SS
            hours = Number(units[0]);    
            minutes = Number(units[1]);   
            seconds = Number(units[2]);  
            break;
        case 2: //MM:SS
            minutes = Number(units[0]);   
            seconds = Number(units[1]);  
            break;
        case 1: //SS
            seconds = Number(units[0]); 
            break;
        default:
            break;
    }
    answer =  (hours * 3600) + (minutes * 60) + seconds;
    return answer;
}


// Printing on console

console.log(forTringleArea(3, 4).toFixed(1)); 
console.log(forTringleArea(5, 7).toFixed(1)); 

console.log(forSphereVolume(3).toFixed(1)); 
console.log(forSphereVolume(5).toFixed(1)); 

console.log(cvtOfDist(50, 'm')); 
console.log(cvtOfDist(100, 'y').toFixed(2)); 
console.log(cvtOfDist(1, 'mi').toFixed(2)); 
console.log(cvtOfDist(1.234, 'km').toFixed(2)); 

console.log(timeToSeconds("02:33:21")); 
console.log(timeToSeconds("00:04:51")); 
console.log(timeToSeconds("04:51")); 
console.log(timeToSeconds("00:13")); 
console.log(timeToSeconds("13")); 

