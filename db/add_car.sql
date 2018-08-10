insert into cars
(auth_id, year, make, model, rowsOfSeats, licensePlate)
values
($1, $2, $3, $4, $5, $6)
RETURNING *;