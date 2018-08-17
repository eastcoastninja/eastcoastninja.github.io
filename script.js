console.log('fileOrigin', fileOrigin);
console.log('viewerOrigin', viewerOrigin);

// ... right above:

if (fileOrigin !== viewerOrigin) {
throw new Error('file origin does not match viewer\'s');
}