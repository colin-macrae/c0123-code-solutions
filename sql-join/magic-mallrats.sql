select "firstName",
        "lastName",
        "title"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "title" = 'Magic Mallrats';

  -- first, last name in CUSTOMERS (has customerId)
  -- movie rentals in RENTALS (has filmId and customerId)
  -- movie title in FILMS (has filmId)
