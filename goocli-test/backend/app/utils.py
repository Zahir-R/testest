import os
import boto3
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import JWTError, jwt
from botocore.exceptions import NoCredentialsError

# Security Constants
SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# S3 Configuration
AWS_REGION = os.getenv("AWS_REGION", "us-east-1")
AWS_BUCKET_NAME = os.getenv("AWS_BUCKET_NAME", "menopause-app-storage")
s3_client = boto3.client('s3', region_name=AWS_REGION)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def upload_to_s3(file_obj, filename, folder="uploads"):
    object_name = f"{folder}/{filename}"
    try:
        s3_client.upload_fileobj(
            file_obj, 
            AWS_BUCKET_NAME, 
            object_name, 
            ExtraArgs={'ACL': 'public-read'}
        )
        url = f"https://{AWS_BUCKET_NAME}.s3.{AWS_REGION}.amazonaws.com/{object_name}"
        return url
    except NoCredentialsError:
        return None
    except Exception as e:
        print(f"Error uploading to S3: {e}")
        return None
