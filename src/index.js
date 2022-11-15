const fs = require('fs/promises')

const  myFileWriter= async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	let ans=await fs.writeFile(fileName,fileContent,'utf-8' ,(err)=>{
		console.log("file is created")
		console.log(err)
	})
	return ans;	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let ans=await fs.readFile(fileName,'utf-8',(err)=>{
		if(err){
			console.log(err)
		}else{
			console.log(fileName)
		}
	})
	return ans
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	let ans=await fs.appendFile(fileName,fileContent,(err)=>{
		console.log('task completed')
	})
	return ans
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	let ans=await fs.unlink(fileName,(err)=>{
		if(err) {
			console.log(err)
		}
		console.log(`${fileName} is successfully deleted`)
	})
	return ans

}



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
console.log(myFileWriter("File.txt","Hello"));
// myFileUpdater("File.txt"," World")
// console.log(myFileDeleter("File.txt"))
console.log(myFileReader("File.txt"))
// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }