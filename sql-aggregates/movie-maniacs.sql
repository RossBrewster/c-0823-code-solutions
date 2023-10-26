select  sum("amount") as "totalRentalValues",
        "customers"."firstName",
        "customers"."lastName"
        from "payments"
        join "customers" using ("customerId")
        group by "customers"."customerId"
        order by "totalRentalValues" desc;
