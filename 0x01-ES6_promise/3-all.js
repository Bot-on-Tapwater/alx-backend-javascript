import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoDet = uploadPhoto();
  const userDet = createUser();

  return Promise.all([photoDet, userDet])
    .then(([photoRes, userRes]) => {
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
