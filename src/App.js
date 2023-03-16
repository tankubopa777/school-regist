// import './App.css';
// import Login_page from './page/Login.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home_page from './page/Home.js';
// import Registered_page from './page/Registered.js';
// //import Student from './Student.js' 

import * as XLSX from 'xlsx';
import xlsx_file from "./clearDATA.xlsx";

function xlsxArrayBufferToBlob(arrayBuffer) {
    const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const blob = new Blob([arrayBuffer], { type: mimeType });
    return blob;
  }

function readXlsxFile(file) {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      const blob = xlsxArrayBufferToBlob(file)
      fileReader.readAsArrayBuffer(blob);
  
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  
    return promise;
  }

export default function App() {
    readXlsxFile(xlsx_file).then((data) => {
      console.log(data);
    });
}
