import express from 'express';
import multer from 'multer';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

// databaseof the image
import ImageModel from '../../database/image/image'
import RestaurantModel from '../../database/restaurant/restau'
// utility 
// import {s3Upload} from '../../Utility/AWS/s3';

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: "",
        secretAccessKey: ""
    }
});

Router.post('/', upload.single("file"), async (req, res) => {

    try {
        const file = req.file;

        const bucketOptions = {
            Bucket: "",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };

        const s3Upload = new Upload({

            client: s3Client,
            params: bucketOptions
        });

        const UploadImage = await s3Upload.done();

        const { _id } = req.query;

        const ImageDoc = await ImageModel.findOneAndUpdate({ restaurant: _id }, { $push: { photos: { $each: [UploadImage.Location] } } });


        if (!ImageDoc) {

            await ImageModel.create({
                restaurant: _id,
                photos: UploadImage.Location
            });

            return res.json({ message: "Successfully Added" });
        }

        return res.json({ message: "Successfully Added" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;