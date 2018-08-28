export const fetchSearch = range => (
  $.ajax({
    url: `https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=${range.page}&price_min=${range.min}&price_max=${range.max}`,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('x-api-key', 'cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90');
    },
    method: 'GET'
  })
);