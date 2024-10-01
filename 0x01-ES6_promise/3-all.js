import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const data = [];
  uploadPhoto()
    .then((response) => {
      data.push(response.body);
      createUser()
        .then((response) => {
          data.push(response.firstName, response.lastName);
          console.log(data.join(' '));
        })
        .catch(() => {
          console.log('Signup system offline');
        });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
