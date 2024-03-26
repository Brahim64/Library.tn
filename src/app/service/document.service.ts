import { Injectable } from '@angular/core';
import { document } from '../shared/model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents:document[]=[
      
    { id:1,
      title:"Algorthmique",
      dateOfPub:new Date(),
      author:'Rick and Morty',
      theme:"computer science",
      keywords:["trie","algorithme","complexté","array","sorting"],
      fileType:"pdf",
      resume:"learn how to solve algorithmic problems ...",
      file:"",
      photo:"./assets/images/algo.jpg"
    }
    ,
    { id:2,
      title:"Angular",
      dateOfPub:new Date(),
      author:'gang of four',
      theme:"computer science",
      keywords:["directives","pipe","routing","components","injection"],
      fileType:"pdf",
      resume:"learn angular 16 ...",
      file:"",
      photo:"./assets/images/angular.jpg"
    },
    { id:3,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"pdf",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:4,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"pdf",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:5,
      title:"Algorthmique",
      dateOfPub:new Date(),
      author:'Rick and Morty',
      theme:"computer science",
      keywords:["trie","algorithme","complexté","array","sorting"],
      fileType:"pdf",
      resume:"learn how to solve algorithmic problems ...",
      file:"",
      photo:"./assets/images/algo.jpg"
    },
    { id:6,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"pdf",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    },
    { id:7,
      title:"algebra",
      dateOfPub:new Date(),
      author:'Reillmann',
      theme:"Maths",
      keywords:["linear algebra","vecotrs","matrix"],
      fileType:"pdf",
      resume:"learn algebra now ...",
      file:"",
      photo:"./assets/images/default.jpg"
    }
  ]
  constructor() { }
  getAllDocuments():document[]{
    return this.documents;
  }
  getDocumentById(id:number):document{
    return this.documents.find(doc=>doc.id==id);
  }
  
}
