import Tweet from '../schemas/Tweet';

class TweetController {

    async index(req, res) {
        try {
            console.log('oi?')
            const tweets = await Tweet.find({}).sort({ createdAt: 'desc' }).populate('author');
            return res.json(tweets);
        } catch(e) {
            return res.status(502).json(e);
        }
    }

    async store(req, res) {
        const { body } = req;

        const tweet = await (await Tweet.create(body)).populate('author').execPopulate();

        return res.json(tweet);
    }

}

export default new TweetController();