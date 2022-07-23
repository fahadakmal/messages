import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs';

@Injectable()
export class MessagesRepositery {
  findOne(id: string) {
    return new Promise(function (resolve, reject) {
      readFile('messages.json', 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const httpResponseObjectArray = JSON.parse(data);
          resolve(httpResponseObjectArray[id]);
        }
      });
    });
  }
  async findAll() {
    return new Promise(function (resolve, reject) {
      readFile('messages.json', 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const httpResponseObjectArray = JSON.parse(data);
          resolve(httpResponseObjectArray);
        }
      });
    });
  }
  async create(content: string) {
    return new Promise(function (resolve, reject) {
      readFile('messages.json', 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const messages = JSON.parse(data);

          const id = Math.floor(Math.random() * 999);
          messages[id] = { id, content: content };
          writeFile('messages.json', JSON.stringify(messages), () => {
            resolve(messages[id]);
          });
        }
      });
    });
  }
}
