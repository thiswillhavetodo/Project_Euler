first_num = 1
next_num = 2
sum  = 0
while first_num<4000000
	if first_num%2 == 0 
		sum = sum  + first_num
	end
	saved_num = first_num
	first_num = next_num
	next_num = saved_num + first_num
end
puts sum
