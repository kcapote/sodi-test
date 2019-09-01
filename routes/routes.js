module.exports = ( { urlHandler, profit, express } ) => {
    const router = express.Router();

    router.post('/profit/max', (req, res) => {
        const array = req.body.array;
        return res.json({
            ok: true,
            maxProfit: profit(array).calculateMaxProfit()
        });
    });

    router.post('/urls/short', (req, res) => {
        let url = req.body.url;
        return res.json({
            ok: true,
            shortUrl: urlHandler.shortStringUrl(url)
        });

    });

    router.get('/urls/init/:urlShort', (req, res) => {
        let urlShort = req.params.urlShort;
        return res.json({            
            ok: true,
            urlInit: urlHandler.initialUrl(urlShort)
        });
    });

    router.get('/urls', (req, res) =>{
        
        return res.json({
            ok: true,
            urls: urlHandler.list()
        });
    });



    return router;

}