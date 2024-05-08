import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/product.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ProductsModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
