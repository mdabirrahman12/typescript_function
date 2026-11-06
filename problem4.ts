function getTrafficAction(light:'red'|'yellow'|'green'):string{
    if(light ==="red"){
        return "Stop"
    }
    else if(light ==="yellow"){
        return "Slow Down"
    }
    else if(light ==="green"){
        return "Go"
    }
}

console.log(getTrafficAction("yellow"))
