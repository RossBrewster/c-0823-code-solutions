select  "customers"."firstName",
        "customers"."lastName"
        from "rentals"
        join "inventory" using ("inventoryId")
        join "customers" using ("customerId")
        join "films" as "f" using ("filmId")
        where "title" = 'Magic Mallrats';
