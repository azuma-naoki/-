export const maxIndex = 10;
//初期値
export const initialStates = {
    common: {
        grid:false,
        title:"",
    },
    line: {
        type:"line",
        linestyle:"solid", 
        color:"#0084ff",    
        legend:"",
        pointStyle:"circle",
        pointRadius:"4",
        ydata:[],
    },
    bar: {
        type:"bar",
        color:"#0084ff",    
        legend:"",
        ydata:[],
    },
    scatter: {
        type:"scatter",
        legend:"",
        color:"#0084ff",    
        xdata:[],
        ydata:[],
        pointStyle:"circle",
        pointRadius:"4"
    },
    bubble: {
        type:"bubble",    
        legend:"",
        color:"#0084ff",    
        xdata:[],
        ydata:[],
        rdata:[],
    },
    pie: {
        data:[],
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
        data:[],
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
        data:[],
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
        data:[],
        type:"radar",    
        color:"#0084ff",        
    }
}