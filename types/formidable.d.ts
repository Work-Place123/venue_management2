// types/formidable.d.ts

declare module 'formidable' {
    import { IncomingMessage } from 'http';
    export interface File {
      newFilename: string;
      originalFilename: string;
      filepath: string;
      size: number;
      mimetype: string;
    }
    export interface Fields {
      [key: string]: string | string[];
    }
    export interface Files {
      [key: string]: File | File[];
    }
  
    export class IncomingForm {
      parse(req: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void): void;
      uploadDir: string;
      keepExtensions: boolean;
    }
  }
  