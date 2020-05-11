import User from '../schemas/User';

class UserController {

    async index(req, res) {
        const [user] = await User.find({});

        return res.json(user);
    }

    async store(req, res) {
        const { body } = req;

        const user = await User.create(body);

        return res.json(user);
    }

    async update(req, res) {
        const { _id } = req.params;
        const { body } = req;

        const user = await User.findByIdAndUpdate( _id, {
            ...body
        }, { new: true } );

        return res.json(user);
    }

}

export default new UserController();