const profit =  (array) => {
   
    maxProfit = -1;

    const calculateMaxProfit = () =>{
        array.forEach((elem, idx) => {
            max(elem, idx+1);
        });
        return maxProfit;
    }

    const max = (elem, current = 0) => {
        if((array[current] - elem)> maxProfit ){
            maxProfit = array[current] - elem;
        }
        if( current > array.length ){
            return maxProfit
        }else{
            return max(elem, current+1);
        }
    }

    return {
        calculateMaxProfit
    }

}


const url = (shortid) => {

    let urls = [];

    const shortStringUrl = (url) => {
        const key = shortid.generate();        
        const obj = { key, url };
        urls.push(obj) ;
        return key;
    }

    const initialUrl = (shortUrl) => {
        let result = urls.find(url => url.key === shortUrl);
        return result ? result.url : 'No existe la url';
      }

    const list = () => {
        return urls;
    }

    return {
        shortStringUrl,
        initialUrl,
        list
    }

}


module.exports = {
    profit,
    url
}



