const baseUrl = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://covid-fts-next.vercel.app'
    : 'http://localhost:4000';
};

export default baseUrl;
