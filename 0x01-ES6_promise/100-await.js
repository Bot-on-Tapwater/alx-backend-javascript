import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadReponse, newUserReponse] = response;
      return { photo: uploadReponse, user: newUserReponse };
    })
    .catch(() => ({ photo: null, user: null }));
}
