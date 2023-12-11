export default function signUpUser(firstName, lastName) {
  const myPromise = new Promise((resolve) => {
    const myObject = { firstName, lastName };
    resolve(myObject);
  });

  return Promise.resolve(myPromise);
}
