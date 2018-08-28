export const createView = car => (
  $.ajax({
    url: '/api/cars',
    method: 'POST',
    data: { car }
  })
);

export const updateView = car => (
  $.ajax({
    url: `/api/cars/${car.vin}`,
    method: 'PATCH'
  })
);

export const fetchViews = () => (
  $.ajax({
    url: `/api/cars`,
    method: 'GET'
  })
)