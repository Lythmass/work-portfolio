export const validationData = {
  name: {
    required: 'Name is required.',
  },
  email: {
    required: 'Email is required.',
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter correct email format.',
    },
  },
  subject: {
    required: 'Subject is required.',
  },
  message: {
    required: 'Message is required.',
  },
};

export default validationData;
