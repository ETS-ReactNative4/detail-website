create table cars(
    id serial primary key,
    auth_id text,
    year integer,
    make varchar(20),
    model varchar(20),
    rowsOfSeats integer,
    licensePlate varchar(10)
)