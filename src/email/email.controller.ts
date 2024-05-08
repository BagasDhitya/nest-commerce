import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { Email } from './email.interface';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() email: Email): Promise<string> {
    await this.emailService.sendEmail(email);
    return 'Email sent successfully!';
  }
}
