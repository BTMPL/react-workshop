export default {
  get: jest.fn(() => {
    return Promise.resolve({
      items: [],
      count: 20
    });
  }),
  post: jest.fn(() => {
    return Promise.resolve();
  })
};