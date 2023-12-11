import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);

  try {
    const [photoRes, userRes] = await Promise.allSettled([photo, user]);

    const resultsArray = [
      {
        status: userRes.status,
        value: userRes.status === 'fulfilled' ? userRes.value : userRes.reason,
      },
      {
        status: photoRes.status,
        value: photoRes.status === 'fulfilled' ? photoRes.value : photoRes.reason,
      },
    ];

    return resultsArray;
  } catch (error) {
    console.error('Error during promise settlement:', error);
    throw error;
  }
}
