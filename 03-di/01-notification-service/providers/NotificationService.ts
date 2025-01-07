import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class NotificationService {
  sendEmail(to: string, subject: string, message: string): void {
    if (!to) throw new BadRequestException(`Incorrect email`);

    console.log(`Email sent to ${to}: [${subject}] ${message}`);
  }

  sendSMS(to: string, message: string): void {
    if (!to) throw new BadRequestException(`Incorrect email`);
    console.log(`SMS sent to ${to}: ${message}`);
  }
}
