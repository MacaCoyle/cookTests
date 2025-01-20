// cypress/support/urls.js
export const urls = {
    baseUrl: 'https://gorest.co.in/public/v1',
    users: '/users',
    specificUser: (userId) => `/users/${userId}`,
  };