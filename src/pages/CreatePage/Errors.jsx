const isNumberString = n => {
    return typeof n === "number" || typeof n === "string" && n !== "" &&  !isNaN( n );
}

const isNumberArray = (array) => {
    for(const data of array) {
        if(!isNumberString(data)) {
            return false;
        }            
    }
    return true;
}
class Errors {
    constructor(graphData) {
        this.graphData = graphData;
        this.datasets = graphData["datasets"];
        this.graphType = this.datasets[0].type;
        this.errorStrings = [];
        this.setErrorStrings();
        if(this.existError()) {
            this.errorStrings.unshift("error:\n");
        }
    }
    existError() {
        return this.errorStrings.length !== 0;
    }
    getError() {        
        return this.errorStrings;
    }
    setErrorStrings() {
        let index = 0;   
        let errorString;
        const graphType = this.graphType;
        const datasets = this.datasets;
        const graphData = this.graphData;
        switch(graphType) {                    
            case "line":                
                for(let dataset of datasets) {
                    if(dataset["ydata"].length !== graphData["xdata"].length) {  //要素の長さを見る
                        errorString = `[グラフ${index+1}]: xdataとydataの要素数を同じにしてください\n`;
                        errorString += `xdataの要素数:${graphData.xdata.length}\n `;
                        errorString += `ydataの要素数:${dataset["ydata"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["ydata"])) {
                        errorString = `[グラフ${index+1}]: ydataの値は数値データにしてください`;                        
                        this.errorStrings.push(errorString);
                    } 
                    index++;
                }            
                break;
            case "bar":                
                for(let dataset of datasets) {
                    if(dataset["ydata"].length !== graphData["xdata"].length) {  //要素の長さを見る
                        errorString =`[グラフ${index+1}]: xdataとydataの要素数を同じにしてください\n`;
                        errorString += `xdataの要素数:${graphData.xdata.length}\n `;
                        errorString += `ydataの要素数:${dataset["ydata"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["ydata"])) {
                        errorString = `[グラフ${index+1}]: ydataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    } 
                    index++;
                }
                break;
            case "scatter":                
                for(let dataset of datasets) {
                    if(dataset["xdata"].length !== dataset["ydata"].length) {
                        errorString =`[グラフ${index+1}]: xdataとydataの要素数を同じにしてください\n`;
                        errorString += `xdataの要素数:${dataset["xdata"].length}\n `;
                        errorString += `ydataの要素数:${dataset["ydata"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["xdata"]) || !isNumberArray(dataset["ydata"])) {
                        errorString = `[グラフ${index+1}]: xdataとydataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);                  
                    }
                    index ++;
                }                
                break;
            case "bubble":                
                for(let dataset of datasets) {
                    if(!(dataset["xdata"].length === dataset["ydata"].length && dataset["rdata"].length === dataset["xdata"].length)) {
                        errorString = `[グラフ${index+1}]: xdataとydataとrdataの要素数を同じにしてください\n`;
                        errorString += `xdataの要素数:${dataset["xdata"].length}\n `;
                        errorString += `ydataの要素数:${dataset["ydata"].length}\n `;
                        errorString += `rdataの要素数:${dataset["rdata"].length}\n `;                        
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["xdata"]) || !isNumberArray(dataset["ydata"]) || !isNumberArray(dataset["rdata"])) {
                        errorString = `[グラフ${index+1}]: xdataとydataとrdataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    }
                    index ++;
                }        
                break;
            case "pie":                
                for(let dataset of datasets) {
                    if(dataset["data"].length !== graphData["labels"].length) {  //要素の長さを見る
                        errorString = `[グラフ${index+1}]: dataとlabelsの要素数を同じにしてください\n`;
                        errorString += `labelsの要素数:${graphData.labels.length}\n `;
                        errorString += `dataの要素数:${dataset["data"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["data"])) {
                        errorString = `[グラフ${index+1}]: dataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    } 
                    index ++;
                }
                break;
            case "doughnut":                                
                for(let dataset of datasets) {
                    if(dataset["data"].length !== graphData["labels"].length) {  //要素の長さを見る
                        errorString = `[グラフ${index+1}]: dataとlabelsの要素数を同じにしてください\n`;
                        errorString += `labelsの要素数:${graphData.labels.length}\n `;
                        errorString += `dataの要素数:${dataset["data"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["data"])) {
                        errorString = `[グラフ${index+1}]: dataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    } 
                    index++;
                }                
                break;        
            case "polarArea":                            
                for(let dataset of datasets) {
                    if(dataset["data"].length !== graphData["labels"].length) {  //要素の長さを見る
                        errorString = `[グラフ${index+1}]: dataとlabelsの要素数を同じにしてください\n`;
                        errorString += `labelsの要素数:${graphData.labels.length}\n `;
                        errorString += `dataの要素数:${dataset["data"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["data"])) {
                        errorString = `[グラフ${index+1}]: dataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    } 
                    index++;
                }
                break;     
            case "radar":                                
                for(let dataset of datasets) {
                    if(dataset["data"].length !== graphData["labels"].length) {  //要素の長さを見る
                        errorString = `[グラフ${index+1}]: dataとlabelsの要素数を同じにしてください\n`;
                        errorString += `labelsの要素数:${graphData.labels.length}\n `;
                        errorString += `dataの要素数:${dataset["data"].length}\n `;
                        this.errorStrings.push(errorString);
                    }
                    if(!isNumberArray(dataset["data"])) {
                        errorString = `[グラフ${index+1}]: dataの値は数値データにしてください`;
                        this.errorStrings.push(errorString);
                    } 
                    index ++;
                }
                break;
            default:
                return;
        }        
    }
}

export default Errors;