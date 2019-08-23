import Request from './fetch';

export const GET = api => FetchData(api);

const FetchData = api =>
  Request.get(api)
    .then(resp => resp.json())
    .catch(err => {
      throw new Error(err);
    });
