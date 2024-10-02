import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const res = values.map((value) => ({
      value: value.value || String(value.reason),
      status: value.status,
    }));
    return res;
  });
  return promise;
}
