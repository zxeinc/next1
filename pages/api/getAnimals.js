import fs from 'fs'
export default (req, res) => {
  try{
    const fileContent = fs.readFileSync('public/animals.json');
    const arr = JSON.parse(fileContent);
    res.status(200).send(JSON.stringify(arr));
  }
  catch(e){
    console.log(e);
    res.status(200).send("[]");
  }
};
 
 
