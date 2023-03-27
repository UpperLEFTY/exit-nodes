# Write your MySQL query statement below
select S.Score, Dense_Rank() over(order by S.Score desc) 'Rank' from Scores S