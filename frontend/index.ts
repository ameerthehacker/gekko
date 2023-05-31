fetch('http://localhost:8000/fs/readFile')
.then(res => res.json())
.then(res => {
  document.getElementById('file-content').innerText = res.fileContent;
});
