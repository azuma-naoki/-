
// charts.js形式に変換
export const converter = (dataset, graphType) => {
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
            pushProperty(chartjsDataset,"borderColor", dataset.color);
            pushProperty(chartjsDataset,"borderDash", convertLineStyle(dataset.linestyle));
            pushProperty(chartjsDataset,"pointStyle", dataset.pointStyle);
            pushProperty(chartjsDataset,"pointRadius", dataset.pointRadius);
        }
    }
    if(converters[graphType]) {
        converters[graphType](dataset);
    } else {
        converters["line"](dataset);
        console.log(`${graphType}のデータセセットコンバーターが存在しませんのでlineで代用します`);
    }
    
    return chartjsDataset;
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