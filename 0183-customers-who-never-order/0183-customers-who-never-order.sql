# Write your MySQL query statement below
select a.Name as Customers
  from Customers a
  where a.Id not in (
    select b.CustomerId from Orders b
  )