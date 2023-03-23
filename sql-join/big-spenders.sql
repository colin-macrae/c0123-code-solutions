select "amount",
       "firstName",
       "lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
  limit 10;

-- join customers to payments using customerId
-- select amt, firstname, lastname
