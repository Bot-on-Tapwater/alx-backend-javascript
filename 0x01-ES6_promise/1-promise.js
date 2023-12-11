export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const myObject = {
        status: 200,
        body: 'Success',
      };
      resolve(myObject);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
