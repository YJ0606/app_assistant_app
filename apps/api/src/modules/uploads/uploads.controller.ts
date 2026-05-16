import { Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { UploadsService } from "./uploads.service";
@ApiTags("Uploads") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("uploads")
export class UploadsController {
  constructor(private s: UploadsService) {}
  @Post() upload() { return { url: "placeholder" }; }
}
