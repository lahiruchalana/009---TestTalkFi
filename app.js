
// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const filename = 'Local path to audio file, e.g. /path/to/audio.raw';
// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'BCP-47 language code, e.g. en-US';

const filename = './resources/audio3.raw';
const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';

const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
const audio = {
  content: fs.readFileSync(filename).toString('base64'),
};

const request = {
  config: config,
  audio: audio,
};

// // Detects speech in the audio file
// const [response] = await client.recognize(request);
// const transcription = response.results
//   .map(result => result.alternatives[0].transcript)
//   .join('\n');
// console.log('Transcription: ', transcription);

async function main() {
    const [operation] = await client.longRunningRecognize(request);
    const [response] = await operation.promise();
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
}
  
main()










// // Imports the Google Cloud client library
// const speech = require('@google-cloud/speech');

// // Creates a client
// const client = new speech.SpeechClient();

// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// const gcsUri = 'C:\Users\Lahiru\Desktop\The Mirror Daily News\2021-02-26\Voice records\sample.raw';
// const encoding = 'LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'en-US';

// const config = {
//   encoding: encoding,
//   sampleRateHertz: sampleRateHertz,
//   languageCode: languageCode,
// };
// const audio = {
//   uri: gcsUri,
// };

// const request = {
//   config: config,
//   audio: audio,
// };

// // // Detects speech in the audio file
// // const [response] = await client.recognize(request);
// // const transcription = response.results
// //   .map(result => result.alternatives[0].transcript)
// //   .join('\n');
// // console.log('Transcription: ', transcription);

// async function main() {
//     const [operation] = await client.longRunningRecognize(request);
//     const [response] = await operation.promise();
//     const transcription = response.results
//       .map(result => result.alternatives[0].transcript)
//       .join('\n');
//     console.log(`Transcription: ${transcription}`);
// }
  
// main()










// const fs = require('fs');

// // Imports the Google Cloud client library
// const speech = require('@google-cloud/speech');

// // Creates a client
// const client = new speech.SpeechClient();

// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// const filename = './resources/audio.mp3';
// const encoding = 'LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'en-US';

// const request = {
//   config: {
//     encoding: encoding,
//     sampleRateHertz: sampleRateHertz,
//     languageCode: languageCode,
//   },
//   interimResults: false, // If you want interim results, set this to true
// };

// // Stream the audio to the Google Cloud Speech API
// const recognizeStream = client
//   .streamingRecognize(request)
//   .on('error', console.error)
//   .on('data', data => {
//     console.log(
//       `Transcription: ${data.results[0].alternatives[0].transcript}`
//     );
//   });

// // Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
// fs.createReadStream(filename).pipe(recognizeStream);

// console.log("Testing")