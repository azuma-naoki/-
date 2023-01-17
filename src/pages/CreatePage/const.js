export const maxIndex = 10;
//初期値
export const initialStates = {
    common: {
        grid:false,
    },
    line: {
        type:"line",
        linestyle:"solid", 
        color:"#0084ff",    
        legend:"",
        pointStyle:"circle",
        pointRadius:"4",
    },
    bar: {
        type:"bar",
    },
    scatter: {
        type:"scatter",
    },
    bubble: {
        type:"bubble",    
    },
    pie: {
        type:"pie",
        colors:[
            "#FF0000",
            "#FFA500",            
            "#FFFF00",
            "#008000",
            "#00FFFF",
            "#0000FF",
            "#800080"
        ]
    },
    doughnut: {
        type:"doughnut",
        colors:[
            "#FF0000",
            "#FFA500",
            "#FFFF00",
            "#008000",
            "#00FFFF",
            "#0000FF",
            "#800080"
        ]
    },
    polarArea: {
        type:"polarArea",
        colors:[
            "#FF0000",
            "#FFA500",
            "#FFFF00",
            "#008000",
            "#00FFFF",
            "#0000FF",
            "#800080"
        ]
    },
    radar: {
        type:"radar",        
    }
}