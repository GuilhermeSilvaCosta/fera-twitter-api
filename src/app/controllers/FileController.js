import File from '../schemas/File';

class FileController {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
        });

        res.json({
            ...file._doc,
            url: `${process.env.APP_URL}/files/${path}`
        });
    }
}

export default new FileController();