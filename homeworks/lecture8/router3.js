const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const {query1, query2} = req.query;

    const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`

    const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
    const [result1, result2] = await Promise.all([response1.json(), response2.json()]);

    
    const final = {
        [query1]:{
            "created_at": result1.hits[0].created_at,
            "title": result1.hits[0].title
        },
        [query2]:{
            "created_at": result2.hits[0].created_at,
            "title": result2.hits[0].title
        }
    };

    res.json(final);

})

module.exports = router;