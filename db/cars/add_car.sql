insert into cars
(year, make, model, rowsOfSeats, licensePlate)
values
($1, $2, $3, $4, $5)
RETURNING *;