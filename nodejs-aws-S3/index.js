import { S3Client , GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from 'dotenv'
dotenv.config()

const s3Client = new S3Client({  // The accessId and Key of the IAM user , has the permission to use s3 Services.
    
    region : "ap-south-1",
    credentials : {
        accessKeyId : process.env.ACCESS_KEY,
        secretAccessKey : process.env.SECRET
    }
});

async function GetObjectURL(key){
    const command = new GetObjectCommand({
        Bucket: "s3-learningbucket", // This is a Bucket Name that you have created using AWS Console
        Key : key,
    })
    const url = await getSignedUrl(s3Client , command)
    return url
}

async function init(){  // function for creating a singed url 
    console.log('Url for Harsh_Photo.jpg' , await GetObjectURL('Harsh_Photo.jpg')) // Name should be exact same as In the s3 Bucket
}

init()

/*
init() func will print this : 

https://s3-learningbucket.s3.ap-south-1.amazonaws.com/harsh.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD
&X-Amz-Credential=AKIA4KDQF6N7QW4MHRGM%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T131021Z&X-Amz-Expires=900&X-Amz-
Signature=2fd2132db5065f781d3b86b76325588592ec603eb22cfb9bf211631945cc6bb6&X-Amz-SignedHeaders=host&x-id=GetObject
*/

