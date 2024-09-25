import { Controller, Delete, Get, Patch, Post, Put, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  mainPage(@Res() res: Response) {
    return res.sendFile(process.cwd() + '/views/index.html');
  }

  @Get('hello2')
  hello2(): string {
    return 'Hello world too!';
  }

  @Get('profile')
  @Render('profile')
  profile() {
    return {
      user: {
        name: 'Me',
        picture: 'profile.png',
        age: 19,
        hobbies: [
          'gaming',
          'programiing',
          'drawing'
        ]
      }
    }
  }

  @Get('profile/1')
  @Render('profile')
  profile1() {
    return {
      user: {
        name: 'Admin',
        picture: 'profile_admin.png',
        age: 45,
        hobbies: [
          'fishing',
          'programiing',
          'jogging'
        ]
      }
    }
  }

  @Get('BlueOrRed')
  @Render('BlueOrRed')
  BlueOrRed(){
    return{
      random : Math.floor(Math.random() * 2) + 1
    }
  }

  @Get('books/:isbn')
  @Render('book')
  getBookByIsbn(@Param('isbn') isbn: string){
    return this.#books.find(
      b => b.isbn == isbn
    )
  }

  // HTTP metódusok
  // 
  @Post('register')
  register() {

  }

  @Delete('removePost')
  removePost('deleteQuote/:id') {

  }

  @Put('uploadImage')
  uploadImage() {}

  @Patch('editProfile')
  editProfile() {}
}
