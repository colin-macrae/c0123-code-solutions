select "firstName",
        "lastName",
        "title"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "title" = 'Magic Mallrats';

  -- first, last name in CUSTOMERS (has customerId)
  -- INVENTORY (filmId and inventoryId)
  -- movie rentals in RENTALS (has customerId)
  -- movie title in FILMS (has filmId)
