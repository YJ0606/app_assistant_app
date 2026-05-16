import { Injectable } from "@nestjs/common";
@Injectable()
export class UploadsService {
  async uploadFile(file: any): Promise<string> {
    // In prod: upload to Cloudinary
    return `https://placeholder.com/${file.originalname}`;
  }
}
