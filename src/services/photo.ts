import { UploadImageResponse } from '@/dto/PhotoDto';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create();

const PhotoService = {
  uploadImage: async (data: FormData) => {
    const response: AxiosResponse<UploadImageResponse> = await instance({
      url: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      method: 'post',
      data: data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    return response.data;
  },
};

export default PhotoService;
