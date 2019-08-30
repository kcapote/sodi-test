module.exports = ( { urlHandler, express } ) => {
    const router = express.Router();

    router.get('/maxProfit', (req, res) => {
        return res.json({
            ok: true
        });
    });

    router.get('/urlShort/:url', (req, res) => {
        let url = req.params.url;
        return res.json({
            ok: true,
            shortUrl: urlHandler.shortStringUrl(url)
        });

    });

    router.get('/urlInit/:urlShort', (req, res) => {
        let urlShort = req.params.urlShort;
        return res.json({            
            ok: true,
            urlInit: urlHandler.initialUrl(urlShort)
        });
    });

    return router;

}