profit =  (array) => {
   
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


url = (shortid) => {

    let urls = [];

    const shortStringUrl = (url) => {
        let key = shortid.generate();
        //let key = 'KDS14ojXX';
        let obj = { key, url };
        urls = [...urls, obj];
        return key;
    }

    const initialUrl = (shortUrl) => {        
        return urls.find(url => url.key = shortUrl );
    }

    return {
        shortStringUrl,
        initialUrl
    }

}


module.exports = {
    profit,
    url
}



