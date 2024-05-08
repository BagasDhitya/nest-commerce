import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import * as handlebars from 'handlebars';
import * as fs from 'fs';

import { Email } from './email.interface';

@Injectable()
export class EmailService {
  private template: HandlebarsTemplateDelegate<any>;

  constructor(private readonly mailerService: MailerService) {
    const source = fs.readFileSync(
      'src/email/template/email-template.hbs',
      'utf8',
    );
    this.template = handlebars.compile(source);
  }

  async sendEmail(email: Email): Promise<void> {
    const html = this.template(email.context);
    await this.mailerService.sendMail({
      from: 'bagasdhityataufiqqi21@gmail.com',
      to: email.to,
      subject: email.subject,
      html: html,
    });
  }
}
