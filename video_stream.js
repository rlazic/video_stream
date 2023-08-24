const videoEle = document.getElementById('video');
navigator.mediaDevices.getUserMedia({
    video: true
})
.then(stream => {
    videoEle.srcObject = stream;
})
.catch(error => {
    console.error('Error accessing camera:', error);
});