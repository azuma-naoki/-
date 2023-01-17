
// charts.js形式に変換
export const converter = (graphData,dataset, graphType) => {
    const chartjsDataset = {
    };
    if(!dataset) {
        return;
    }
    const converters = {    
        line: (dataset) => {
            pushProperty(chartjsDataset,"type", "line");
            pushProperty(chartjsDataset,"data",  dataset.ydata);
            pushProperty(chartjsDataset,"label", dataset.legend);
            pushProperty(chartjsDataset,"borderColor", dataset.color);
            pushProperty(chartjsDataset,"borderDash", convertLineStyle(dataset.linestyle));
            pushProperty(chartjsDataset,"pointStyle", dataset.pointStyle);
            pushProperty(chartjsDataset,"pointRadius", dataset.pointRadius);
        },
        bar: (dataset) => {
            pushProperty(chartjsDataset,"type", "bar");
            pushProperty(chartjsDataset,"data",  dataset.ydata);
            pushProperty(chartjsDataset,"label", dataset.legend);
            pushProperty(chartjsDataset,"backgroundColor", dataset.color);
        },
        scatter: (dataset) => {
            pushProperty(chartjsDataset,"type", "scatter");
            pushProperty(chartjsDataset,"data",  createScatterData(dataset.xdata,dataset.ydata));
            pushProperty(chartjsDataset,"label", dataset.legend);
            pushProperty(chartjsDataset,"backgroundColor", dataset.color);
            pushProperty(chartjsDataset,"pointStyle", dataset.pointStyle);
            pushProperty(chartjsDataset,"pointRadius", dataset.pointRadius);
        },        
        bubble: (dataset) => {
            pushProperty(chartjsDataset,"type", "bubble");
            pushProperty(chartjsDataset,"data", createBubbleData(dataset.xdata,dataset.ydata,dataset.rdata));
            pushProperty(chartjsDataset,"label", dataset.legend);
            pushProperty(chartjsDataset,"backgroundColor", dataset.color);
            pushProperty(chartjsDataset,"pointStyle", dataset.pointStyle);
        },       
        pie: (dataset) => {
            pushProperty(chartjsDataset,"type", "pie");            
            pushProperty(chartjsDataset,"data", dataset.data);         
            pushProperty(chartjsDataset,"backgroundColor",dataset.colors)               
            console.log(dataset.colors)
        },   
        doughnut: (dataset) => {
            pushProperty(chartjsDataset,"type", "doughnut");            
            pushProperty(chartjsDataset,"data", dataset.data);                      
            pushProperty(chartjsDataset,"backgroundColor",dataset.colors)                 
        },      
        polarArea: (dataset) => {
            pushProperty(chartjsDataset,"type", "polarArea");            
            pushProperty(chartjsDataset,"data", dataset.data);                       
            pushProperty(chartjsDataset,"backgroundColor",dataset.colors)                
        },       
        radar:(dataset) => {
            pushProperty(chartjsDataset,"type", "radar");            
            pushProperty(chartjsDataset,"data", dataset.data);  
            pushProperty(chartjsDataset,"backgroundColor", dataset.color);
        }
    }
    
    converters[graphType](dataset);    
    return chartjsDataset;
}

function createBubbleData(xdata,ydata,rdata) {
    const data = [];
    if(!xdata || !ydata || !rdata) {
        return;
    }
    for(let i = 0; i < Math.min(xdata.length,ydata.length,rdata.length); i++) {
        data.push({x:xdata[i], y:ydata[i], r:rdata[i]});
    }
    return data;
}

function createScatterData(xdata,ydata) {
    const data = [];
    if(!xdata || !ydata) {
        return;
    }
    for(let i = 0; i < Math.min(xdata.length,ydata.length); i++) {
        data.push({x:xdata[i], y:ydata[i]});
    }
    return data;
}

function convertLineStyle(linestyle) {
    switch(linestyle) {
        case "solid":
            return [1,0];
        case "dashed":
            return [8,2];
        case "dotted":
            return [1,5];    
        case "dashdot":
            return [15, 3, 3, 3]
        default:
            return [1,0];
    }
}

function pushProperty(obj, property, value) {
    if(!value) return;
    obj[property] = value;        
}